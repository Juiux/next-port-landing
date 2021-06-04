import React, { Component } from "react";

export default class Comments extends Component {
  box: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.box = React.createRef();
  }

  componentDidMount() {
    let element: any = document.createElement("script");
    element.setAttribute("src", "https://utteranc.es/client.js");
    element.setAttribute("crossorigin", "anonymous");
    element.setAttribute("async", true);
    element.setAttribute("repo", "irvanmalik48/blog");
    element.setAttribute("label", "Comments");
    element.setAttribute("issue-term", "pathname");
    element.setAttribute("theme", "photon-dark");
    this.box.current.appendChild(element);
  }

  render() {
    return <div ref={this.box}></div>;
  }
}
