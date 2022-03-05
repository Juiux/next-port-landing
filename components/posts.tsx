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
      <p className="text-center text-textnav font-bold text-[2rem] mt-12">
        {props.title}
      </p>
      <p className="text-center text-accent mt-0">{props.date}</p>
      <div className="postcard">
        <h1>Table of Contents</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <h1>Comments</h1>
        <Comment />
      </div>
    </Default>
  );
}
