const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
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
  return JSON.stringify(allPostsData);
}

const fileContents = `export const posts = ${getPosts()}`;
try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}
fs.writeFile("cache/data.tsx", fileContents, function (err) {
  if (err) return console.log(err);
  console.log("post cached.");
});
