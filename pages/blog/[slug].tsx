import fs from "fs";
import path from "path";
import matter from "gray-matter";
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

export interface IPostPage {
    frontmatter: {
        title: string;
        date: string;
        cover_image: string;
        excerpt: string;
    };
    tags: string[];
    slug: string;
    content: string;
    timeToRead: string;
}

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}: IPostPage) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <div className="mt-8">
                    <h2 className="capitalize">{title}</h2>
                    <time className="text-neutral-400 block mt-2 text-sm">
                        Posted on {date}
                    </time>
                </div>
                <div
                    className="subpixel-antialiased mt-8 tracking-normal"
                    dangerouslySetInnerHTML={{
                        __html: markdownit().render(content),
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
    const markdownWithMeta = fs.readFileSync(
        path.join("posts", slug + ".md"),
        "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
};
