import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create a transporter
        // Note: For production, you should use environment variables for these credentials
        // const transporter = nodemailer.createTransport({
        //     host: process.env.SMTP_HOST,
        //     port: process.env.SMTP_PORT,
        //     secure: true,
        //     auth: {
        //         user: process.env.SMTP_USER,
        //         pass: process.env.SMTP_PASS,
        //     },
        // });

        // Email options (for actual sending, currently commented out)
        const mailOptions = {
            from: process.env.SMTP_EMAIL, // Sender address (authenticated)
            to: 'markcomputerpinterssolution@gmail.com',   // Receiver address
            replyTo: email,               // Reply to the user's email
            subject: `New Inquiry from ${name}: ${subject}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        // MOCK EMAIL SENDING FOR DEV/DEMO (Since no credentials provided)
        console.log("Mock Email Sending:");
        console.log(`To: markcomputerpinterssolution@gmail.com`); // Business email
        console.log(`From: ${email} (${name})`);
        console.log(`Subject: New Inquiry: ${subject}`);
        console.log(`Message: ${message}`);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
