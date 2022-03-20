import Head from "next/head";
import BottomBar from "./bottombar";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Stt from "./stt";
import Thumbnail from "./thumbnail";

export default function Default(props: any) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={props.desc} />
        <meta key="words" name="keywords" content="blog" />
        <meta property="og:url" content="https://irvanma.live" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.desc} />
        <meta
          property="og:image"
          content={Thumbnail(props.title, props.date, props.tag)}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta
          name="twitter:image"
          content={Thumbnail(props.title, props.date, props.tag)}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IrvanMA's Lair" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#282828" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#282828" />
        <meta name="format-detection" content="telephone=no" />

        <title>{props.title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/icons/favicon-96x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link rel="icon" href="/icons/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/icons/ios/192.png"></link>
      </Head>
      <main className="root-grid">
        <Navbar />
        <Sidebar allPostsData={props.allPostsData} />
        <article className="mainsect" id="main-part">
          {props.children}
          <Footer />
        </article>
      </main>
      <BottomBar />
      <Stt />
    </>
  );
}
