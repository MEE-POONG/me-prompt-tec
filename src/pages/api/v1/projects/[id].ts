import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const project = await prisma.project.findUnique({
        where: {
          id: id as string,
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
          isPublic: true,
          startDate: true,
          endDate: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!project) {
        return res.status(404).json({
          success: false,
          message: 'Project not found',
        });
      }

      if (!project.isPublic) {
        return res.status(403).json({
          success: false,
          message: 'This project is not public',
        });
      }

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      console.error('Error fetching project:', error);
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
