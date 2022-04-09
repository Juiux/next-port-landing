import * as Icons from "react-feather";
import Link from "next/link";
import { handleClick } from "./selectables";
import { ToggleIcon } from "./navbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BottomBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="bottombar">
      <Link href={"/"} passHref>
        <a className="bottomitems" onClick={handleClick} aria-label="Home">
          <Icons.Home />
          <p>Home</p>
        </a>
      </Link>
      <Link href={"/blog"} passHref>
        <a className="bottomitems" onClick={handleClick} aria-label="Blog">
          <Icons.AlignLeft />
          <p>Blog</p>
        </a>
      </Link>
      <Link href={"/about"} passHref>
        <a className="bottomitems" onClick={handleClick} aria-label="About">
          <Icons.Info />
          <p>About</p>
        </a>
      </Link>
      <button
        className="bottomitems anchor"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle Theme"
      >
        <ToggleIcon />
        <p>Theme</p>
      </button>
      <button
        className="stt-bottom w-fit justify-self-center"
        onClick={handleClick}
        aria-label="Go up"
      >
        <Icons.ChevronsUp />
      </button>
    </nav>
  );
}
