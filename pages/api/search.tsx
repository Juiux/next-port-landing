import { getSortedPostsData, makeCacheManifest } from "../../api";

let posts: any[];
try {
  makeCacheManifest();
  posts = require("../../cache/data");
} catch (e) {
  posts = getSortedPostsData();
}

export default (
  req: { query: { q: any } },
  res: {
    statusCode: number;
    setHeader: (arg0: string, arg1: string) => void;
    end: (arg0: string) => void;
  }
) => {
  const results = req.query.q
    ? posts.filter((post: { title: string }) =>
        post.title.toLowerCase().includes(req.query.q)
      )
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
