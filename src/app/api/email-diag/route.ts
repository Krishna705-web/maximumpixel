import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim().replace(/\s+/g, "");
  const host = process.env.SMTP_HOST?.trim();
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const receiver = process.env.CONTACT_RECEIVER_EMAIL?.trim() || user || "hello.maximumpixel@gmail.com";

  const diagnostics: any = {
    smtp_user_present: Boolean(user),
    smtp_user_value: user ? `${user.substring(0, 4)}***@${user.split("@")[1] || "gmail.com"}` : "NOT_SET",
    smtp_pass_present: Boolean(pass),
    smtp_pass_length: pass ? pass.length : 0,
    smtp_host: host || "default (smtp.gmail.com)",
    smtp_port: port,
    receiver_email: receiver,
  };

  if (!user || !pass) {
    return NextResponse.json({
      status: "ERROR",
      message: "SMTP_USER or SMTP_PASS environment variables are missing in Vercel.",
      diagnostics,
    }, { status: 500 });
  }

  // Create transporter: use standard SMTP pool or service preset
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  try {
    // 1. Verify connection and credentials with Gmail
    await transporter.verify();
    diagnostics.transporter_verify = "SUCCESS (Authenticated with Gmail)";

    // 2. Dispatch a diagnostic test email
    const mailResult = await transporter.sendMail({
      from: `"MaximumPixel Diagnostic" <${user}>`,
      to: receiver,
      subject: "⚡ Live Diagnostic Test from MaximumPixel",
      text: "If you are reading this, Gmail SMTP authentication and email delivery is working 100% on your production server!",
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0A0A0A; color: #FFF; border-radius: 12px;">
          <h2 style="color: #22B14C;">✅ Gmail SMTP Delivery is Working!</h2>
          <p>This email was successfully authenticated and delivered from MaximumPixel on Vercel.</p>
          <p style="color: #A0A0A0; font-size: 12px;">Timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
    });

    return NextResponse.json({
      status: "SUCCESS",
      message: "Email successfully verified and sent to your Gmail inbox!",
      messageId: mailResult.messageId,
      accepted: mailResult.accepted,
      diagnostics,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      status: "AUTH_OR_DISPATCH_FAILED",
      error_message: error?.message || "Unknown error",
      error_code: error?.code || null,
      error_response: error?.response || null,
      diagnostics,
    }, { status: 500 });
  }
}
