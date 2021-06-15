import DefaultLayout from "../layouts/default";
import Link from "next/link";
import { getSortedPostsData } from "../api/index";

export default function Blog({ allPostsData }: any) {
  return (
    <DefaultLayout
      title="Blog Posts"
      description="All that I've written to date."
    >
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-3 text-center">Blog Posts</p>
          <p className="lead mb-3 mt-0 text-center">
            All that I&apos;ve written to date.
          </p>
        </div>
      </article>
      <section className="container mb-5">
        <div className="row mt-2 gx-3 gy-3">
          <p className="col-12 text-center h5 mt-3 mb-3 m-0">All Posts</p>
          {allPostsData.map(
            ({ id, title, date, tag, desc }: any, index: any) => (
              <div key={index} className="col-12 col-sm-6">
                <Link href={`/posts/${id}`}>
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
                        <span className="badge bg-dark text-end">{tag}</span>
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
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
