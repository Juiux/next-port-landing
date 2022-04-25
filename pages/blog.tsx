import { NextPage } from "next";
import BlogSearch from "../components/blogsearch";
import Default from "../components/default";

const Blog: NextPage = () => {
  return (
    <Default
      title="Blog Posts"
      desc="All that I have written currently."
      tag={undefined}
      date={undefined}
    >
      <p className="mt-12 text-center text-3xl font-bold">Blog Posts</p>
      <p className="mt-0 text-center text-nord-light-accent dark:text-nord-dark-accent">
        All that I have written currently.
      </p>
      <div className="postcard flex flex-col">
        <BlogSearch />
      </div>
    </Default>
  );
};

export default Blog;
