
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { authenticate, AuthRequest } from '@/middleware/auth';

async function handler(req: AuthRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    // Check if user is admin
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    try {
        // 1. Get Stats Counts
        const [internCount, messageCount, memberCount] = await Promise.all([
            prisma.intern.count(),
            prisma.contactMessage.count({ where: { status: 'new' } }), // Count only new messages
            prisma.member.count(),
        ]);

        // 2. Get Recent Intern Applications
        const recentInterns = await prisma.intern.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                major: true,
                university: true,
                createdAt: true,
                status: true,
            },
        });

        return res.status(200).json({
            success: true,
            data: {
                stats: {
                    interns: internCount,
                    messages: messageCount,
                    members: memberCount,
                },
                recentInterns,
            },
        });
    } catch (error) {
        console.error('Dashboard Stats Error:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

export default authenticate(handler);
