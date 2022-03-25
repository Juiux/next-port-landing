import Head from "next/head";
import Comment from "./comment";
import Default from "./default";

export default function PostLayout(props: any) {
  return (
    <Default
      title={props.title}
      desc={props.desc}
      tag={props.tag}
      date={props.date}
      allPostsData={props.allPostsData}
    >
      <Head>
        <meta key="words" name="keywords" content={props.tag} />
      </Head>
      <p className="mt-12 text-center text-[2rem] font-bold text-nord-light-text dark:text-nord-dark-text">
        {props.title}
      </p>
      <p className="mt-0 text-center text-nord-light-accent dark:text-nord-dark-accent">
        {props.date}
      </p>
      <div className="postcard">
        <h1>Table of Contents</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <h1>Comments</h1>
        <Comment />
        <p className="mt-2 text-center text-sm">
          All posts in this blog are licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.O
          </a>{" "}
          unless specified otherwise.
        </p>
      </div>
    </Default>
  );
}
