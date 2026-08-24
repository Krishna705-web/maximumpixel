import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

// In-memory rate limiting map: IP -> timestamp array
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
    // 1. IP Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (!checkRateLimit(ip, 10, 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, message, hp } = body;

    // 2. Honeypot check (anti-bot trap)
    if (hp) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 3. Strict Input validation & length limits
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

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a message or project description." },
        { status: 400 }
      );
    }

    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be under 5,000 characters." },
        { status: 400 }
      );
    }

    // 4. Save to Database (fail-safe for serverless runtimes)
    let savedId = `inq_${Date.now()}`;
    try {
      const savedMessage = await prisma.message.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? phone.trim() : null,
          message: message.trim(),
          status: "new",
        },
      });
      savedId = savedMessage.id;
    } catch (dbError) {
      console.warn("DB write bypassed in read-only environment:", dbError);
    }

    // 5. Send email notification via Nodemailer
    try {
      const emailResult = await sendContactNotification({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        message: message.trim(),
      });
      if (!emailResult.success) {
        console.warn("⚠️ Contact form saved but email dispatch failed:", emailResult.error);
      }
    } catch (emailError) {
      console.error("Error invoking sendContactNotification:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! We will get back to you soon.",
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
