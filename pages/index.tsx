import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

import Post from "../components/Post";
import { parseAllPosts } from "../utils";
import { IPost } from "../interfaces/IPost";

export default function Home({ posts }: { posts: IPost[] }) {
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

export const getStaticProps = async () => ({
    props: {
        posts : parseAllPosts('posts'),
    },
})
