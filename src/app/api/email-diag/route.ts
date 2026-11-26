import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const expectedPassword = process.env.ADMIN_PASSWORD?.trim();
  const providedPassword =
    req.headers.get("x-admin-password")?.trim() ||
    req.nextUrl.searchParams.get("token")?.trim();

  if (!expectedPassword || providedPassword !== expectedPassword) {
    return NextResponse.json(
      { status: "UNAUTHORIZED", message: "Valid admin credentials required." },
      { status: 401 }
    );
  }

  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim().replace(/\s+/g, "");
  const host = process.env.SMTP_HOST?.trim();
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const receiver =
    process.env.CONTACT_RECEIVER_EMAIL?.trim() || user || "hello.maximumpixel@gmail.com";

  if (!user || !pass) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: "SMTP_USER or SMTP_PASS environment variables are missing.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.verify();
    const mailResult = await transporter.sendMail({
      from: `"Maximum Pixel Diagnostic" <${user}>`,
      to: receiver,
      subject: "SMTP Diagnostic Verification — Maximum Pixel",
      text: "SMTP authentication and delivery verified.",
    });

    return NextResponse.json(
      {
        status: "SUCCESS",
        message: "SMTP verified and diagnostic email dispatched.",
        messageId: mailResult.messageId,
        host: host || "smtp.gmail.com",
        port,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        status: "AUTH_OR_DISPATCH_FAILED",
        error_message: errMsg,
      },
      { status: 500 }
    );
  }
}
