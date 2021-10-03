import { Component, createRef } from "react";

export default class Comments extends Component {
  private box: React.RefObject<HTMLDivElement>;

  constructor(props: {} | any) {
    super(props);
    this.box = createRef();
  }

  componentDidMount() {
    let element: HTMLScriptElement = document.createElement("script");
    element.setAttribute("src", "https://utteranc.es/client.js");
    element.setAttribute("crossorigin", "anonymous");
    element.setAttribute("async", "true");
    element.setAttribute("repo", "irvanmalik48/blog");
    element.setAttribute("label", "Comments");
    element.setAttribute("issue-term", "pathname");
    element.setAttribute("theme", "photon-dark");
    this.box?.current?.appendChild(element);
  }

  render(): JSX.Element {
    return <div ref={this.box}></div>;
  }
}
