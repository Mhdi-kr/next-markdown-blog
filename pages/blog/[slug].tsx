import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";
import Link from "next/link";
import {
    GetStaticPathsContext,
    GetStaticProps,
    GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";

export interface IPostPage {
    frontmatter: {
        title: string;
        date: string;
        cover_image: string;
        excerpt: string;
    };
    slug: string;
    content: string;
}

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}: IPostPage) {
    return (
        <>
            <div className="mb-4">
                <h1 className="lg:text-2xl text-base mb-2">{title}</h1>
                <div className="text-neutral-400 text-xs lg:text-base">
                    Posted on {date}
                </div>
            </div>
            <img src={cover_image} alt="" />
            <div className="post-body">
                <div
                    className="subpixel-antialiased lg:text-lg text-sm tracking-normal"
                    dangerouslySetInnerHTML={{
                        __html: markdownit().render(content),
                    }}
                ></div>
            </div>
            <Link href="/">
                <a href="">
                    <div className="mb-8">
                        <p className="text-gray-400 text-right">Go back</p>
                    </div>
                </a>
            </Link>
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
