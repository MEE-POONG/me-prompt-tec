/**
 * GET /api/v1/public/projects
 * Get public project listings
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
      featured,
      clientSector,
      tag,
      tech,
      page = '1',
      limit = '10',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build filter
    const where: any = {};

    // Filter by status
    if (status) {
      where.status = status;
    }

    // Filter by featured
    if (featured !== undefined) {
      where.featured = featured === 'true';
    }

    // Filter by client sector
    if (clientSector) {
      where.clientSector = clientSector;
    }

    // Filter by tag
    if (tag) {
      where.tags = { has: tag };
    }

    // Filter by tech stack
    if (tech) {
      where.techStack = { has: tech };
    }

    // Get projects and total count
    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: [
          { featured: 'desc' }, // Featured first
          { createdAt: 'desc' },
        ],
        select: {
          id: true,
          title: true,
          slug: true,
          summary: true,
          description: true,
          status: true,
          startDate: true,
          endDate: true,
          clientName: true,
          clientSector: true,
          tags: true,
          techStack: true,
          cover: true,
          gallery: true,
          links: true,
          featured: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.project.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        projects,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    });
  } catch (error) {
    console.error('Get projects error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
