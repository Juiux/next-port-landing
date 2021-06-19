import fs from "fs";
import path from "path";
import matter from "gray-matter";
import unified from "unified";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as {
        title: string;
        date: any;
        desc: string;
        tag: string;
      }),
    };
  });
  return sortPostData(allPostsData);
}

export function sortPostData(allPostsData: any[]) {
  return allPostsData.sort((a: any, b: any) => {
    if (a["date"] < b["date"]) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: any) {
  const parse = require("remark-parse");
  const r2r = require("remark-rehype");
  const prism = require("@mapbox/rehype-prism");
  const stringify = require("rehype-stringify");
  const raw = require("rehype-raw");
  const slug = require("rehype-slug");
  const toc = require("rehype-toc");

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await unified()
    .use(parse)
    .use(r2r, {allowDangerousHtml: true})
    .use(slug)
    .use(toc, {
      nav: false,
      cssClasses: {
        link: "link-info",
      }
    })
    .use(raw)
    .use(prism)
    .use(stringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      date: any;
      desc: string;
      tag: string;
    }),
  };
}
