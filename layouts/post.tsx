import DefaultLayout from "./default";
import Head from "next/head";
import Comments from "../components/comments";

export default function PostLayout(props: any) {
  let staticallyLink: string =
    "https://banners.beyondco.de/" +
    props.title +
    ".png?theme=dark&packageManager=&packageName=&pattern=texture&style=style_1&description=" +
    props.description +
    "&md=0&showWatermark=0&fontSize=100px&images=paper-airplane&widths=auto&heights=auto";

  return (
    <DefaultLayout>
      <Head>
        <meta name="keywords" content={props.tag} />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={staticallyLink} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={staticallyLink} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <title>{props.title}</title>
      </Head>
      <div className="container mt-3" style={{ marginBottom: "100px" }}>
        <section className="m-0 text-center pt-5 pb-5">
          <div className="container">
            <p className="display-4 mb-0">{props.title}</p>
            <p className="lead mb-0 text-muted">{props.date}</p>
          </div>
        </section>
        <article className="container card px-4 pb-4 floatcard-no-mt">
          <h1>Table of Contents</h1>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
          <h1>Comments</h1>
          <Comments />
        </article>
      </div>
    </DefaultLayout>
  );
}
