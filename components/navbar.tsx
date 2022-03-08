import Link from "next/link";
import * as Icon from "react-feather";
import { handleClick } from "./selectables";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar(props: any) {
  const { theme, setTheme } = useTheme();
  return (
    <nav className={"nav " + props.className}>
      <NavIconNext icon={<Icon.Home />} text="Home" href="/" />
      <div className="navhr"></div>
      <NavIcon
        icon={<Icon.GitBranch />}
        text="Blog's Repository"
        href="https://github.com/irvanmalik48/blog"
      />
      <NavIconNext
        add="flex"
        icon={<Icon.AlignLeft />}
        text="Blog Posts"
        href="/blog"
      />
      <NavIcon icon={<Icon.FileText />} text="CV" href="#" />
      <NavIconNext icon={<Icon.Info />} text="About" href="/about" />
      <DarkToggle
        action={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <GitProfile />
    </nav>
  );
}

const NavIconNext = ({ icon, text, href, add }: any) => (
  <Link href={href} passHref>
    <button className={"navicon group " + add} onClick={handleClick}>
      {icon}
      <span className="navtooltip group-hover:scale-100">{text}</span>
    </button>
  </Link>
);

const NavIcon = ({ icon, text, href, add }: any) => (
  <a
    aria-label={text}
    href={href}
    className={"navicon group " + add}
    onClick={handleClick}
  >
    {icon}
    <span className="navtooltip group-hover:scale-100">{text}</span>
  </a>
);

const DarkToggle = ({ action, add }: any) => (
  <button className={"navicon group " + add} onClick={action}>
    <ToggleIcon />
    <span className="navtooltip group-hover:scale-100">Switch Theme</span>
  </button>
);

export const ToggleIcon = () => {
  const { theme, setTheme } = useTheme();
  if (theme == "dark") {
    return <Icon.Sun />;
  } else {
    return <Icon.Moon />;
  }
};

const GitProfile = () => (
  <a href="https://github.com/irvanmalik48" className="gitprofile group">
    <div className="navhr mt-3"></div>
    <div className="navicon group">
      <Image
        src="https://github.com/irvanmalik48.png?size=400"
        sizes="400"
        layout="fill"
        className="navicon brightness-75 group-hover:brightness-100 group-hover:rounded-xl"
        alt="profile picture"
      />
      <span className="navtooltip group-hover:scale-100">Github Profile</span>
    </div>
    <div className="gitchevron">
      <Icon.ChevronsRight />
    </div>
  </a>
);
