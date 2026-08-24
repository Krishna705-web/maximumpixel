import nodemailer from "nodemailer";

interface SendContactEmailParams {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactNotification({
  name,
  email,
  phone,
  message,
}: SendContactEmailParams) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false"; // Default true for port 465
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "hello.maximumpixel@gmail.com";

  // If SMTP is not fully configured, log diagnostic info
  if (!user || !pass) {
    console.warn("⚠️ SMTP credentials (SMTP_USER / SMTP_PASS) not configured in environment.");
    console.log("Mocking email dispatch payload:");
    console.log(`To: ${to}`);
    console.log(`From: ${name} <${email}> (${phone || "No phone"})`);
    console.log(`Message: ${message}`);
    return {
      success: false,
      mocked: true,
      error: "SMTP credentials not configured on server.",
    };
  }

  // Sanitize credentials: strip any spaces from Gmail 16-char app password
  const cleanUser = user?.trim();
  const cleanPass = pass?.trim().replace(/\s+/g, "");

  // Create transporter: use Gmail service preset if host contains gmail or user is a gmail address
  const isGmail = !host || host.includes("gmail") || (cleanUser && cleanUser.includes("@gmail.com"));

  const transporter = isGmail
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: cleanUser,
          pass: cleanPass,
        },
      })
    : nodemailer.createTransport({
        host,
        port,
        secure: port === 465 || secure,
        auth: {
          user: cleanUser,
          pass: cleanPass,
        },
      });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeMessage = escapeHtml(message);

  const mailOptions = {
    from: `"MaximumPixel Studio" <${user}>`,
    to,
    replyTo: email,
    subject: `⚡ New Inquiry from ${safeName} via MaximumPixel`,
    text: `
New Client Inquiry Received:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0A0A0A; color: #FFFFFF; border-radius: 16px; border: 1px solid #222222;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #222;">
          <h2 style="color: #5B2EE8; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">⚡ New Inquiry</h2>
          <p style="color: #A0A0A0; margin: 6px 0 0 0; font-size: 13px;">MaximumPixel Creative Content & Media Studio</p>
        </div>
        
        <div style="background-color: #141416; padding: 18px; border-radius: 12px; margin: 20px 0; border: 1px solid #282828;">
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #A0A0A0;">Client Name:</strong> <span style="color: #FFFFFF; font-weight: 600;">${safeName}</span></p>
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #A0A0A0;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #FF7A1A; text-decoration: none; font-weight: 600;">${safeEmail}</a></p>
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #A0A0A0;">Phone / WhatsApp:</strong> <span style="color: #22B14C; font-weight: 600;">${safePhone}</span></p>
        </div>

        <div style="background-color: #141416; padding: 18px; border-radius: 12px; margin: 20px 0; border: 1px solid #282828;">
          <h4 style="margin: 0 0 10px 0; color: #5B2EE8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Project Requirements:</h4>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #E0E0E0;">${safeMessage}</p>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${safeEmail}?subject=Re:%20Your%20Inquiry%20with%20MaximumPixel" style="display: inline-block; background-color: #5B2EE8; color: #FFFFFF; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px;">
            Reply to Client Directly
          </a>
        </div>

        <p style="font-size: 11px; color: #666666; text-align: center; margin-top: 28px; border-top: 1px solid #1A1A1A; padding-top: 16px;">
          MaximumPixel Studio — Jaipur, Rajasthan, India
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
