import { cachedPosts } from "../../misc/blog";
import { NextApiRequest, NextApiResponse } from "next";
import Fuse from "fuse.js";
import { json } from "stream/consumers";

const blogPosts = cachedPosts;

function checker(query: string) {
  query = decodeURIComponent(query).toLowerCase();

  let options = {
    shouldSort: true,
    threshold: 1,
    location: 0,
    fieldNormWeight: 0,
    minMatchCharLength: 1,
    keys: ["id", "title", "date", "desc", "tag"],
  };

  const fuse = new Fuse(cachedPosts, options);

  if (query == "") {
    return undefined;
  } else {
    let res = fuse.search(query);
    return res;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const results = req.query.q ? checker(req.query.q.toString()) : blogPosts;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
