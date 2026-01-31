import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['ik.imagekit.io', 'pbs.twimg.com'],
  },
};

export default nextConfig;
