import PostLayout from "@layouts/post";
import { getAllPostIds, getPostData } from "@lib/index";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostData } from "@interfaces/types";

const path = "blog";

export const getStaticProps: GetStaticProps = async ({
  params,
}: any): Promise<{
  props: {
    postData: PostData;
  };
}> => {
  const postData = await getPostData(path, params.id);
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
  const paths = getAllPostIds(path);
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
