---
title: "How to Use Utterances on Next.js"
date: 22-05-2021
desc: "The correct way of implementing Utterances on Next.js."
tag: "javascript"
---

# Abstract

I have always wanted to have a fully functional blog with comments. There was once upon a time when I still used Blogspot (which sucks actually) and then after _many years of unimaginable lazyness_ I finally make it out with GitHub and Jekyll. After some while, I'm quite bored on how Jekyll handles stuffs and decided to move into a Javascript framework (and just work on it lmao). Timeskip, I want to implement comments and quite confused on what stuffs I should pick that _just works_. Peeps hand me stuffs like Sanity.io but it's kinda meh and too complicated for my use case. I just want a comment section that _just works_. After some (actually, it took me 2 relentless days) time searching for anything that fits the criteria, I found Utterances. Utterances uses GitHub Issues to store comments for the blog I have, which is neat, but I'm not gonna look at the comments section frequently anyway so this one actually _just works_.

# Implementation

## Normal way

So the normal way involves you in coming to [their website](https://utteranc.es), clicking this and that, and putting the script tag it generated into the page you want. Well, this is the code snippet if you're a lazy person just to even click the hyperlink:
```js
<script src="https://utteranc.es/client.js"
        repo="username/repo-name"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```
The way Utterances work is by injecting an iframe to your site through that script tag. This way works in Next.js? No, it won't lmao. But don't worry, there's a way.

## Next.js way (and probably other React frameworks)

So in React land (or so may I call it that way because I have no other fancy names to sell for), you need to reference a div tag for the script tag to actually inject its iframe. For that, I created a new Typescript file (I use Typescript for my blog) named `comments.tsx` inside the layouts folder of my blog. Here's how I configured the file:
```ts
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
```
So the explanation here is that this class creates a reference for how the Utterances script is injected. And yeah, that's it.  
After that, I need to put this component in my post layout which is easy. The only thing I have to do is to import the component class and use it somewhere inside the layout. So here's my post layout file:
```ts
import DefaultLayout from "./default";
import Head from "next/head";
import Comments from "./comments"; /* Import it */

export default function PostLayout(props: any) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article className="container mt-3" style={{ marginBottom: "100px" }}>
        <section className="m-0 text-center pt-5 pb-5">
          <div className="container">
            <p className="display-4 mb-0">{props.title}</p>
            <p className="lead mb-0 text-muted">{props.date}</p>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <h1>Comments</h1>
        <Comments /> /* This is where I put it */
      </article>
    </DefaultLayout>
  );
}
```
As you can see, I put mine just below the main post content. By the way, feel free to check [this blog repository](https://github.com/irvanmalik48/blog) if you want.

# Wrapping Up

Okay so that's all about Utterances in Next.js (and Typescript). Thanks for your time on reading this post. And as always, keep it... ok, no, I need sleep.