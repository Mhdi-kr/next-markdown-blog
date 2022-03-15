import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../components/Post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPostPage } from "./blog/[slug]";

export default function Home({ posts }: { posts: IPostPage[] }) {
    return (
        <>
            <Head>
                <title>Mehdi&apos;s Engineering Blog</title>
            </Head>
            {[
                ...posts.sort(
                    (a, b) =>
                        Number(new Date(b.frontmatter.date)) -  
                        Number(new Date(a.frontmatter.date))
                ),
            ].map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("posts"));
    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");
        const markdownWithMeta = fs.readFileSync(
            path.join("posts", filename),
            "utf-8"
        );
        const { data: frontmatter } = matter(markdownWithMeta);
        
        const { text } = readingTime(markdownWithMeta);
        return {
            slug,
            frontmatter,
            tags: frontmatter.tags.split(','),
            timeToRead: text,
        };
    });
    console.log(posts.map(item => item.tags));
    return {
        props: {
            posts,
        },
    };
}
