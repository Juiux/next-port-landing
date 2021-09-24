import { NextPage } from "next";
import DefaultLayout from "../components/layouts/default";

const About: NextPage = () => {
  return (
    <DefaultLayout title="About" description="Stuffs about me.">
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-5 text-center">About Me</p>
          <p className="lead mb-3 mt-0 text-center">Who I am until now.</p>
        </div>
      </article>
      <svg
        className="vw-100"
        id="visual"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 167L21.5 167.5C43 168 86 169 128.8 166.5C171.7 164 214.3 158 257.2 149.5C300 141 343 130 385.8 129.3C428.7 128.7 471.3 138.3 514.2 146.3C557 154.3 600 160.7 642.8 166.2C685.7 171.7 728.3 176.3 771.2 175C814 173.7 857 166.3 878.5 162.7L900 159L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#226688"
        ></path>
        <path
          d="M0 117L21.5 120.8C43 124.7 86 132.3 128.8 129.3C171.7 126.3 214.3 112.7 257.2 107.3C300 102 343 105 385.8 103.7C428.7 102.3 471.3 96.7 514.2 103C557 109.3 600 127.7 642.8 127.3C685.7 127 728.3 108 771.2 98.8C814 89.7 857 90.3 878.5 90.7L900 91L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#297f9c"
        ></path>
        <path
          d="M0 107L21.5 104C43 101 86 95 128.8 97.2C171.7 99.3 214.3 109.7 257.2 112.5C300 115.3 343 110.7 385.8 106.8C428.7 103 471.3 100 514.2 100.2C557 100.3 600 103.7 642.8 102.5C685.7 101.3 728.3 95.7 771.2 90.2C814 84.7 857 79.3 878.5 76.7L900 74L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#3798ae"
        ></path>
        <path
          d="M0 82L21.5 79.3C43 76.7 86 71.3 128.8 70.7C171.7 70 214.3 74 257.2 75C300 76 343 74 385.8 68C428.7 62 471.3 52 514.2 48.5C557 45 600 48 642.8 54.2C685.7 60.3 728.3 69.7 771.2 69.3C814 69 857 59 878.5 54L900 49L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#4cb2be"
        ></path>
        <path
          d="M0 55L21.5 51.3C43 47.7 86 40.3 128.8 37.3C171.7 34.3 214.3 35.7 257.2 36C300 36.3 343 35.7 385.8 35.2C428.7 34.7 471.3 34.3 514.2 32.8C557 31.3 600 28.7 642.8 30.5C685.7 32.3 728.3 38.7 771.2 38.2C814 37.7 857 30.3 878.5 26.7L900 23L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#66cccc"
        ></path>
      </svg>
      <article className="container card px-4 pt-2 pb-4 floatcard">
        <p className="h4 mb-4 text-center mt-3">Description</p>
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
        <p className="h4 mb-4 mt-4 text-center">Stuffs I Like</p>
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
        <p className="h4 mb-4 mt-4 text-center">Languages</p>
        <h3>Java</h3>
        <p className="m-0 p-0">
          I first study Java at 12th grade of Senior Highschool. Back then I was
          barely touching the subtler concepts of Java. I started studying it
          again after I got into university. Currently my main language focus.
        </p>
        <h3>Javascript</h3>
        <p className="m-0 p-0">
          Javascript is the butter and bread for web development. I first
          learned Javascript when experimenting to create better looking website
          with complex animations and stuffs like that idk I&apos;m a dumb
          designer back then. Now mainly uses Javascript to develop front-end
          applications and web designs.
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
        <h3>PHP</h3>
        <p className="m-0 p-0">
          Uhh, this is painful. I don&apos;t want to explain it.
        </p>
      </section>
      <section className="container mt-3 mb-5 card floatcard-no-mt px-4 pb-4">
        <p className="h4 mb-4 mt-4 text-center">My Setup</p>
        <h3>Acer Aspire 3 A314-22</h3>
        <ul className="list-group">
          <li className="list-group-item">
            CPU : AMD Ryzen 3 3250U @2,6 GHz (with Turbo up-to 3,5GHz)
          </li>
          <li className="list-group-item">VGA : Vega 3 Integrated Graphics</li>
          <li className="list-group-item">
            RAM : SK-Hynix HMA851S6CJR6N-VK DDR4 2666MT/s 4GB
          </li>
          <li className="list-group-item">Storage : SanDisk NVMe SSD 256GB</li>
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
          <li className="list-group-item">OS : LineageOS 18.1 (Android 11)</li>
          <li className="list-group-item">
            A little note that this shit phone is dying.
          </li>
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default About;
