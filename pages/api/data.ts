import matter from "gray-matter";
import fs from "fs";
import path from "path";

export function getSortedPostsData() {
  const postsDirectory = path.join(process.cwd(), "posts", "blog");
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
        date: Date;
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

export async function stringifyPostData() {
  return JSON.stringify(getSortedPostsData());
}