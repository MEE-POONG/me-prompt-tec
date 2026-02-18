/**
 * GET /api/v1/public/members
 * Get public member profiles
 * ME PROMPT TECHNOLOGY
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const {
      department,
      page = '1',
      limit = '100',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build filter
    const where: any = {
      isActive: true, // แสดงเฉพาะที่ active
    };

    // Filter by department
    if (department) {
      where.department = department;
    }

    // Get members and total count
    const [members, total] = await Promise.all([
      prisma.member.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          title: true,
          department: true,
          bio: true,
          photo: true,
          socials: true,
          skills: true,
          slug: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.member.count({ where }),
    ]);

    // 👇 ดึงรูปภาพจาก CloudflareImage มาแปะ (ถ้าใน Member.photo ยังไม่มี)
    const memberIds = members.map((m) => m.id);
    const cloudImages = await (prisma as any).cloudflareImage.findMany({
      where: {
        relatedId: { in: memberIds },
        relatedType: 'member',
      },
    });

    const membersWithImages = members.map((member) => {
      const img = cloudImages.find((ci: any) => ci.relatedId === member.id);
      return {
        ...member,
        photo: member.photo || img?.publicUrl || null,
      };
    });

    return res.status(200).json({
      success: true,
      data: {
        members: membersWithImages,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    });
  } catch (error) {
    console.error('Get members error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
