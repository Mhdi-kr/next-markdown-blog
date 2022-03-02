import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../components/Post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { IPostPage } from "./blog/[slug]";

export default function Home({ posts }: { posts: IPostPage[] }) {
    return (
        <div>
            <Head>
                <title>Mahdi Karimi</title>
            </Head>
            {posts.map((post, index) => (
                <div key={index} className="mb-8">
                    <Post post={post} />
                </div>
            ))}
        </div>
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
        return {
            slug,
            frontmatter,
        };
    });
    console.log(posts)
    return {
        props: {
            posts,
        },
    };
}
