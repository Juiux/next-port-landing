import DefaultLayout from "../layouts/default";

export default function Index() {
  return (
    <DefaultLayout
      title="500"
      description="Internal server error."
    >
      <section className="offline-container">
          <p className="display-5 m-0 mb-2 text-center">
              500
          </p>
          <p className="lead m-0 text-center">
              Internal server error.
          </p>
      </section>
    </DefaultLayout>
  );
}