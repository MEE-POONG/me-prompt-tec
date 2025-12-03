import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https' as const, // ✅ แก้ตรงนี้: เติม as const ให้หายแดง
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