import DefaultLayout from "./default";
import Head from "next/head";
import Comments from "../comments";
import { PostLayoutProps } from "../../interfaces/types";

export default function PostLayout(props: PostLayoutProps): JSX.Element {
  return (
    <DefaultLayout
      title={props.title}
      description={props.description}
      tag={props.tag}
      date={props.date}
    >
      <Head>
        <meta key="words" name="keywords" content={props.tag} />
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
