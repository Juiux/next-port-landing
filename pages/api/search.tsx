import { getSortedPostsData } from "../../api";

const posts = getSortedPostsData();

const take = (
  req: { query: { q: any } },
  res: {
    statusCode: number;
    setHeader: (arg0: string, arg1: string) => void;
    end: (arg0: string) => void;
  }
) => {
  const results = req.query.q
    ? posts.filter((
        post: {
          title: string,
          date: any,
          tag: string,
        }) => {
          post.title?.toLowerCase().includes(req.query.q);
          post.tag?.toLowerCase().includes(req.query.q);
        }
      )
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};

export default take;