import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: "Invalid ID" });
  }

  // PUT: แก้ไข
  if (req.method === 'PUT') {
    try {
      const { title, description, isOpen } = req.body;
      const updatedPosition = await prisma.internshipPosition.update({
        where: { id },
        data: { title, description, isOpen },
      });
      return res.status(200).json(updatedPosition);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update" });
    }
  }

  // DELETE: ลบ
  else if (req.method === 'DELETE') {
    try {
      await prisma.internshipPosition.delete({
        where: { id },
      });
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete" });
    }
  }

  else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}