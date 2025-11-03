import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('📨 Email API request:', body);

    const { email, name, orderId, total } = body;

    const result = await resend.emails.send({
      from: 'QuickCart <onboarding@resend.dev>',
      to: "dhanwateaaditya@gmail.com",
      subject: `Order Confirmation #${orderId}`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for your order with <b>QuickCart</b>!</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Total Amount:</strong> ₹${total}</p>
        <br><p>— The QuickCart Team</p>
      `,
    });

    console.log('✅ Resend API response:', result);
    return Response.json({ success: true });
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
