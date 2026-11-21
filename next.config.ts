import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.orgready.in" },
      { protocol: "https", hostname: "www.rangmanchai.com" },
      { protocol: "https", hostname: "desi-pos.vercel.app" },
    ],
  },
};

export default nextConfig;
