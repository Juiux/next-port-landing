const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
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
    key: "Accept-Encoding",
    value: "br",
  },
];

module.exports = withBundleAnalyzer(withPWA({
  target: "serverless",
  webpack5: true,
  compress: true,
  reactStrictMode: true,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minSize: 200,
      maxSize: 6000,
    },
    removeAvailableModules: false,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true,
    mangleExports: "size",
    providedExports: true,
    flagIncludedChunks: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    mangleWasmImports: true,
    nodeEnv: "production",
    chunkIds: "deterministic",
    moduleIds: "deterministic",
    
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
        headers: custHeaders,
      },
    ];
  },
}));
