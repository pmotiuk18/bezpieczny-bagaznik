import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
};

export default nextConfig;
