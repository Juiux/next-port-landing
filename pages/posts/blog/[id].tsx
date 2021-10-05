import PostLayout from "../../../components/layouts/post";
import { getAllPostIds, getPostData } from "../../../lib/blog/index";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({
  params,
}: any): Promise<{
  props: {
    postData: {
      title: string;
      date: Date | string;
      desc: string;
      tag: string[];
      id: any;
      contentHtml: string;
    };
  };
}> => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (): Promise<{
  paths: { params: { id: string } }[];
  fallback: false;
}> => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post: NextPage = ({ postData }: any): JSX.Element => {
  return (
    <PostLayout
      title={postData.title}
      date={postData.date}
      tag={postData.tag}
      description={postData.desc}
      content={postData.contentHtml}
    />
  );
};

export default Post;
