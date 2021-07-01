import { Menu } from "react-feather";
import Link from "next/link";

if (typeof window !== "undefined") {
  let scrollPosPrev = window.pageYOffset;
  window.onscroll = function() {
    let scrollPosCur = window.pageYOffset;
    if (scrollPosPrev > scrollPosCur) {
      document.getElementById("navigation-bar")?.setAttribute("style", "top: 0;");
    } else {
      document.getElementById("navigation-bar")?.setAttribute("style", "top: -80px;");
    }
    scrollPosPrev = scrollPosCur;
  }
}



export default function Header() {
  return (
    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-dark navbar-bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand m-0 p-0 font-monospace fs-6" href="/">
          <span className="text-info">&#123;</span>
          irvanma
          <span className="text-info">&#125;</span>
        </a>
        <button
          className="navbar-toggler p-0"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="btn fs-6 btn-dark pe-2 ps-2 pt-1 pb-1 m-0 shadow-0">
            <Menu />
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link href={`blog`}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
