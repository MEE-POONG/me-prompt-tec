import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Enable standalone output for Docker deployment
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https' as const, // ✅
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;