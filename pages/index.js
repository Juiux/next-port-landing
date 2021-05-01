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
              <i className="fab fa-github"></i>
            </a>
            <a className="btn btn-dark" href="https://instagram.com/irvann48_">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-dark" href="https://t.me/irvanmalik48">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="container mt-3" style={{ marginBottom: "100px" }}>
        <table className="table table-striped table-borderless rounded-3">
          <thead>
            <tr>
              <th itemScope="col">Post Title</th>
              <th itemScope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {props.posts.map(function (post, idx) {
              return (
                <tr key={idx}>
                  <td className="pt-3 pb-3">
                    <Link href={"/posts/" + post.slug}>
                      <a>{post.title}</a>
                    </Link>
                  </td>
                  <td className="pt-3 pb-3">
                    <p className="m-0">{post.date}</p>
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
