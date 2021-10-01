import { NextApiRequest, NextApiResponse } from "next";
import { cachedPosts } from "../../cache/blog";

type Data = {
  results: string[];
};

const blogPosts = cachedPosts;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const results = req.query.q
    ? blogPosts.filter((post: any) =>
        post.title.toLowerCase().includes(req.query.q.toString())
      )
    : blogPosts;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
