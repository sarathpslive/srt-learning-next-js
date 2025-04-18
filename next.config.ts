import type { NextConfig } from "next";

const nextConfig: NextConfig = process.env.NODE_ENV != 'development' ? {
  basePath: "/srt-learning-next-js",
  // GitHub Pages serves from the "docs" folder and requires a .nojekyll file
  output: 'export', // Export static files
  images: { unoptimized: true }, // Disable image optimization for static export
  assetPrefix: './', // Serve assets from the current directory,
  distDir: 'docs'
} : {};

export default nextConfig;
