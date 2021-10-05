import {
  GitHub,
  Facebook,
  MessageSquare,
  Mail,
  Linkedin,
  Instagram,
} from "react-feather";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-dark text-center text-lg-start text-white-50">
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
  );
}

function icons() {
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
        aria-label="Facebook"
        href="https://instagram.com/irvann48_"
        className="text-white ripple px-lg-3 px-2"
      >
        <Instagram />
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
