import DefaultLayout from "../layouts/default";
import Link from "next/link";
import { getSortedPostsData } from "../api/index";

export default function Blog( {allPostsData} ) {
  return (
    <DefaultLayout title="IrvanMA's Lair" description="Do what you want and do it well.">
      <section className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-4 mb-0">Irvan Malik Azantha</p>
          <p className="lead mb-3">Do what you want and do it well.</p>
          <div className="btn-group btn-group-lg" role="group">
            <a className="btn btn-dark" href="https://github.com/irvanmalik48">
              Github
            </a>
            <a className="btn btn-dark" href="https://t.me/irvanmalik48">
              Telegram
            </a>
          </div>
        </div>
      </section>
      <section className="container mt-3" style={{ marginBottom: "100px" }}>
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
