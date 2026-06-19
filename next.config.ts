import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@cline/sdk",
    "@cline/core",
    "@cline/agents",
    "@cline/llms",
    "@cline/shared",
  ],
  allowedDevOrigins: [
    "http://localhost:3000",
    "192.168.1.4"
  ]
};

export default nextConfig;
