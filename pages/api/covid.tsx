import Redis from "ioredis";

let redis = new Redis(process.env.REDIS_URL);

export default async (
  req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): any; new(): any; }; }; }
) => {
  let cache: any = await redis.get("cache");
  cache = JSON.parse(cache);
  let result: any = {};
  if (cache) {
    console.log("loading from cache");
    result.data = cache;
    result.type = "redis";
    return res.status(200).json(result);
  } else {
    console.log("loading from api");
    return fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((r) => r.json())
      .then((data) => {
        data.sort(function (
          a: { country: string },
          b: { country: string }
        ) {
          return b.country > a.country ? -1 : 1;
        });
        result.data = data;
        result.type = "api";
        redis.set("cache", JSON.stringify(result.data), "EX", 60);
        return res.status(200).json(result);
      });
  }
};
