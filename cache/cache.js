const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts", "blog");

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

function stringifyPostData() {
    return `export const cachedPosts = ${JSON.stringify(getSortedPostsData())}`;
}

function createBlogCache(filename) {
  fs.writeFile(`./cache/${filename}.ts`, stringifyPostData(), function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Blog cache file written");
  });
}

createBlogCache("blog");
