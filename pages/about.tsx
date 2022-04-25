import { NextPage } from "next";
import Default from "../components/default";

const About: NextPage = () => {
  return (
    <Default
      title="About Me"
      desc="Stuffs about me."
      tag={undefined}
      date={undefined}
    >
      <p className="mt-12 text-center text-3xl font-bold">About Me</p>
      <p className="mt-0 mb-10 text-center text-nord-light-accent dark:text-nord-dark-accent">
        Who I am until now.
      </p>
      <div className="postcard">
        <h1>Description</h1>
        <blockquote>
          <p>Keep it simple, stupid.</p>
        </blockquote>
        <p>
          Hello, my name&apos;s Irvan Malik Azantha. I&apos;m a 18 y&apos;o boy
          currently studying on Universitas Sriwijaya. I live in Palembang,
          Indonesia. I&apos;m a highly enthusiastic person with subtle interest
          in open source projects and keen on learning new things. Also likes to
          watch anime, play games, and have hugs and cuddles (lmao). Give glory
          for the chaos!
        </p>
        <h1>Stuffs I Like</h1>
        <blockquote>
          <p>Bunch of activities and general chores I like to do.</p>
        </blockquote>
        <ul className="md:columns-2">
          <li>Watching anime</li>
          <li>Playing Honkai Impact 3</li>
          <li>Playing Minecraft</li>
          <li>Reading out tech news</li>
          <li>Hanging out with friends</li>
          <li>Coding stuffs</li>
          <li>Cooking Indomie (yes, please)</li>
          <li>Learning history</li>
        </ul>
        <h1>Current Affiliation</h1>
        <blockquote>
          <p>Organizations and/or communities that I participate in.</p>
        </blockquote>
        <ul className="xl:columns-2">
          <li>CompSci Student at Universitas Sriwijaya</li>
          <li>Contributor and Moderator at GNU/Weeb</li>
          <li>Contributor and Moderator at Wibutech</li>
          <li>Member of Web Development Team at GDSC</li>
        </ul>
        <h1>Tools</h1>
        <blockquote>
          <p>Tools/Languages that I usually use.</p>
        </blockquote>
        <ul className="md:columns-2 xl:columns-4">
          <li>GNU/Linux</li>
          <li>Java</li>
          <li>Go</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div className="postcard box-border">
        <h1>Current Setup</h1>
        <blockquote>
          <p>My current running machines.</p>
        </blockquote>
        <h3>Acer Aspire 3 A314-22</h3>
        <ul>
          <li>CPU : AMD Ryzen 3 3250U @2,6 GHz (with Turbo up-to 3,5GHz)</li>
          <li>VGA : Vega 3 Integrated Graphics</li>
          <li>RAM : SK-Hynix HMA851S6CJR6N-VK DDR4 2666MT/s 4GB</li>
          <li>Storage : SK-Hynix NVMe SSD 256GB</li>
          <li>Display : TFT LCD 1080x1920 (16:9)</li>
          <li>OS : Arch Linux | Windows 11</li>
        </ul>
        <h3>Xiaomi Redmi 5 Plus</h3>
        <ul>
          <li>SoC : Qualcomm Snapdragon 625</li>
          <li>RAM : LPDDR4 4GB</li>
          <li>
            Storage : Internal eMMC 64GB + External Class 10 SanDisk eMMC 32GB
          </li>
          <li>Display : IPS LCD 1080x2160 (18:9)</li>
          <li>OS : ArrowOS (Android 12)</li>
        </ul>
      </div>
    </Default>
  );
};

export default About;
