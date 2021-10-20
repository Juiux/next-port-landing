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
          width="103"
          height="29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path
              d="M33.0459 21h-1.6875V8.20312h1.6875V21Zm7.4355-8.0508c-.246-.041-.5126-.0615-.7998-.0615-1.0664 0-1.79.4541-2.1709 1.3623V21h-1.6259v-9.5098h1.582l.0264 1.0987c.5332-.8496 1.289-1.2744 2.2675-1.2744.3164 0 .5567.041.7207.123v1.5117Zm4.7989 5.8447 2.3554-7.3037h1.6612L45.8867 21h-1.2392l-3.4454-9.5098h1.6612l2.417 7.3037ZM56.5918 21c-.0938-.1875-.1699-.5215-.2285-1.002-.7559.7852-1.6582 1.1778-2.7071 1.1778-.9374 0-1.708-.2637-2.3115-.791-.5976-.5332-.8965-1.2071-.8965-2.0215 0-.9903.375-1.7578 1.125-2.3028.7559-.5507 1.8164-.8261 3.1817-.8261h1.582v-.7471c0-.5684-.1699-1.0195-.5098-1.3535-.3398-.3399-.8408-.5098-1.5029-.5098-.5801 0-1.0664.1465-1.459.4395-.3925.2929-.5888.6474-.5888 1.0635h-1.6348c0-.4747.167-.9317.501-1.3711.3398-.4454.7969-.7969 1.3711-1.0547.5801-.2578 1.2158-.3867 1.9072-.3867 1.0957 0 1.9541.2753 2.5752.8261.6211.5449.9434 1.2979.9668 2.2588v4.377c0 .873.1113 1.5674.334 2.083V21h-1.7051Zm-2.6982-1.2393c.5097 0 .9931-.1318 1.4502-.3955.457-.2636.788-.6064.9931-1.0283v-1.9512h-1.2744c-1.9922 0-2.9883.5831-2.9883 1.7491 0 .5097.1699.9082.5098 1.1953.3398.2871.7764.4306 1.3096.4306Zm8.1562-8.2705.0527 1.1953c.7266-.914 1.6758-1.371 2.8477-1.371 2.0098 0 3.0234 1.1337 3.041 3.4013V21h-1.626v-6.293c-.0058-.6855-.164-1.1924-.4746-1.5205-.3047-.3281-.7822-.4922-1.4326-.4922-.5273 0-.9902.1407-1.3887.4219-.3984.2813-.7089.6504-.9316 1.1074V21h-1.626v-9.5098h1.5381Z"
              fill="#fff"
            />
            <path
              d="m73.8008 8.20312 3.2871 9.28128 3.2695-9.28128h3.4629V21h-2.6455v-3.498l.2637-6.0381L77.9844 21h-1.8106l-3.4453-9.5273.2637 6.0293V21h-2.6367V8.20312h3.4453ZM93.5059 18.3633h-4.6231L88.0039 21h-2.8037l4.7637-12.79688h2.4433L97.1973 21h-2.8037l-.8877-2.6367Zm-3.9112-2.1358h3.1992l-1.6084-4.79-1.5908 4.79Z"
              fill="#6CC"
            />
            <circle cx="14" cy="14" r="10" fill="#6CC" />
            <circle cx="14" cy="14" r="5" fill="#262626" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h103v29H0z" />
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
