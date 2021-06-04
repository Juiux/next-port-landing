import { GitHub, Facebook, MessageSquare, Mail, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-white-50">
      <div className="text-center p-3">
        <p className="fs-1 px-2 mt-0 mb-2">
          <a
            aria-label="GitHub"
            href="https://github.com/irvanmalik48"
            className="text-white ripple px-3"
          >
            <GitHub />
          </a>
          <a
            aria-label="Facebook"
            href="https://facebook.com/irvanmalik48"
            className="text-white ripple px-3"
          >
            <Facebook />
          </a>
          <a
            aria-label="Telegram"
            href="https://t.me/irvanmalik48"
            className="text-white ripple px-3"
          >
            <MessageSquare />
          </a>
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/irvanmalik48/"
            className="text-white ripple px-3"
          >
            <Linkedin />
          </a>
          <a
            aria-label="Email"
            href="mailto:me@irvanma.live"
            className="text-white ripple px-3"
          >
            <Mail />
          </a>
        </p>
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
        <br />
        <a
          href="https://github.com/irvanmalik48/blog/blob/main/CODE_OF_CONDUCT.md"
          className="link-info"
        >
          Code of Conduct
        </a>
        {" | "}
        <a
          href="https://github.com/irvanmalik48/blog/blob/main/PRIVACY_POLICY.md"
          className="link-info"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
