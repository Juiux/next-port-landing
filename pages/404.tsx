import { GetStaticProps, NextPage } from "next";
import Default from "../components/default";
import { getSortedPostsData } from "../lib/blog";

const PageNotFound: NextPage = ({ allPostsData }: any) => {
  return (
    <Default
      title="404"
      desc="This is a 404 page."
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="mt-12 text-center text-8xl font-bold text-nord-light-highlight dark:text-nord-dark-highlight">
        404
      </p>
      <p className="mt-2 text-center text-3xl font-bold">
        Oops! Page not found.
      </p>
      <p className="mt-0 mb-10 text-center text-nord-light-accent dark:text-nord-dark-accent">
        Looks like the page you&apos;re looking for doesn&apos;t exist.
      </p>
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

export default PageNotFound;
