import { GetStaticProps, NextPage } from "next";
import BlogSearch from "../components/blogsearch";
import Default from "../components/default";
import { CardSelectables } from "../components/selectables";
import { getSortedPostsData } from "../lib";

const Blog: NextPage = ({ allPostsData }: any) => {
  return (
    <Default
      title="Blog Posts"
      desc="All that I have written currently."
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="text-3xl text-center font-bold mt-12">Blog Posts</p>
      <p className="text-center text-accentlight dark:text-accent mt-0">
        All that I have written currently.
      </p>
      <div className="postcard flex flex-col">
        <BlogSearch />
        <h1>Posts</h1>
        <div className="mx-5 my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {allPostsData.map(
            ({ id, title, date, tag, desc }: any, index: any) => {
              return (
                <div className="w-full cursor-pointer self-stretch" key={index}>
                  <CardSelectables
                    id={id}
                    title={title}
                    date={date}
                    tag={tag}
                    desc={desc}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </Default>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData("");
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
