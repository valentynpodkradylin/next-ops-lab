import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // TEST
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/generateBuildId?utm_source=chatgpt.com
  generateBuildId: async () => {
    return process.env.GIT_COMMIT || null
  },
};

export default nextConfig;
