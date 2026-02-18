import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Limit file tracing to project directory only
  outputFileTracingRoot: __dirname,

  // React Compiler (moved from experimental in Next.js 16)
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: '**', // Allow all HTTPS domains for partner logos
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http' as const,
        hostname: '**', // Allow all HTTP domains
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Fix EPERM errors by excluding system folders
  webpack: (config, { isServer }) => {
    // Ignore system folders and symlinks
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/Application Data/**',
        '**/AppData/**',
        'C:/Users/**/Application Data/**',
        'C:/Users/**/AppData/**',
      ],
    };

    // Disable symlinks resolution
    config.resolve = {
      ...config.resolve,
      symlinks: false,
    };

    return config;
  },
};

export default nextConfig;