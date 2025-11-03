import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const result = await resend.emails.send({
      from: 'QuickCart Contact <onboarding@resend.dev>',
      to: 'dhanwateaaditya@gmail.com', // your own email for testing
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>You received a new message from QuickCart Contact Form:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('✅ Contact form email sent:', result);
    return Response.json({ success: true });
  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
