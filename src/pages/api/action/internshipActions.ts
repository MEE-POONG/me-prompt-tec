// src/action/internshipActions.ts (ฝั่ง User)
'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPositions() {
  try {
    // ดึงข้อมูลจาก Database เดียวกันกับที่ Admin บันทึกไว้
    const positions = await prisma.internshipPosition.findMany({
      where: { isOpen: true }, // (Optional) เลือกเฉพาะที่เปิดรับ
      orderBy: { createdAt: 'desc' }
    });
    // แปลงข้อมูลให้เป็น Plain Object เพื่อป้องกัน Error เรื่อง Date ใน Next.js Client Component
    return JSON.parse(JSON.stringify(positions));
  } catch (error) {
    console.error("Error fetching positions:", error);
    return [];
  }
}