export default function Thumbnail(
  titleP: string | undefined,
  dateP: string | Date | undefined,
  tagsP: string | string[] | undefined
): string {
  // check if tags are string / string[] / undefined
  let processedTags = "";
  if (tagsP == undefined) {
    processedTags = "";
  } else if (typeof tagsP === "string") {
    processedTags = `tags=${tagsP}&`;
  } else {
    processedTags += tagsP?.map((values: string): string | undefined => {
      if (values != "") return `tags=${values}&`;
    });
    processedTags = processedTags.replace(/,/g, "");
  }

  // encode special characters used in my post slug to HTML encoding UTF-8 format
  const processedTitle = titleP?.replace(/,/g, "%2C")?.replace(/ /g, "%20");

  // process it
  const title = `title=${processedTitle}&`;
  const name = `name=Irvan%20Malik%20Azantha&`;
  const email = `email=%69%72%76%61%6E%6D%61%6C%69%6B%34%38%40%67%6D%61%69%6C%2E%63%6F%6D&`;
  const date = dateP == undefined ? "" : `date=${dateP}&`;
  const color = `color=66CCCC&`;
  const tags = `${processedTags}`;

  const all = `https://api.irvanma.live/api/index?${title}${name}${email}${date}${color}${tags}`;

  return all;
}
