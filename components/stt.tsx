import { handleClick } from "./selectables";
import { useEffect, useState } from "react";
import * as Icon from "react-feather";

export default function Stt() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const mainPart = document.getElementById("main-part");
    const toggleVisibility = () => {
      if (mainPart !== null && mainPart.scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    mainPart?.addEventListener("scroll", toggleVisibility);
    return () => mainPart?.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (isVisible) {
    return (
      <a
        href="#"
        className="scroll-cursor"
        aria-label="Back to top"
        onClick={handleClick}
      >
        <Icon.ChevronsUp />
      </a>
    );
  } else {
    return (
      <a href="#" className="scroll-cursor opacity-0" aria-label="Back to top">
        <Icon.ChevronsUp />
      </a>
    );
  }
}
