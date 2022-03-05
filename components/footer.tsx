import * as Icon from "react-feather";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-row gap-2 justify-center items-center">
        <a href="https://github.com/irvanmalik48" className="navicon m-0">
          <Icon.GitHub />
        </a>
        <a href="https://facebook.com/irvanmalik48" className="navicon m-0">
          <Icon.Facebook />
        </a>
        <a href="https://instagram.com/irvann48_" className="navicon m-0">
          <Icon.Instagram />
        </a>
        <a href="https://twitter.com/irvanmalik48" className="navicon m-0">
          <Icon.Twitter />
        </a>
        <a href="https://t.me/irvanmalik48" className="navicon m-0">
          <Icon.MessageSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/irvanmalik48"
          className="navicon m-0"
        >
          <Icon.Linkedin />
        </a>
        <a href="mailto:irvanma@gnuweeb.org" className="navicon m-0">
          <Icon.Mail />
        </a>
      </div>
      <p className="mt-4">Powered by Next.js and Vercel</p>
      <p>Copyright © 2021 Irvan Malik Azantha</p>
    </footer>
  );
}
