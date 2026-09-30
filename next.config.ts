import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  generateBuildId: async () => {
    return process.env.GIT_COMMIT || null
  },
};

export default nextConfig;
