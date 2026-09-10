import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-optimized assets in /public — skip Vercel Image Optimization transforms
  // to stay within free-tier Image Optimization limits.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
