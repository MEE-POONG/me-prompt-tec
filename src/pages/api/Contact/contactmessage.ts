import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

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

    return res.status(201).json({
      message: 'Contact message created',
      data: newMessage,
    });
  } catch (err) {
    console.error('Error creating contact message:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
