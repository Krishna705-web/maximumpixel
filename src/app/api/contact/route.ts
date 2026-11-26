import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

const ipRateLimits = new Map<string, number[]>();

function checkRateLimit(ip: string, limit = 10, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const timestamps = (ipRateLimits.get(ip) || []).filter((t) => now - t < windowMs);

  if (timestamps.length >= limit) {
    return false;
  }

  timestamps.push(now);
  ipRateLimits.set(ip, timestamps);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (!checkRateLimit(ip, 10, 60 * 1000)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      projectType,
      expectedDate,
      budgetRange,
      message,
      hp,
    } = body;

    // Honeypot anti-bot trap
    if (hp) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (email.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: "Email must be under 150 characters." },
        { status: 400 }
      );
    }

    if (phone && (typeof phone !== "string" || phone.trim().length > 30)) {
      return NextResponse.json(
        { success: false, error: "Phone number is too long." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a brief project description (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: "Project description must be under 5,000 characters." },
        { status: 400 }
      );
    }

    const cleanCompany = typeof company === "string" ? company.trim().slice(0, 120) : "";
    const cleanProjectType =
      typeof projectType === "string" ? projectType.trim().slice(0, 80) : "General Inquiry";
    const cleanExpectedDate =
      typeof expectedDate === "string" ? expectedDate.trim().slice(0, 80) : "";
    const cleanBudget =
      typeof budgetRange === "string" ? budgetRange.trim().slice(0, 80) : "";

    const formattedDetails = [
      `Project Type: ${cleanProjectType}`,
      cleanCompany ? `Business / Brand: ${cleanCompany}` : null,
      cleanExpectedDate ? `Expected Date: ${cleanExpectedDate}` : null,
      cleanBudget ? `Budget Range: ${cleanBudget}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    let savedId = `inq_${Date.now()}`;
    let savedToDb = false;

    try {
      const savedMessage = await prisma.message.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? phone.trim() : null,
          message: formattedDetails,
          status: "new",
        },
      });
      savedId = savedMessage.id;
      savedToDb = true;
    } catch (dbError) {
      console.warn("DB write bypassed in read-only environment:", dbError);
    }

    let emailSent = false;
    try {
      const emailResult = await sendContactNotification({
        name: name.trim(),
        company: cleanCompany || null,
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        projectType: cleanProjectType,
        expectedDate: cleanExpectedDate || null,
        budgetRange: cleanBudget || null,
        message: message.trim(),
      });
      emailSent = Boolean(emailResult.success);
      if (!emailSent) {
        console.warn("Contact form email dispatch did not complete:", emailResult.error);
      }
    } catch (emailError) {
      console.error("Error invoking sendContactNotification:", emailError);
    }

    if (!savedToDb && !emailSent) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Submission could not be recorded at the moment. Please contact us directly via WhatsApp (+91 78787 36798) or info@maximumpixel.online.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your project inquiry has been received and our team will reply soon.",
        data: { id: savedId },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
