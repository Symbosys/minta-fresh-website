import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "grainy-gradients.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  reactCompiler: true,
  output: "standalone"
};

export default nextConfig;
