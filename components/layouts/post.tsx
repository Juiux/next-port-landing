import DefaultLayout from "./default";
import Head from "next/head";
import Comments from "../comments";

export default function PostLayout(props: {
  tag: string | undefined;
  description: string | undefined;
  title: string | undefined;
  date: string | Date | undefined;
  content: any;
}): JSX.Element {
  return (
    <DefaultLayout>
      <Head>
        <meta name="keywords" content={props.tag} />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="https://irvanma.live/lp/lp.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content="https://irvanma.live/lp/lp.jpg" />
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
