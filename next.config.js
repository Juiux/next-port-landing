const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

module.exports = withPWA({
  target: "serverlesss",
  webpack5: true,
  compress: true,
  reactStrictMode: true,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
    fallbacks: {
      document: "/offline",
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});
