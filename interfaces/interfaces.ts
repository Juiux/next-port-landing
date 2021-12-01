export interface Post {
  title: string;
  date: string;
  desc: string;
  tag: string[];
}

export interface SearchProps {
  onFocusHandler: (status: boolean) => void;
}

export interface WaveAccent {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
}