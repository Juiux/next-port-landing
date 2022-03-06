import * as Icons from "react-feather";
import Link from "next/link";
import { handleClick } from "./selectables";

export default function BottomBar() {
  return (
    <nav className="bottombar">
      <Link href={"/"} passHref>
        <a className="bottomitems" onClick={handleClick}>
          <Icons.Home />
          <p>Home</p>
        </a>
      </Link>
      <Link href={"/blog"} passHref>
        <a className="bottomitems" onClick={handleClick}>
          <Icons.AlignLeft />
          <p>Blog</p>
        </a>
      </Link>
      <Link href={"/about"} passHref>
        <a className="bottomitems" onClick={handleClick}>
          <Icons.Info />
          <p>About</p>
        </a>
      </Link>
      <button className="stt-bottom" onClick={handleClick}>
        <Icons.ChevronsUp />
      </button>
    </nav>
  );
}
