import { AppProps } from "next/dist/next-server/lib/router/router";
import "./styles/bootstrap.scss";
import "./styles/global.scss";

export default function myApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
