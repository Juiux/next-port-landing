const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  externals: [/node_modules/, 'bufferutil', 'utf-8-validate'],
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
  },
});
