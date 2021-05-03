const withPWA = require("next-pwa");

module.exports = withPWA({
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== "UglifyJsPlugin"
    );
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    return config;
  },
  compress: true,
  pwa: {
    dest: "public",
  },
});
