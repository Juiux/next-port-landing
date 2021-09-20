import PostLayout from "../../../components/layouts/post";
import { getAllPostIds, getPostData } from "../../../api/blog/index";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post: NextPage = ({ postData }: any) => {
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
