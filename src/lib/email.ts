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
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const to = process.env.CONTACT_RECEIVER_EMAIL || "hello@maximumpixel.in";

  // If SMTP is not fully configured, log and resolve gracefully (safe for local development)
  if (!host || !user || !pass) {
    console.log("ℹ️ SMTP credentials not configured. Mocking email dispatch:");
    console.log(`To: ${to}`);
    console.log(`From: ${name} <${email}> (${phone || "No phone"})`);
    console.log(`Message: ${message}`);
    return { success: true, mocked: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeMessage = escapeHtml(message);

  const mailOptions = {
    from: `"MaximumPixel Web" <${user}>`,
    to,
    replyTo: email,
    subject: `⚡ New Inquiry from ${safeName} via MaximumPixel`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0A0A0A; color: #FFFFFF; border-radius: 12px; border: 1px solid #222;">
        <h2 style="color: #5B2EE8; margin-top: 0;">⚡ New Inquiry Received</h2>
        <div style="background-color: #141416; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #FF7A1A;">${safeEmail}</a></p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p>
        </div>
        <div style="background-color: #141416; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: #A0A0A0;">Message:</h4>
          <p style="white-space: pre-wrap; line-height: 1.5;">${safeMessage}</p>
        </div>
        <p style="font-size: 12px; color: #666; text-align: center; margin-top: 30px;">
          MaximumPixel Studio — Jaipur, Rajasthan
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
