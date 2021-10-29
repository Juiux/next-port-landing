const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const custHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self' 'unsafe-inline' https://*",
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
];

module.exports = withPWA({
  compress: true,
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    dynamicStartUrl: false,
    scope: "/",
    runtimeCaching,
    fallbacks: {
      document: "/offline",
    },
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: custHeaders,
      },
    ];
  },
});
