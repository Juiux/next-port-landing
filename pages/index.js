import DefaultLayout from "../layouts/default";
import Link from "next/link";
import { getSortedPostsData } from "../api/index";

export default function Blog( {allPostsData} ) {
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
        <table className="table align-middle table-striped table-borderless table-hover hover-shadow rounded-3">
          <thead>
            <tr>
              <th scope="col" style={{ width: "4%" }}>
                #
              </th>
              <th scope="col" style={{ width: "30%" }}>
                Title
              </th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {allPostsData.map(({ id, title, desc }, index) => (
              <tr key={index}>
                <td scope="col" className="pt-3 pb-3">
                  <Link href={`/posts/${id}`}>
                    <a className="text-white">{index}</a>
                  </Link>
                </td>
                <td scope="col" className="pt-3 pb-3">
                  <Link href={`/posts/${id}`}>
                    <a className="text-white">{title}</a>
                  </Link>
                </td>
                <td scope="col" className="pt-3 pb-3">
                  <Link href={`/posts/${id}`}>
                    <a className="text-white">{desc}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
