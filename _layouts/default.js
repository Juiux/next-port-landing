import Head from "next/head";
import Header from "@includes/header";
import Footer from "@includes/footer";

export default function DefaultLayout(props) {
  return (
    <html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content="lapprealm" />
        <title>{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="preconnect stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.dark.min.css"
          rel="preconnect stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="256x256"
        />
        <link
          href="/icon-384x384.png"
          rel="icon"
          type="image/png"
          sizes="384x384"
        />
        <link
          href="/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
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
      </body>
    </html>
  );
}
