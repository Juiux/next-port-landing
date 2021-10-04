import { NextPage } from "next";
import DefaultLayout from "../components/layouts/default";

const Index: NextPage = (): JSX.Element => {
  return (
    <DefaultLayout
      title="500"
      description="Internal server error."
      tag={undefined}
      date={undefined}
    >
      <section className="offline-container">
        <p className="display-5 m-0 mb-2 text-center">500</p>
        <p className="lead m-0 text-center">Internal server error.</p>
      </section>
    </DefaultLayout>
  );
};

export default Index;
