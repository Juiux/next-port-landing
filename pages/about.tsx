import { NextPage } from "next";
import DefaultLayout from "@layouts/default";
import Waves from "@components/waves";
import { Info, Heart, Users, Code, Settings } from "react-feather";

const About: NextPage = (): JSX.Element => {
  return (
    <DefaultLayout
      title="About"
      description="Stuffs about me."
      tag={undefined}
      date={undefined}
    >
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-5 text-center">About Me</p>
          <p className="lead mb-3 mt-0 text-center">Who I am until now.</p>
        </div>
      </article>
      <Waves />
      <article className="container card px-4 pt-2 pb-4 floatcard">
        <p className="h4 mb-4 mt-3 d-flex justify-content-between align-items-center">
          <span>Description</span>
          <span>
            <Info />
          </span>
        </p>
        <blockquote>Keep it simple, stupid.</blockquote>
        <p className="m-0 p-0">
          Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 18 y&apos;o boy
          currently studying on Universitas Sriwijaya. I live in Palembang,
          Indonesia. I&apos;m a highly enthusiastic person with subtle interest
          in open source projects and keen on learning new things. Also likes to
          watch anime, play games, and have hugs and cuddles (lmao). Give glory
          for the chaos!
        </p>
      </article>
      <section className="container mt-3 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 d-flex justify-content-between align-items-center">
          <span>Stuffs I Like</span>
          <span>
            <Heart />
          </span>
        </p>
        <ul className="list-group">
          <li className="list-group-item">Anime (this is obvious)</li>
          <li className="list-group-item">Telegram (this is also obvious)</li>
          <li className="list-group-item">
            Technology (this is really obvious)
          </li>
          <li className="list-group-item">
            Just being weeb (why do I even write this?)
          </li>
        </ul>
      </section>
      <section className="container mt-3 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 d-flex justify-content-between align-items-center">
          <span>Current Affiliation</span>
          <span>
            <Users />
          </span>
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            CompSci Student at Universitas Sriwijaya
          </li>
          <li className="list-group-item">
            Contributor and Moderator at GNU/Weeb
          </li>
          <li className="list-group-item">
            Contributor and Moderator at Wibutech
          </li>
          <li className="list-group-item">Staff at HMIF</li>
        </ul>
      </section>
      <section className="container mt-3 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 d-flex justify-content-between align-items-center">
          <span>Skills/Languages</span>
          <span>
            <Code />
          </span>
        </p>
        <h3>GNU/Linux</h3>
        <p className="m-0 p-0">
          I really like this one. It is the main operating system I use aside
          from Windows which is definitely needed for now (and games of course).
          I love the robustness and the ecosystem of the OS also the freedom to
          tinker it whichever way I want. Been using many distros but I settle
          for Arch Linux now.
        </p>
        <h3>Java</h3>
        <p className="m-0 p-0">
          I first study Java at 12th grade of Senior Highschool. Back then I was
          barely touching the subtler concepts of Java. I started studying it
          again after I got into university. Currently my main language focus.
          Also, this language is part of my university curriculum.
        </p>
        <h3>Javascript</h3>
        <p className="m-0 p-0">
          Javascript is the butter and bread for web development. I first
          learned Javascript when experimenting to create better looking website
          with complex animations and stuffs like that idk I&apos;m a dumb
          designer back then. Now mainly uses Javascript to develop front-end
          applications and web designs.
        </p>
        <h3>PHP</h3>
        <p className="m-0 p-0">
          Part of my university curriculum. Hate it or love it, people still use
          this language regardless. Oh well, I do kinda like this language now
          even tho it&apos;s still hard for me to grasp. Just let me try and
          learn more of it.
        </p>
        <h3>SQL</h3>
        <p className="m-0 p-0">
          Part of my university curriculum. A database querying language I use
          dominantly now for my university projects. Kinda old but still
          reliable and robust. It has lots of support and great community.
        </p>
        <h3>Typescript</h3>
        <p className="m-0 p-0">
          Typescript is Javascript but with type-checking. It is very robust and
          helps you with great developer experience it offers. I use this in
          addition with Javascript since it has all Javascript syntaxes and more
          so I don&apos;t have a hard time adapting to it.
        </p>
        <h3>HTML</h3>
        <p className="m-0 p-0">
          HTML is, well, you know it. I don&apos;t even have to explain it
          anymore. This shit been around since the dawn of internet and is the
          easiest shit to learn and implement. Heck you&apos;ll found this
          language literally everywhere across the internet. I don&apos;t even
          know why I wrote this.
        </p>
        <h3>CSS</h3>
        <p className="m-0 p-0">
          As a front-end guy, I do specialize in using CSS to create beautiful
          and modern styles. Even tho, I&apos;m still a noob at that (lmao).
          Well, let&apos;s say that this is just a stylesheet where wildest of
          imagination happens.
        </p>
        <h3>Sass</h3>
        <p className="m-0 p-0">
          CSS, but simply better. This is one tool that I will definitely use
          for creating web projects. It extends the functionality of CSS and add
          some more cool stuffs to increase development productivity. I&apos;m
          in love with this (lmao).
        </p>
      </section>
      <section className="container mt-3 mb-5 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 d-flex justify-content-between align-items-center">
          <span>My Setup</span>
          <span>
            <Settings />
          </span>
        </p>
        <h3>Acer Aspire 3 A314-22</h3>
        <ul className="list-group">
          <li className="list-group-item">
            CPU : AMD Ryzen 3 3250U @2,6 GHz (with Turbo up-to 3,5GHz)
          </li>
          <li className="list-group-item">VGA : Vega 3 Integrated Graphics</li>
          <li className="list-group-item">
            RAM : SK-Hynix HMA851S6CJR6N-VK DDR4 2666MT/s 4GB
          </li>
          <li className="list-group-item">Storage : SK-Hynix NVMe SSD 256GB</li>
          <li className="list-group-item">Display : TN LCD 1080x1920 (16:9)</li>
          <li className="list-group-item">OS : Arch Linux | Windows 11</li>
        </ul>
        <h3>Xiaomi Redmi 5 Plus</h3>
        <ul className="list-group">
          <li className="list-group-item">SoC : Qualcomm Snapdragon 625</li>
          <li className="list-group-item">RAM : LPDDR4 4GB</li>
          <li className="list-group-item">
            Storage : Internal eMMC 64GB + External Class 10 SanDisk eMMC 32GB
          </li>
          <li className="list-group-item">
            Display : IPS LCD 1080x2160 (18:9)
          </li>
          <li className="list-group-item">OS : ArrowOS (Android 12)</li>
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default About;
