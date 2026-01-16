import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
      name,
      email,
      phone,
      subject,
      message,
      source,
      resumeUrl,
      portfolioUrl,
      handledById,
      status,
    } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'message is required' });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name: name ?? null,
        date: new Date(),
        email: email ?? null,
        phone: phone ?? null,
        subject: subject ?? null,
        message,
        source: source ?? 'intern-page',
        resumeUrl: resumeUrl ?? null,
        portfolioUrl: portfolioUrl ?? null,
        handledById: handledById ?? null,
        status: status ?? 'new',
      },
    });

    // --- Send Email Notifications ---
    // 1. Send to Admin
    await sendEmail({
      to: process.env.MAIL_USER || 'admin@example.com', // Send to self/admin
      subject: `🔔 New Contact/Application: ${subject ?? 'No Subject'}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <p><strong>Phone:</strong> ${phone ?? '-'}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #3b82f6;">
          ${message.replace(/\n/g, '<br/>')}
        </blockquote>
        ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">View Resume</a></p>` : ''}
        ${portfolioUrl ? `<p><strong>Portfolio:</strong> <a href="${portfolioUrl}">View Portfolio</a></p>` : ''}
        <br/>
        <p><small>System generated email from Me Prompt Technology Website</small></p>
      `,
    });

    // 2. Send Confirmation to User (if email exists)
    if (email) {
      const isIntern = source === 'intern-page' || source === 'application-form';
      const userSubject = isIntern
        ? '✅ เราได้รับใบสมัครฝึกงานของคุณแล้ว - Me Prompt Technology'
        : '✅ เราได้รับข้อความของคุณแล้ว - Me Prompt Technology';

      const userContent = isIntern
        ? `
          <h3>สวัสดีคุณ ${name},</h3>
          <p>ขอบคุณที่สนใจร่วมฝึกงานกับ Me Prompt Technology ครับ</p>
          <p>เราได้รับข้อมูลใบสมัครและเอกสารประกอบของคุณเรียบร้อยแล้ว ทีม HR จะทำการพิจารณาและติดต่อกลับโดยเร็วที่สุดครับ</p>
          <br/>
          <p>ขอบคุณครับ,<br/>ทีมงาน Me Prompt Technology</p>
        `
        : `
          <h3>สวัสดีคุณ ${name},</h3>
          <p>ขอบคุณที่ติดต่อหาเราครับ</p>
          <p>เราได้รับข้อความของคุณแล้ว และจะรีบตอบกลับให้เร็วที่สุดครับ</p>
          <br/>
          <p>ขอบคุณครับ,<br/>ทีมงาน Me Prompt Technology</p>
        `;

      await sendEmail({
        to: email,
        subject: userSubject,
        html: userContent,
      });
    }

    return res.status(201).json({
      message: 'Contact message created and emails sent',
      data: newMessage,
    });
  } catch (err) {
    console.error('Error creating contact message:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

}
