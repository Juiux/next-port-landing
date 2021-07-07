import React, { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <a href="#" aria-label="Back to top">
      {!isVisible && (
        <div className="scroll-cursor leaving rounded-3">
          <div>
            <ArrowUp />
          </div>
        </div>
      )}
      {isVisible && (
        <div className="scroll-cursor transitioning rounded-3 hover-shadow">
          <div>
            <ArrowUp />
          </div>
        </div>
      )}
    </a>
  );
}
