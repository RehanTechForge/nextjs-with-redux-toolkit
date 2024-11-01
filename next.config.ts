import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "", // Leave empty if not used
        pathname: "/**", // Matches any path
      },
    ],
  },
};

export default nextConfig;
