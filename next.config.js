const withPWA = require("next-pwa");

module.exports = [
  withPWA({
    pwa: {
      dest: "public",
    },
  }),
  {
    target: "serverless",
    webpack: function (config) {
      config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
      config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
      return config;
    },
  },
];
