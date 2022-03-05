import Link from "next/link";
import * as Icon from "react-feather";
import { handleClick } from "./selectables";
import Image from "next/image";

export default function Navbar(props: any) {
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
  <a href={href} className={"navicon group " + add} onClick={handleClick}>
    {icon}
    <span className="navtooltip group-hover:scale-100">{text}</span>
  </a>
);

const GitProfile = () => (
  <a href="https://github.com/irvanmalik48" className="gitprofile group">
    <div className="navhr mt-3"></div>
    <div className="navicon group">
      <Image
        src="https://github.com/irvanmalik48.png?size=400"
        sizes="400"
        layout="fill"
        className="navicon opacity-75 group-hover:rounded-xl group-hover:opacity-100"
        alt="profile picture"
      />
      <span className="navtooltip group-hover:scale-100">Github Profile</span>
    </div>
    <div className="gitchevron">
      <Icon.ChevronsRight />
    </div>
  </a>
);
