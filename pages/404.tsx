import { GetStaticProps, NextPage } from "next";
import Default from "../components/default";
import { getSortedPostsData } from "../lib";

const PageNotFound: NextPage = ({ allPostsData }: any) => {
  return (
    <Default
      title="IrvanMA's Lair"
      desc="Do what you want and do it well."
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="text-8xl text-center font-bold mt-12 text-rednord dark:text-yellnord">
        404  
      </p>
      <p className="text-3xl text-center font-bold mt-2">
        Oops! Page not found.
      </p>
      <p className="text-center text-accentlight dark:text-accent mt-0 mb-10">
        Looks like the page you're looking for doesn't exist.
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
