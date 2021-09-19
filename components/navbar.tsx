import { Menu } from "react-feather";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-bg-dark sticky-top shadow">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand m-0 p-0 font-monospace fs-6" aria-label="Home">
            <span className="text-info">&#123;</span>
            irvanma
            <span className="text-info">&#125;</span>
          </a>
        </Link>
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
              <Link href="/">
                <a className="nav-link" aria-label="Homepage">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link" aria-label="Blog Page">
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link" aria-label="Download CV">
                  CV
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" aria-label="About Page">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
