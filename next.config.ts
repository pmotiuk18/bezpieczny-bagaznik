import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Removing @shophost/rest-api from optimizePackageImports to fix Prisma engine issues on Vercel
    // optimizePackageImports: ["@shophost/rest-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "z3liuyatqnepss3d.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.interpack.eu",
      },
    ],
  },
};

export default nextConfig;
