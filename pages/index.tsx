import DefaultLayout from "../components/layouts/default";
import Link from "next/link";
import { getSortedPostsData } from "../lib/blog/index";
import { GitBranch } from "react-feather";
import { GetStaticProps, NextPage } from "next";
import Waves from "../components/waves";

const Index: NextPage = ({ allPostsData }: any): JSX.Element => {
  return (
    <DefaultLayout
      title="IrvanMA's Lair"
      description="Do what you want and do it well."
      tag={undefined}
      date={undefined}
    >
      <section className="bg-info text-dark pt-2 pb-5">
        <div className="container pt-5">
          <p className="pt-3 display-5 mb-0 mt-3 text-center">
            Irvan Malik Azantha
          </p>
          <p className="lead mb-3 mt-0 text-center">
            Do what you want and do it well.
          </p>
          <p className="text-center">
            <a
              href="https://github.com/irvanmalik48/blog"
              className="btn btn-dark mb-2 justify-content-center align-items-center d-inline-flex"
            >
              <GitBranch className="me-2" />
              GitHub Repository
            </a>
          </p>
        </div>
      </section>
      <Waves />
      <article className="container card floatcard px-4 pt-2 pb-4">
        <p className="h4 mb-4 text-center mt-3">Description</p>
        <blockquote>Keep it simple, stupid.</blockquote>
        <p className="m-0 p-0">
          Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 18 y&apos;o boy
          currently studying on Universitas Sriwijaya. I live in Palembang,
          Indonesia. Give glory for the chaos!
        </p>
      </article>
      <section className="container mt-3 mb-5 card floatcard-no-mt px-3 pb-4">
        <p className="h4 mb-4 mt-4 text-center">Posts</p>
        <div className="row gx-3 gy-3">
          {allPostsData.map(
            ({ id, title, date, tag, desc }: any, index: any): JSX.Element => (
              <div key={index} className="col-12 col-sm-6">
                <Link href={`/posts/blog/${id}`}>
                  <a className="text-white">
                    <div className="card hover-shadow rounded-3 h-100">
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
        <p className="mb-2 mt-4 text-center">
          <Link href={`blog`}>
            <a className="btn btn-outline-info">More posts</a>
          </Link>
        </p>
      </section>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData().splice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
};

export default Index;
