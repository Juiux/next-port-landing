import DefaultLayout from "../../layouts/default";

export default function Index() {
  return (
    <DefaultLayout title="Offline" description="You're offline.">
      <section className="offline-container">
        <p className="display-5 m-0 mb-2 text-center">You are offline.</p>
        <p className="lead m-0 text-center">
          This is an offline fallback page.
        </p>
      </section>
    </DefaultLayout>
  );
}
