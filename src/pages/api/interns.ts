/**
 * GET /api/v1/public/interns
 * Get public intern profiles
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
      status,
      coopType,
      page = '1',
      limit = '100',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build filter
    const where: any = {};

    // Filter by status (default to published only)
    if (status) {
      where.status = status;
    } else {
      where.status = 'published'; // แสดงเฉพาะที่ published
    }

    // Filter by coop type
    if (coopType) {
      where.coopType = coopType;
    }

    // Get interns and total count
    const [interns, total] = await Promise.all([
      prisma.intern.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          university: true,
          faculty: true,
          major: true,
          studentId: true,
          gen: true,
          coopType: true,
          contact: true,
          resume: true,
          avatar: true,
          portfolioSlug: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.intern.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        interns,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    });
  } catch (error) {
    console.error('Get interns error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
