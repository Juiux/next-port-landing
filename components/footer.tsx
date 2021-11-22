import {
  GitHub,
  Facebook,
  MessageSquare,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
} from "react-feather";

export default function Footer(): JSX.Element {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="visual"
        viewBox="0 0 900 80"
        version="1.1"
      >
        <path
          d="M0 35L21.5 40.3C43 45.7 86 56.3 128.8 60.2C171.7 64 214.3 61 257.2 57.5C300 54 343 50 385.8 51.2C428.7 52.3 471.3 58.7 514.2 57.7C557 56.7 600 48.3 642.8 48.2C685.7 48 728.3 56 771.2 55.5C814 55 857 46 878.5 41.5L900 37L900 101L878.5 101C857 101 814 101 771.2 101C728.3 101 685.7 101 642.8 101C600 101 557 101 514.2 101C471.3 101 428.7 101 385.8 101C343 101 300 101 257.2 101C214.3 101 171.7 101 128.8 101C86 101 43 101 21.5 101L0 101Z"
          fill="#2e3440"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />
      </svg>
      <footer className="bg-dark text-center text-lg-start text-nord-footer">
        <div className="text-center p-3">
          {icons()}
          Powered by{" "}
          <a href="https://nextjs.org/" className="link-info">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://vercel.com/" className="link-info">
            Vercel
          </a>
          <br />
          Copyright © 2021 Irvan Malik Azantha
        </div>
      </footer>
    </>
  );
}

function icons(): JSX.Element {
  return (
    <p className="fs-1 px-2 mt-0 mb-2">
      <a
        aria-label="GitHub"
        href="https://github.com/irvanmalik48"
        className="text-white ripple px-lg-3 px-2"
      >
        <GitHub />
      </a>
      <a
        aria-label="Facebook"
        href="https://facebook.com/irvanmalik48"
        className="text-white ripple px-lg-3 px-2"
      >
        <Facebook />
      </a>
      <a
        aria-label="Instagram"
        href="https://instagram.com/irvann48_"
        className="text-white ripple px-lg-3 px-2"
      >
        <Instagram />
      </a>
      <a
        aria-label="Twitter"
        href="https://twitter.com/irvanmalik48"
        className="text-white ripple px-lg-3 px-2"
      >
        <Twitter />
      </a>
      <a
        aria-label="Telegram"
        href="https://t.me/irvanmalik48"
        className="text-white ripple px-lg-3 px-2"
      >
        <MessageSquare />
      </a>
      <a
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/irvanmalik48/"
        className="text-white ripple px-lg-3 px-2"
      >
        <Linkedin />
      </a>
      <a
        aria-label="Email"
        href="mailto:me@irvanma.live"
        className="text-white ripple px-lg-3 px-2"
      >
        <Mail />
      </a>
    </p>
  );
}
