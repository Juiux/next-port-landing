import { NextPage } from "next";
import DefaultLayout from "../components/layouts/default";

const Index: NextPage = () => {
  return (
    <DefaultLayout title="404" description="Page not found.">
      <section className="offline-container">
        <p className="display-5 m-0 mb-2 text-center">404</p>
        <p className="lead m-0 text-center">Page not found.</p>
      </section>
    </DefaultLayout>
  );
};

export default Index;