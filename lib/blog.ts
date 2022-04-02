import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import rehypePrism from "rehype-prism-plus";

type PostData = {
  title: string;
  date: string;
  desc: string;
  tag: string[];
  id: any;
  contentHtml: string;
};

interface Post {
  title: string;
  date: string;
  desc: string;
  tag: string[];
}

export function getPostsDirectory(path: string): string {
  const postsDirectory: string = join(process.cwd(), "posts", path);
  return postsDirectory;
}

export function getSortedPostsData(path: string): any[] {
  const postsDirectory = getPostsDirectory(path);
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Post),
    };
  });
  return sortPostData(allPostsData);
}

export function sortPostData(allPostsData: any[]): any[] {
  return allPostsData.sort((a: any, b: any) => {
    return a["date"] < b["date"] ? 1 : -1;
  });
}

export function getAllPostIds(path: string): { params: { id: string } }[] {
  const postsDirectory = getPostsDirectory(path);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(path: string, id: any): Promise<PostData> {
  const postsDirectory = getPostsDirectory(path);
  const fullPath: string = join(postsDirectory, `${id}.md`);
  const fileContents: string = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeToc, {
      nav: false,
      cssClasses: {
        link: "link-info",
      },
    })
    .use(rehypeRaw)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as Post),
  };
}
