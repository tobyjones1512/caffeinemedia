import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Fully static output. `next build` writes plain HTML/CSS/JS to `out/`, which
   * can be served by any static host with no Node runtime behind it.
   */
  output: "export",
  /**
   * Emit `out/about/index.html` rather than `out/about.html`. Without this the
   * RSC payload directory (`out/about/`) shadows the HTML file, and any static
   * host that resolves directories before extensions serves a 404 for `/about`.
   */
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // The optimiser is a server feature; a static export serves images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
