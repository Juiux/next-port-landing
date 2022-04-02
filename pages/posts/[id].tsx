import PostLayout from "../../components/posts";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/blog";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const path = "";

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(path, params.id);
  const allPostsData = await getSortedPostsData("");
  return {
    props: {
      postData,
      allPostsData,
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

const Post: NextPage = ({ postData, allPostsData }: any): JSX.Element => {
  return (
    <PostLayout
      title={postData.title}
      desc={postData.desc}
      tag={postData.tag}
      date={postData.date}
      content={postData.contentHtml}
      allPostsData={allPostsData}
    />
  );
};

export default Post;
