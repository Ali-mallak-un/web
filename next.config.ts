import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['event.sisoog.com', 'studio.sms.ir'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    qualities: [100, 75], 
  },
  experimental: {
    // اگه نیاز داری چیزی اضافه کنی
  }
}

export default nextConfig