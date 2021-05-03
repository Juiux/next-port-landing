const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
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
