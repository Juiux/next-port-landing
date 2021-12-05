import DefaultLayout from "@layouts/default";
import Head from "next/head";
import { PostLayoutProps } from "@interfaces/types";
import { Giscus } from "@giscus/react";

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
          <Giscus
            repo="irvanmalik48/blog"
            repoId="MDEwOlJlcG9zaXRvcnkzMjQ5MTA0MTE="
            category="Comments"
            categoryId="DIC_kwDOE129S84B_1u5"
            mapping="pathname"
            reactionsEnabled="0"
            emitMetadata="0"
            theme="transparent_dark"
          />
          <p className="text-center mt-4 mb-1 pt-2 pb-0 py-2 my-0 text-nord-footer">
            This post is licensed under{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY-NC-SA 4.O
            </a>
          </p>
        </article>
      </div>
    </DefaultLayout>
  );
}
