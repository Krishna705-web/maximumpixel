import nodemailer from "nodemailer";

interface SendContactEmailParams {
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  projectType?: string;
  expectedDate?: string | null;
  budgetRange?: string | null;
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
  company,
  email,
  phone,
  projectType = "General Inquiry",
  expectedDate,
  budgetRange,
  message,
}: SendContactEmailParams) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false";
  const adminReceiver =
    process.env.CONTACT_RECEIVER_EMAIL ||
    process.env.SMTP_USER ||
    "hello.maximumpixel@gmail.com";

  if (!user || !pass) {
    console.warn("SMTP credentials (SMTP_USER / SMTP_PASS) not configured in environment.");
    return {
      success: false,
      mocked: true,
      error: "SMTP credentials not configured on server.",
    };
  }

  const cleanUser = user.trim();
  const cleanPass = pass.trim().replace(/\s+/g, "");
  const isGmail = !host || host.includes("gmail") || cleanUser.includes("@gmail.com");

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
  const safeCompany = company ? escapeHtml(company) : "Not provided";
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeProjectType = escapeHtml(projectType);
  const safeExpectedDate = expectedDate ? escapeHtml(expectedDate) : "Flexible / Not specified";
  const safeBudget = budgetRange ? escapeHtml(budgetRange) : "Not specified";
  const safeMessage = escapeHtml(message);

  const adminMailOptions = {
    from: `"Maximum Pixel Studio" <${cleanUser}>`,
    to: adminReceiver,
    replyTo: email,
    subject: `New Project Inquiry — ${safeName} (${safeProjectType})`,
    text: `
New Project Inquiry — Maximum Pixel

Name: ${name}
Business / Brand: ${company || "Not provided"}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Project Type: ${projectType}
Expected Date: ${expectedDate || "Flexible / Not specified"}
Budget Range: ${budgetRange || "Not specified"}

Project Description:
${message}
    `,
    html: `
      <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #F4F3EF; color: #171717; border: 1px solid #DAD8D1;">
        <div style="border-bottom: 1px solid #DAD8D1; padding-bottom: 16px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #A78B70;">New Project Inquiry</p>
          <h2 style="margin: 6px 0 0 0; font-size: 22px; color: #171717;">Maximum Pixel Studio</h2>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: #FFFFFF; border: 1px solid #DAD8D1; margin-bottom: 20px; font-size: 14px;">
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873; width: 38%;">Name</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; font-weight: 600;">${safeName}</td></tr>
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873;">Brand / Business</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1;">${safeCompany}</td></tr>
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873;">Email</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1;"><a href="mailto:${safeEmail}" style="color: #171717;">${safeEmail}</a></td></tr>
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873;">Phone / WhatsApp</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1;">${safePhone}</td></tr>
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873;">Project Type</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1;">${safeProjectType}</td></tr>
          <tr><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1; color: #777873;">Expected Date</td><td style="padding: 10px 14px; border-bottom: 1px solid #DAD8D1;">${safeExpectedDate}</td></tr>
          <tr><td style="padding: 10px 14px; color: #777873;">Budget Range</td><td style="padding: 10px 14px;">${safeBudget}</td></tr>
        </table>

        <div style="background: #FFFFFF; border: 1px solid #DAD8D1; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #A78B70;">Project Brief</p>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #171717;">${safeMessage}</p>
        </div>

        <p style="font-size: 12px; color: #777873; margin: 0;">Maximum Pixel · Jaipur, Rajasthan, India</p>
      </div>
    `,
  };

  const clientConfirmationOptions = {
    from: `"Maximum Pixel Studio" <${cleanUser}>`,
    to: email,
    subject: `Inquiry Received — Maximum Pixel`,
    text: `
Hi ${name},

Thank you for reaching out to Maximum Pixel. We have received your inquiry for "${projectType}".

Our team is reviewing your project brief and will follow up with next steps shortly.

For time-sensitive projects, you can reach us on WhatsApp at +91 78787 36798 or reply to info@maximumpixel.online.

Regards,
Maximum Pixel Studio
Jaipur, Rajasthan, India
https://www.maximumpixel.online
    `,
    html: `
      <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #F4F3EF; color: #171717; border: 1px solid #DAD8D1;">
        <div style="border-bottom: 1px solid #DAD8D1; padding-bottom: 16px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #A78B70;">Maximum Pixel · Jaipur</p>
          <h1 style="margin: 6px 0 0 0; font-size: 22px; color: #171717;">We have received your inquiry.</h1>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #171717;">Hi ${safeName},</p>
        <p style="font-size: 14px; line-height: 1.6; color: #777873;">
          Thank you for getting in touch with Maximum Pixel regarding <strong style="color: #171717;">${safeProjectType}</strong>. Our team is reviewing your project brief and will get back to you with next steps.
        </p>

        <div style="background: #FFFFFF; border: 1px solid #DAD8D1; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #A78B70;">Summary Submitted</p>
          <p style="margin: 0; white-space: pre-wrap; font-size: 13px; line-height: 1.5; color: #777873;">${safeMessage}</p>
        </div>

        <p style="font-size: 13px; color: #777873; line-height: 1.6;">
          Direct WhatsApp: <a href="https://wa.me/917878736798" style="color: #171717;">+91 78787 36798</a><br />
          Email: <a href="mailto:info@maximumpixel.online" style="color: #171717;">info@maximumpixel.online</a>
        </p>
      </div>
    `,
  };

  try {
    const [adminInfo, clientInfo] = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientConfirmationOptions),
    ]);

    const adminSent = adminInfo.status === "fulfilled";
    const clientSent = clientInfo.status === "fulfilled";

    return {
      success: adminSent || clientSent,
      adminMessageId: adminInfo.status === "fulfilled" ? adminInfo.value.messageId : null,
      clientMessageId: clientInfo.status === "fulfilled" ? clientInfo.value.messageId : null,
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error("Nodemailer send error:", err);
    return { success: false, error: errMsg };
  }
}
