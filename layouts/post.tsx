import DefaultLayout from "./default";
import Head from "next/head";
import Comments from "../components/comments";

export default function PostLayout(props: any) {
  return (
    <DefaultLayout>
      <Head>
        <meta name="keywords" content={props.tag} />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <title>{props.title}</title>
      </Head>
      <article className="container mt-3" style={{ marginBottom: "100px" }}>
        <section className="m-0 text-center pt-5 pb-5">
          <div className="container">
            <p className="display-4 mb-0">{props.title}</p>
            <p className="lead mb-0 text-muted">{props.date}</p>
          </div>
        </section>
        <h1>Table of Contents</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <h1>Comments</h1>
        <Comments />
      </article>
    </DefaultLayout>
  );
}
