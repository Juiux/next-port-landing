import { handleClick } from "./selectables";
import * as Icon from "react-feather";

export default function Stt() {
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
}
