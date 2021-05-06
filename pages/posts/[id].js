import PostLayout from "../../layouts/post";
import { getAllPostIds, getPostData } from "../../api/index";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <PostLayout title={postData.title} date={postData.date} content={postData.contentHtml} />
  );
}
