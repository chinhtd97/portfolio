//next.config.js
import type { NextConfig } from "next";
import { ExperimentalConfig } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // ✅ optional
  } satisfies ExperimentalConfig,

};

export default nextConfig;
