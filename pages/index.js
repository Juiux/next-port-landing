import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
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
            {props.posts.map(function (post, idx) {
              return (
                <tr key={idx}>
                  <td scope="col" className="pt-3 pb-3">
                    <Link href={"/posts/" + post.slug}>
                      <a className="text-white">{idx}</a>
                    </Link>
                  </td>
                  <td scope="col" className="pt-3 pb-3">
                    <Link href={"/posts/" + post.slug}>
                      <a className="text-white">{post.title}</a>
                    </Link>
                  </td>
                  <td scope="col" className="pt-3 pb-3">
                    <Link href={"/posts/" + post.slug}>
                      <a className="text-white">{post.desc}</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
