import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import("next").NextConfig} */
export default function nextConfig(phase) {
  return {
    // Keep dev caches separate so production builds do not disrupt the dev server.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
  };
}
