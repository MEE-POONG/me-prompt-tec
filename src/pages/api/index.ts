import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 1. GET: ดึงข้อมูลทั้งหมด
    if (req.method === 'GET') {
      const positions = await prisma.internshipPosition.findMany({
        orderBy: { createdAt: 'desc' }, // เรียงจากใหม่ไปเก่า
      });
      return res.status(200).json(positions);
    }

    // 2. POST: สร้างข้อมูลใหม่
    if (req.method === 'POST') {
      const { title, description, isOpen } = req.body;

      // Validation เล็กน้อย
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and Description are required' });
      }

      const newPosition = await prisma.internshipPosition.create({
        data: {
          title,
          description,
          isOpen: isOpen ?? true, // ถ้าไม่ส่งมา ให้เปิดรับเป็น Default
        },
      });
      return res.status(201).json(newPosition);
    }

    // Method อื่นๆ ไม่รองรับ
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}