import { NextApiRequest, NextApiResponse } from "next";
import { getSortedPostsData } from "./data";

type Data = {
  results: string[];
};

const blogPosts = getSortedPostsData();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const results = req.query.q
    ? blogPosts.filter((post) =>
        post.title.toLowerCase().includes(req.query.q.toString())
      )
    : blogPosts;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
