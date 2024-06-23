const nodemailer = require("nodemailer");
export async function POST(req) {
  const { name, subject, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_TRANSPORTER_EMAIL,
      pass: process.env.NEXT_PUBLIC_TRANSPORTER_PASS,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_TRANSPORTER_EMAIL,
    subject: subject,
    text: message,
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
