import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/lib/prisma"; // ตรวจสอบว่า path นี้ถูกต้องตามโปรเจกต์คุณ

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET: ดึงข้อมูล
  if (req.method === 'GET') {
    try {
      const positions = await prisma.internshipPosition.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(positions);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch" });
    }
  }

  // POST: เพิ่มข้อมูล
  else if (req.method === 'POST') {
    try {
      const { title, description, isOpen } = req.body;
      const newPosition = await prisma.internshipPosition.create({
        data: {
          title,
          description,
          isOpen: isOpen ?? true,
        },
      });
      return res.status(201).json(newPosition);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create" });
    }
  }

  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}