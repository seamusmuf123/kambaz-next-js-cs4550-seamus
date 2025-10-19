import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // last resort if you still get blocking errors
  },
};
export default nextConfig;
