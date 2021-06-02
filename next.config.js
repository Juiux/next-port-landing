const withPWA = require("next-pwa");

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
  },
});
