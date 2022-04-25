import { NextPage } from "next";
import Default from "../components/default";

const OfflinePage: NextPage = () => {
  return (
    <Default
      title="Touch Grass Department"
      desc="This is an offline fallback page."
      tag={undefined}
      date={undefined}
    >
      <p className="mt-12 text-center text-8xl font-bold text-nord-light-highlight dark:text-nord-dark-highlight">
        420
      </p>
      <p className="mt-2 text-center text-3xl font-bold">
        You&apos;re offline.
      </p>
      <p className="mt-0 mb-10 text-center text-nord-light-accent dark:text-nord-dark-accent">
        Go outside, touch some grass.
      </p>
    </Default>
  );
};

export default OfflinePage;
