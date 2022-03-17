import fs from "fs";
import path from "path";
import markdownit from "markdown-it";
import Link from "next/link";
import Prism from "prismjs";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-bash";

import { Utterance } from "../../components/Utterance";
import { parseAllPosts } from "../../utils";
import { IPost } from "../../interfaces/IPost";

export default function PostPage({ posts, post }: { posts: IPost[], post: IPost}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <Head>
                <title>{post.frontmatter.title}</title>
            </Head>
            <article>
                <div className="mt-8">
                    <h2 className="capitalize">{post.frontmatter.title}</h2>
                    <time className="text-neutral-400 block mt-2 text-sm">
                        Posted on {post.frontmatter.date}
                    </time>
                </div>
                <div
                    className="subpixel-antialiased mt-8 tracking-normal"
                    dangerouslySetInnerHTML={{
                        __html: markdownit().render(post.content),
                    }}
                />
                <hr className="mt-8" />
                <button className="mt-4">
                    <Link passHref={true} href="/">
                        <div className="text-gray-400">
                            <span className="mr-4">&#8592;</span>
                            <span>Back to the main page</span>
                        </div>
                    </Link>
                </button>
                <Utterance className="mt-2" />
            </article>
        </>
    );
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("posts"));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const { slug } = context.params as IParams;
    const posts = parseAllPosts('posts')
    const post = posts.find(post => post.slug === slug)
    return {
        props: {
            posts,
            post
        },
    };
};
