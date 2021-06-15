import Head from "next/head";
import Header from "../includes/header";
import Footer from "../includes/footer";
import Scroll from "../components/stt";

export default function DefaultLayout(props: any) {
  return (
    <html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content="lapprealm" />
        <meta property="og:url" content="https://irvanma.live" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/lp/lp.jpg" />
        <title>{props.title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="icons/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="256x256"
        />
        <link
          href="icons/icon-384x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="icons/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="icons/apple-icon.png"></link>
        <meta name="theme-color" content="#39C0ED" />
      </Head>
      <body>
        <Header />
        <main>{props.children}</main>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
        ></script>
        <Footer />
        <Scroll />
      </body>
    </html>
  );
}
