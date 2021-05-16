import DefaultLayout from "../layouts/default";
import Link from "next/link";
import { getSortedPostsData } from "../api/index";

export default function Blog( {allPostsData}: any ) {
  return (
    <DefaultLayout title="IrvanMA's Lair" description="Do what you want and do it well.">
      <section className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-4 mb-0 mt-0 text-center text-md-start">Irvan Malik Azantha</p>
          <p className="lead mb-3 mt-0 text-center text-md-start">Do what you want and do it well.</p>
          <p className="m-0 text-center text-md-start">
            <div className="btn-group btn-group-lg" role="group">
              <a className="btn btn-dark" href="https://github.com/irvanmalik48">
                Github
              </a>
              <a className="btn btn-dark" href="https://t.me/irvanmalik48">
                Telegram
              </a>
            </div>
          </p>
          
        </div>
      </section>
      <article className="container mt-3">
        <p className="h4 mb-3 mt-4 text-center">Description</p>
        <blockquote>
          Keep it simple, stupid.
        </blockquote>
        <p>
        Hello, my name's Irvan Malik Azantha. I'm a 18 y'o boy currently studying on Universitas Sriwijaya
        (English: University of Sriwijaya). I live in Palembang, Indonesia (very nice city, you should check
        it out). I'm a highly enthusiastic person with subtle interest in open source projects and keen on
        learning new things. Also likes to watch anime, play games, and have hugs and cuddles (lmao).
        </p>
      </article>
      <section className="container mt-3 mb-5">
        <p className="h4 mb-3 mt-4 text-center">Posts</p>
        <div className="row gx-3 gy-3">
          {allPostsData.map(({ id, title, date, tag, desc }: any, index: any) => (
            <div className="col-12 col-sm-6">
              <Link href={`/posts/${id}`}>
                <a className="text-white">
                  <div key={index} className="card hover-shadow rounded-3 h-100">
                    <div className="card-header h6">
                      <p className="mt-2 mb-2">
                        {title}
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="card-text m-0">
                        {desc}
                      </p>
                    </div>
                    <div className="card-footer text-info d-flex flex-row justify-content-between align-items-center">
                      {date}
                      <span className="badge bg-dark text-end">
                        {tag}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
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
