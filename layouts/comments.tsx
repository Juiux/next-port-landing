import React, { Component } from "react";

export default class Comments extends Component {
    commentBox: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let scriptEl: any = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "irvanmalik48/blog");
        scriptEl.setAttribute("label", "Comments")
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", "github-dark");
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div ref={this.commentBox}></div>
        );
    }
}