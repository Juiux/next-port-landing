import * as Icon from "react-feather";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-row gap-2 justify-center items-center">
        <a
          aria-label="GitHub Profile"
          href="https://github.com/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.GitHub />
        </a>
        <a
          aria-label="Facebook Profile"
          href="https://facebook.com/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.Facebook />
        </a>
        <a
          aria-label="Instagram Profile"
          href="https://instagram.com/irvann48_"
          className="navicon m-0"
        >
          <Icon.Instagram />
        </a>
        <a
          aria-label="Twitter Profile"
          href="https://twitter.com/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.Twitter />
        </a>
        <a
          aria-label="Telegram Profile"
          href="https://t.me/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.MessageSquare />
        </a>
        <a
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.Linkedin />
        </a>
        <a
          aria-label="Email Me"
          href="mailto:irvanma@gnuweeb.org"
          className="navicon m-0"
        >
          <Icon.Mail />
        </a>
      </div>
      <p className="mt-4 text-sm">Powered by Next.js and Vercel</p>
      <p className="text-sm">Copyright © 2021 Irvan Malik Azantha</p>
    </footer>
  );
}
