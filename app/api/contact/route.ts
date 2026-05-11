import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Message must be between 10 and 5000 characters." }, { status: 400 });
    }

    /* ---------- Send email if credentials are configured ---------- */
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo   = process.env.EMAIL_TO || emailUser;

    if (emailUser && emailPass) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        service: "gmail",
        auth: { user: emailUser, pass: emailPass },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${emailUser}>`,
        to: emailTo,
        replyTo: email,
        subject: `[Portfolio] ${subject} — from ${name}`,
        html: `
          <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#f8fafc;padding:32px;border-radius:12px;border:1px solid #1a1a2e">
            <h2 style="color:#10B981;margin-bottom:8px">New Contact Form Submission</h2>
            <hr style="border:1px solid #1a1a2e;margin-bottom:24px"/>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#3B82F6">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top:16px;padding:16px;background:#111;border-radius:8px;border-left:3px solid #10B981">
              <p style="white-space:pre-wrap">${message}</p>
            </div>
            <p style="color:#555;font-size:12px;margin-top:24px">Sent from mananagrawal.dev portfolio</p>
          </div>
        `,
      });
    }

    /* Log to console in development when email is not configured */
    if (!emailUser || !emailPass) {
      console.log("[Contact Form]", { name, email, subject, message });
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
