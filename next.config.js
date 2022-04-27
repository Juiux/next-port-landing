/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

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
  modern: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  pwa: {
    dest: "public",
    register: true,
    mode: "production",
    disable: process.env.NODE_ENV === "development",
    dynamicStartUrl: false,
    runtimeCaching,
    fallbacks: {
      document: "/offline",
    },
    buildExcludes: [/middleware-manifest.json$/],
    publicExcludes: [
      "!rss.xml",
      "!robots.txt",
      "!sitemap.xml",
      "!sitemap-0.xml",
    ],
  },
  async headers() {
    return [custHeaders];
  },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  /*
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-ssr-prepass": "preact-ssr-prepass",
      });
    }
    return config;
  },
  */
};

module.exports = withPWA(nextConfig);
