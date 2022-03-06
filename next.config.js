/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPreact = require("next-plugin-preact");

const custHeaders = {
  source: "/(.*)",
  headers: [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    {
      key: "Accept-Encoding",
      value: "br gzip",
    },
  ],
};

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    dynamicStartUrl: false,
    runtimeCaching,
    fallbacks: {
      document: "/offline",
    },
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /server\/pages\/_middleware\.js$/,
    ],
    publicExcludes: ["!rss.xml"],
  },
  async headers() {
    return [custHeaders];
  },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = withPWA(withPreact(nextConfig));
