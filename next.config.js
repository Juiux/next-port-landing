import withPWA from "next-pwa";

export default withPWA({
  pwa: {
    dest: "public",
    mode: "production",
  },
});

export const target = "serverless";
export function webpack(config) {
  config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
  config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
  return config;
}
