/**
 * Authentication & Authorization Middleware
 * ME PROMPT TECHNOLOGY
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { Role } from '../generated/prisma/client';
import { extractTokenFromHeader, verifyAccessToken, JWTPayload } from '@/lib/auth';

// Extend NextApiRequest to include user
export interface AuthRequest extends NextApiRequest {
  user?: JWTPayload;
}

export type AuthHandler = (
  req: AuthRequest,
  res: NextApiResponse
) => Promise<void> | void;

/**
 * Middleware to authenticate requests
 */
export function authenticate(handler: AuthHandler): AuthHandler {
  return async (req: AuthRequest, res: NextApiResponse) => {
    try {
      const token = extractTokenFromHeader(req.headers.authorization);

      if (!token) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized - No token provided',
        });
      }

      const payload = verifyAccessToken(token);

      if (!payload) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized - Invalid or expired token',
        });
      }

      // Attach user to request
      req.user = payload;

      return handler(req, res);
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  };
}

/**
 * Middleware to check user roles
 */
export function authorize(...allowedRoles: Role[]): (handler: AuthHandler) => AuthHandler {
  return (handler: AuthHandler) => {
    return async (req: AuthRequest, res: NextApiResponse) => {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized - Authentication required',
        });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          error: 'Forbidden - Insufficient permissions',
        });
      }

      return handler(req, res);
    };
  };
}

/**
 * Combined middleware: authenticate + authorize
 */
export function withAuth(...allowedRoles: Role[]): (handler: AuthHandler) => AuthHandler {
  return (handler: AuthHandler) => {
    return authenticate(authorize(...allowedRoles)(handler));
  };
}
