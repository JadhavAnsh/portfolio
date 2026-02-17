import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, _gotcha } = await request.json();

    // Spam protection: Honeypot check
    if (_gotcha) {
      console.log("Spam detected/Honeypot filled");
      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 },
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contact@anshjadhav.in";

    // 1. Admin Email (Notification to you)
    const adminEmail = resend.emails.send({
      from: "Ansh Portfolio <contact@anshjadhav.in>", // Sent from your verified domain
      to: contactEmail,
      replyTo: email, // Direct reply to the user
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <div style="background: #7c3aed; padding: 20px; color: white;">
            <h2 style="margin: 0;">New Project Inquiry</h2>
          </div>
          <div style="padding: 20px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0; color: #333;">
                  <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px 0; color: #333;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px; border-left: 4px solid #7c3aed;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 15px 20px; background: #f5f5f5; font-size: 12px; color: #888; text-align: center;">
            Sent from your portfolio website
          </div>
        </div>
      `,
    });

    // 2. Auto-Reply Email (To the user)
    const userEmail = resend.emails.send({
      from: "Ansh Jadhav <contact@anshjadhav.in>",
      to: email,
      subject: "Thanks for reaching out! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name},</h2>
          <p style="color: #555; line-height: 1.6;">
            Thanks for reaching out! I've received your message regarding <strong>"${subject}"</strong> and will get back to you within 24-48 hours.
          </p>
          <p style="color: #555; line-height: 1.6;">
            In the meantime, feel free to check out my <a href="https://github.com/JadhavAnsh" style="color: #7c3aed;">GitHub</a> for my latest work.
          </p>
          <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #333; font-weight: bold; margin: 0;">Ansh Jadhav</p>
            <p style="color: #777; font-size: 14px; margin: 5px 0 0;">Full Stack Developer</p>
          </div>
        </div>
      `,
    });

    // Send both emails concurrently
    await Promise.all([adminEmail, userEmail]);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
