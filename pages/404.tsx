import { NextPage } from "next";
import Default from "../components/default";

const PageNotFound: NextPage = () => {
  return (
    <Default
      title="404"
      desc="This is a 404 page."
      tag={undefined}
      date={undefined}
    >
      <p className="mt-12 text-center text-8xl font-bold text-nord-light-highlight dark:text-nord-dark-highlight">
        404
      </p>
      <p className="mt-2 text-center text-3xl font-bold">
        Oops! Page not found.
      </p>
      <p className="mt-0 mb-10 text-center text-nord-light-accent dark:text-nord-dark-accent">
        Looks like the page you&apos;re looking for doesn&apos;t exist.
      </p>
    </Default>
  );
};

export default PageNotFound;
