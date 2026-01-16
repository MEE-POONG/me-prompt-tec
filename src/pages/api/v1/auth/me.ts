/**
 * GET /api/v1/auth/me
 * Get current user endpoint
 * ME PROMPT TECHNOLOGY
 */

import type { NextApiResponse } from 'next';
import { authenticate, AuthRequest } from '@/middleware/auth';
import { prisma } from '@/lib/prisma';

async function handler(req: AuthRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    // Get user from token (added by authenticate middleware)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
      });
    }

    // Fetch full user data
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        isVerified: true,
        createdAt: true,
        member: {
          select: {
            id: true,
            name: true,
            title: true,
            photo: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error('Get current user error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}

export default authenticate(handler);
