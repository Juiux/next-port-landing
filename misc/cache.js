const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");

function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return sortPostData(allPostsData);
}

function sortPostData(allPostsData) {
  return allPostsData.sort((a, b) => {
    if (a["date"] < b["date"]) {
      return 1;
    } else {
      return -1;
    }
  });
}

function rss() {
  const pages = getSortedPostsData();
  const siteUrl = "https://irvanma.live";
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0"
>
  <channel>
    <title><![CDATA[irvanma.live]]></title>
    <description><![CDATA[IrvanMA's Lair]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${pages
      .map(
        ({ id, title, date, desc }) =>
          `<item>
      <title>${title}</title>
      <description> <![CDATA[${desc}]]> </description>
      <link>${siteUrl}/blog/${id}</link>
      <guid isPermaLink="false">${siteUrl}/blog/${id}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
    </item>`
      )
      .join("\n\t\t")}
  </channel>
</rss>`;
}

function stringifyPostData() {
  return `export const cachedPosts = ${JSON.stringify(getSortedPostsData())}`;
}

function createBlogCache(filename) {
  fs.writeFile(`./misc/${filename}.ts`, stringifyPostData(), function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Blog cache file written.");
  });
}

function createRss() {
  fs.writeFile(`./public/rss.xml`, rss(), function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Blog RSS updated.");
  });
}

createBlogCache("blog");
createRss();
