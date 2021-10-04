export default function Thumbnail(props: {
  title: string | undefined;
  date: string | Date | undefined;
  tags: any | string[] | undefined;
}): JSX.Element {
  let processtags = "";
  processtags +=
    props.tags == undefined
      ? ""
      : props.tags?.map((values: string) => {
          return `${values},`;
        });

  const title = `title=${props.title}&`;
  const name = `name=Irvan%20Malik%20Azantha&`;
  const email = `email=%69%72%76%61%6E%6D%61%6C%69%6B%34%38%40%67%6D%61%69%6C%2E%63%6F%6D&`;
  const date = props.date == undefined ? "" : `date=${props.date}&`;
  const color = `color=66CCCC&`;
  const tags = props.tags == undefined ? "" : `tags=${processtags}&`;

  const all = `https://api.irvanma.live/api/index?${title}${name}${email}${date}${color}${tags}`;

  return (
    <>
      <meta property="og:image" content={all} />
      <meta name="twitter:image" content={all} />
    </>
  );
}
