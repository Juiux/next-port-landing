import "./styles/bootstrap.scss";
import "./styles/global.scss";

export default function myApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />;
}