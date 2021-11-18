import { AppProps } from "next/dist/shared/lib/router/router";
import "@styles/bootstrap.scss";
import "@styles/global.scss";

export default function myApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
