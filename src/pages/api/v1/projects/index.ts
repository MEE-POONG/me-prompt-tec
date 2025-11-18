import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { status, industry, limit = '10', page = '1' } = req.query;

      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
      const skip = (pageNum - 1) * limitNum;

      // Build filter
      const where: any = {
        isPublic: true, // แสดงเฉพาะโปรเจกต์ที่เปิดเผย
      };

      if (status) {
        where.status = status;
      }

      if (industry) {
        where.industry = industry;
      }

      // Get projects with pagination
      const [projects, total] = await Promise.all([
        prisma.project.findMany({
          where,
          skip,
          take: limitNum,
          orderBy: {
            createdAt: 'desc',
          },
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            problemStatement: true,
            solution: true,
            client: true,
            industry: true,
            techStack: true,
            status: true,
            featuredImage: true,
            gallery: true,
            demoUrl: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            updatedAt: true,
          },
        }),
        prisma.project.count({ where }),
      ]);

      res.status(200).json({
        success: true,
        data: projects,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
