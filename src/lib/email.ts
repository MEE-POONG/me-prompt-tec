
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

if (!MAIL_USER || !MAIL_PASS) {
    console.warn('⚠️ Mailing is disabled. Missing MAIL_USER or MAIL_PASS in .env');
}

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});

export interface MailOptions {
    to: string;
    subject: string;
    html: string;
}

export async function sendEmail({ to, subject, html }: MailOptions) {
    if (!MAIL_USER || !MAIL_PASS) {
        console.log('Mock email sent (missing credentials):', { to, subject });
        return { success: false, error: 'Missing credentials' };
    }

    try {
        const info = await transporter.sendMail({
            from: `"Me Prompt Technology" <${MAIL_USER}>`,
            to,
            subject,
            html,
        });
        console.log('✅ Email sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending email:', error);
        return { success: false, error };
    }
}
