import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../components/Post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Mahdi Karimi</title>
            </Head>
            <div className="container mx-auto lg:px-16 px-4 py-8 min-h-screen">
                {posts.map((post, index) => (
                    <div key={index} className="mb-8">
                        <Post post={post} />
                    </div>
                ))}
            </div>
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
    return {
        props: {
            posts,
        },
    };
}
