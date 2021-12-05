import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

export default function Scroll(): JSX.Element {
  const [isVisible, setIsVisible]: [boolean, Dispatch<SetStateAction<any>>] =
    useState(false);
  useEffect((): (() => void) => {
    const toggleVisibility: () => void = (): void => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return (): void => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <a href="#" aria-label="Back to top">
      {notVisible(isVisible)}
      {visible(isVisible)}
    </a>
  );
}

function visible(isVisible: boolean): false | JSX.Element {
  return (
    isVisible && (
      <div className="scroll-cursor transitioning rounded-3 hover-shadow">
        <div>
          <ArrowUp />
        </div>
      </div>
    )
  );
}

function notVisible(isVisible: boolean): false | JSX.Element {
  return (
    !isVisible && (
      <div className="scroll-cursor leaving rounded-3">
        <div>
          <ArrowUp />
        </div>
      </div>
    )
  );
}
