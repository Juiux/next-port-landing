import * as Icons from "react-feather";
import Link from "next/link";
import { handleClick } from "./selectables";
import { ToggleIcon } from "./navbar";
import { useTheme } from "next-themes";

export default function BottomBar() {
  const { theme, setTheme } = useTheme();

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
      <button
        className="bottomitems anchor"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <ToggleIcon />
        <p>Theme</p>
      </button>
      <button
        className="justify-self-center stt-bottom w-fit"
        onClick={handleClick}
      >
        <Icons.ChevronsUp />
      </button>
    </nav>
  );
}
