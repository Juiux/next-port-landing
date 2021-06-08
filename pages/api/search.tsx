import { getSortedPostsData } from "../../api";

const posts =
  process.env.NODE_ENV === "production"
    ? require("../../public/cache/data").posts
    : getSortedPostsData();

export default (
  req: { query: { q: string } },
  res: {
    statusCode: number;
    setHeader: (arg0: string, arg1: string) => void;
    end: (arg0: string) => void;
  }
) => {
  const results = req.query.q
    ? posts.filter((post: any) =>
        post.title.toLowerCase().includes(req.query.q)
      )
    : [];
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ results }));
};
