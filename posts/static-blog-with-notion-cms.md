---
title: "maintaining my statically generated tech blog"
date: "2022/03/14"
excerpt: "How I manage to maintain this blog using Notion, Next.js and Github Pages"
tags: "Frontend"
---

I always wanted to have a personal blog, [but never actually put the time to get it done](/blog/developers-productivty-and-procrastination). Creating meaningful blog posts is not an easy task, might as well have systems or tools that can be used to help us do it easier and faster.

I tried a lot of ways and flavors of blogging. Wordpress was heavyweight and clunky, Medium or other micro-blogging services did not just feel _right_ to me. Naturally as a web developer, I wanted to have something of my own.

This website was built upon the Next.js React framework. The repository containes React components for styling and layout and markdown files for the blog posts and actual content.

The `getStaticProps` function is called by Next.js when the page is first loaded. It is then used to fetch the markdown content using `fs` and inject it as props into the components.

```javascript
// reading *.md files and converting them to usable state
export async function getStaticProps() {
    const posts = fs
        .readdirSync(path.join("posts"))
        .map((file) => fs.readFileSync(path.join("posts", file), "utf-8"));
    return {
        props: {
            posts,
        },
    };
}
```

We can now facilitate Next.js SSG (static site generation) to render and export the blog posts
as static HTML files.

```Bash
$ next export
```

Now we have all possible routes and contents statically available to us in the `/out` directory.

Let's publish the generated files to Github Pages. I use the `gh-pages` CLI utility to publish the static HTML files to a specific branch.

Github automatically detects push-events to this branch and then deploys my newly created HTML and assets files to the web!

With Utterance Github app you can have fully functional comment section in your posts! It uses Github issues under the hood and I could easily integrated this with React.

## All in one go

You can aggergate all of the above into one command, or even register it as a NPM command to run every time you want to publish your blog.

```Bash
$ yarn build && yarn export && touch out/.nojekyll && gh-pages -t -d out
```
