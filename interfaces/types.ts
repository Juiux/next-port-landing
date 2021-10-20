export type Data = {
  results: string[];
};

export type PostData = {
  title: string;
  date: string;
  desc: string;
  tag: string[];
  id: any;
  contentHtml: string;
};

export type PostLayoutProps = {
  tag: any | string | undefined;
  description: string | undefined;
  title: string | undefined;
  date: string | undefined;
  content: any;
};

export type DefaultLayoutProps =
  | {
      tag: any | string | undefined;
      description: string | undefined;
      title: string | undefined;
      date: string | undefined;
      children: any | undefined;
    }
  | any;

export type QueryResult = {
    id: string;
    title: string;
    date: string;
    desc: string;
    tag: string[];
  };