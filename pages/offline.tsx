import { GetStaticProps, NextPage } from "next";
import Default from "../components/default";
import { getSortedPostsData } from "../lib";

const OfflinePage: NextPage = ({ allPostsData }: any) => {
  return (
    <Default
      title="Touch Grass Department"
      desc="This is an offline fallback page."
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="text-8xl text-center font-bold mt-12 text-rednord dark:text-yellnord">
        420
      </p>
      <p className="text-3xl text-center font-bold mt-2">You&apos;re offline.</p>
      <p className="text-center text-accentlight dark:text-accent mt-0 mb-10">
        Go outside, touch some grass.
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

export default OfflinePage;
