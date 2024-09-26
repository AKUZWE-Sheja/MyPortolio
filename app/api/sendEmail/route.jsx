import nodemailer from 'nodemailer';

// testing 
export async function GET() {
  return new Response(JSON.stringify({ message: 'API is working!' }), { status: 200 });
}

export async function POST(req) {
    // Parse the request body
    const { firstname, lastname, email, phone, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    try {
      await transporter.sendMail({
        from: email, // Email from the user
        to: process.env.EMAIL_USER, // Your email to receive the message
        subject: `Portfolio Form Submission from ${firstname} ${lastname}`, 
        text: `Name: ${firstname} ${lastname}
               Email: ${email}
               Phone: ${phone}
               Service: ${service}
               Message: ${message}`,
      });

      return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ error: 'Error sending email.' }), { status: 500 });
    }
}
