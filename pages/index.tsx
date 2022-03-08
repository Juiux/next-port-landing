import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Default from "../components/default";
import { CardSelectables } from "../components/selectables";
import { getSortedPostsData } from "../lib";
import * as Icons from "react-feather";

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <Default
      title="IrvanMA's Lair"
      desc="Do what you want and do it well."
      tag={undefined}
      date={undefined}
      allPostsData={allPostsData}
    >
      <p className="text-3xl text-center font-bold mt-12">
        Irvan Malik Azantha
      </p>
      <p className="text-center text-accentlight dark:text-accent mt-0">
        Do what you want and do it well.
      </p>
      <div className="postcard">
        <h1>Description</h1>
        <blockquote>
          <p>Keep it simple, stupid.</p>
        </blockquote>
        <p>
          Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 18 y&apos;o boy
          currently studying on Universitas Sriwijaya. I live in Palembang,
          Indonesia. I&apos;m a highly enthusiastic person with subtle interest
          in open source projects and keen on learning new things. Also likes to
          watch anime, play games, and have hugs and cuddles (lmao). Give glory
          for the chaos!
        </p>
      </div>
      <div className="postcard flex flex-col">
        <h1>Recent Posts</h1>
        <blockquote>
          <p>Recent 4 posts that I have written currently</p>
        </blockquote>
        <div className="mx-5 my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {allPostsData
            .slice(0, 4)
            .map(({ id, title, date, tag, desc }: any, index: any) => {
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
            })}
        </div>
        <Link href={"/blog"} passHref>
          <button className="btn flex justify-center text-sm items-center gap-2 cursor-pointer mb-5 mx-5 self-center justify-self-center">
            <span className="ml-1.5">SEE MORE</span>
            <Icons.ChevronsRight className="inline" />
          </button>
        </Link>
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

export default Home;
