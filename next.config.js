import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache";

export default withPWA({
  target: "serverless",
  webpack5: true,
  compress: true,
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
});
