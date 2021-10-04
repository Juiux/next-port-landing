export function Thumbnail(
  titleP: string | undefined,
  dateP: string | Date | undefined,
  tagsP: any | string[] | undefined
): string {
  let processedTags = "";
  processedTags +=
    tagsP == undefined
      ? ""
      : tagsP?.map((values: string) => {
          if (values != "") return `tags=${values}&`;
        });

  const cleanedTags = processedTags.replaceAll(",", "");

  const title = `title=${titleP}&`;
  const name = `name=Irvan%20Malik%20Azantha&`;
  const email = `email=%69%72%76%61%6E%6D%61%6C%69%6B%34%38%40%67%6D%61%69%6C%2E%63%6F%6D&`;
  const date = dateP == undefined ? "" : `date=${dateP}&`;
  const color = `color=66CCCC&`;
  const tags = tagsP == undefined ? "" : `${cleanedTags}`;

  const all = `https://api.irvanma.live/api/index?${title}${name}${email}${date}${color}${tags}`;

  return all;
}
