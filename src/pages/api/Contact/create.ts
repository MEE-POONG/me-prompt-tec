import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'; // เช็ค path นี้ว่าถูกต้อง

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
      status,
    } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'message is required' });
    }

    // สร้างข้อมูลลง DB
    const newMessage = await prisma.contactMessage.create({
      data: {
        name: name ?? "ไม่ระบุชื่อ",
        email: email ?? "",
        phone: phone ?? "",      // Schema คุณมี field นี้แล้ว ใช้ได้เลย
        subject: subject ?? "ไม่มีหัวข้อ",
        message: message,
        source: source ?? 'website', // Schema คุณมี field นี้แล้ว ใช้ได้เลย
        status: status ?? 'new',
        date: new Date(),        // Schema คุณมี field date ด้วย (ต้องส่งไป)
      },
    });

    return res.status(201).json({
      message: 'Created successfully',
      data: newMessage,
    });

  } catch (err) {
    console.error('Error creating contact:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}