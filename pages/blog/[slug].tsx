import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";
import Link from "next/link";
import Prism from "prismjs";
import {
    GetStaticProps,
    GetStaticPropsContext,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

export interface IPostPage {
    frontmatter: {
        title: string;
        date: string;
        cover_image: string;
        excerpt: string;
    };
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
            <div className="mb-4 pt-8">
                <h2 className="lg:text-2xl text-base mb-2">{title}</h2>
                <div className="text-neutral-400 text-xs lg:text-base">
                    Posted on {date}
                </div>
            </div>
            <div className="post-body">
                <div
                    className="subpixel-antialiased lg:text-lg text-sm tracking-normal"
                    dangerouslySetInnerHTML={{
                        __html: markdownit().render(content),
                    }}
                ></div>
            </div>
            <div className="flex justify-end">
                <button className="my-8">
                    <Link href="/">
                        <a href="">
                            <p className="text-gray-400 text-right">Go back</p>
                        </a>
                    </Link>
                </button>
            </div>
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
