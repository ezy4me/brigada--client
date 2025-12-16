import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  compiler: {
    removeConsole: true,
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
};

module.exports = withVanillaExtract(nextConfig);
