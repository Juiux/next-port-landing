import DefaultLayout from "../components/layouts/default";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { getSortedPostsData } from "../lib/blog/index";
import Search from "../components/search";
import Waves from "../components/waves";

const Blog: NextPage = ({ allPostsData }: any) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const checkSearchStatus = (status: boolean) => {
    if (status) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };

  return (
    <DefaultLayout
      title="Blog Posts"
      description="All that I've written to date."
      tag={undefined}
      date={undefined}
    >
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-5 text-center">Blog Posts</p>
          <p className="lead mb-3 mt-0 text-center">
            All that I&apos;ve written to date.
          </p>
        </div>
      </article>
      <Waves />
      <section className="container mb-5 card px-3 pt-2 pb-4 floatcard">
        <div className="row mt-2 gx-3 gy-3">
          <Search onFocusHandler={(status) => checkSearchStatus(status)} />
        </div>
        <div className="row mt-2 gx-3 gy-3">
          <p className="col-12 text-center h5 mt-3 mb-3 m-0">All Posts</p>
          {allPostsData.map(
            ({ id, title, date, tag, desc }: any, index: any): JSX.Element => (
              <div key={index} className="col-12 col-sm-6">
                <Link href={`/posts/blog/${id}`}>
                  <a className="text-white">
                    <div className="card post hover-shadow rounded-3 h-100">
                      <div className="card-header h6">
                        <p className="mt-2 mb-2">{title}</p>
                      </div>
                      <div className="card-body">
                        <p className="card-text m-0">{desc}</p>
                      </div>
                      <div
                        className="card-footer d-flex flex-row justify-content-between align-items-center"
                        style={{ color: "#BDBDBD" }}
                      >
                        {date}
                        <span className="text-end">
                          {tag.map(
                            (children: any, index: any): JSX.Element => (
                              <span key={index} className="badge bg-dark ms-2">
                                {children}
                              </span>
                            )
                          )}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
