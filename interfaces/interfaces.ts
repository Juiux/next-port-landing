export interface Post {
  title: string;
  date: string;
  desc: string;
  tag: string[];
}

export interface SearchProps {
  onFocusHandler: (status: boolean) => void;
}
