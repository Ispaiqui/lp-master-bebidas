import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // OneDrive/synced folders: less disk churn during local dev.
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.rawpixel.com",
        pathname: "/editor_1024/**",
      },
    ],
  },
};

export default nextConfig;
