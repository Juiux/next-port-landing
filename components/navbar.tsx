import { Menu } from "react-feather";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-bg-dark sticky-top shadow">
      <div className="container">
        {svgRender()}
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
          {navLinks()}
        </div>
      </div>
    </nav>
  );
}

function svgRender(): JSX.Element {
  return (
    <Link href="/">
      <a className="navbar-brand m-0 p-0" aria-label="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="29"
          viewBox="0 0 103 29"
          fill="none"
        >
          <g clip-path="url(#clip0_2_2)">
            <path
              d="M33.0459 21H31.3584V8.20312H33.0459V21ZM40.4814 12.9492C40.2354 12.9082 39.9688 12.8877 39.6816 12.8877C38.6152 12.8877 37.8916 13.3418 37.5107 14.25V21H35.8848V11.4902H37.4668L37.4932 12.5889C38.0264 11.7393 38.7822 11.3145 39.7607 11.3145C40.0771 11.3145 40.3174 11.3555 40.4814 11.4375V12.9492ZM45.2803 18.7939L47.6357 11.4902H49.2969L45.8867 21H44.6475L41.2021 11.4902H42.8633L45.2803 18.7939ZM56.5918 21C56.498 20.8125 56.4219 20.4785 56.3633 19.998C55.6074 20.7832 54.7051 21.1758 53.6562 21.1758C52.7188 21.1758 51.9482 20.9121 51.3447 20.3848C50.7471 19.8516 50.4482 19.1777 50.4482 18.3633C50.4482 17.373 50.8232 16.6055 51.5732 16.0605C52.3291 15.5098 53.3896 15.2344 54.7549 15.2344L56.3369 15.2344V14.4873C56.3369 13.9189 56.167 13.4678 55.8271 13.1338C55.4873 12.7939 54.9863 12.624 54.3242 12.624C53.7441 12.624 53.2578 12.7705 52.8652 13.0635C52.4727 13.3564 52.2764 13.7109 52.2764 14.127H50.6416C50.6416 13.6523 50.8086 13.1953 51.1426 12.7559C51.4824 12.3105 51.9395 11.959 52.5137 11.7012C53.0938 11.4434 53.7295 11.3145 54.4209 11.3145C55.5166 11.3145 56.375 11.5898 56.9961 12.1406C57.6172 12.6855 57.9395 13.4385 57.9629 14.3994V18.7764C57.9629 19.6494 58.0742 20.3438 58.2969 20.8594V21H56.5918ZM53.8936 19.7607C54.4033 19.7607 54.8867 19.6289 55.3438 19.3652C55.8008 19.1016 56.1318 18.7588 56.3369 18.3369V16.3857H55.0625C53.0703 16.3857 52.0742 16.9688 52.0742 18.1348C52.0742 18.6445 52.2441 19.043 52.584 19.3301C52.9238 19.6172 53.3604 19.7607 53.8936 19.7607ZM62.0498 11.4902L62.1025 12.6855C62.8291 11.7715 63.7783 11.3145 64.9502 11.3145C66.96 11.3145 67.9736 12.4482 67.9912 14.7158V21H66.3652V14.707C66.3594 14.0215 66.2012 13.5146 65.8906 13.1865C65.5859 12.8584 65.1084 12.6943 64.458 12.6943C63.9307 12.6943 63.4678 12.835 63.0693 13.1162C62.6709 13.3975 62.3604 13.7666 62.1377 14.2236V21H60.5117V11.4902H62.0498Z"
              fill="#ECEFF4"
            />
            <path
              d="M73.8008 8.20312L77.0879 17.4844L80.3574 8.20312H83.8203V21H81.1748V17.502L81.4385 11.4639L77.9844 21H76.1738L72.7285 11.4727L72.9922 17.502V21H70.3555V8.20312H73.8008ZM93.5059 18.3633H88.8828L88.0039 21L85.2002 21L89.9639 8.20312H92.4072L97.1973 21H94.3936L93.5059 18.3633ZM89.5947 16.2275H92.7939L91.1855 11.4375L89.5947 16.2275Z"
              fill="#88C0D0"
            />
            <circle cx="14" cy="14" r="10" fill="#88C0D0" />
            <circle cx="14" cy="14" r="5" fill="#2E3440" />
          </g>
          <defs>
            <clipPath id="clip0_2_2">
              <rect width="103" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </Link>
  );
}

function navLinks(): JSX.Element {
  return (
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
  );
}
