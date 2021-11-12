import { Component, createRef } from "react";

export default class Comments extends Component {
  private box: React.RefObject<HTMLDivElement>;

  constructor(props: {} | any) {
    super(props);
    this.box = createRef();
  }

  componentDidMount(): void {
    let element: HTMLScriptElement = document.createElement("script");
    element.setAttribute("src", "https://giscus.app/client.js");
    element.setAttribute("crossorigin", "anonymous");
    element.setAttribute("async", "true");
    element.setAttribute("data-repo", "irvanmalik48/blog");
    element.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzMjQ5MTA0MTE=");
    element.setAttribute("data-category", "Comments");
    element.setAttribute("data-category-id", "DIC_kwDOE129S84B_1u5");
    element.setAttribute("data-mapping", "pathname");
    element.setAttribute("data-reactions-enabled", "0");
    element.setAttribute("data-emit-metadata", "0");
    element.setAttribute("data-lang", "en");
    element.setAttribute("data-theme", "transparent_dark");
    this.box?.current?.appendChild(element);
  }

  render(): JSX.Element {
    return <div ref={this.box}></div>;
  }
}
