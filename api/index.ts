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
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await unified()
    .use(require("remark-parse"))
    .use(require("remark-rehype"))
    .use(require("@mapbox/rehype-prism"))
    .use(require("rehype-stringify"))
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
