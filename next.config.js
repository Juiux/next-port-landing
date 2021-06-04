const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
  target: "serverless",
  future: {
    webpack5: true,
  },
  compress: true,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});
