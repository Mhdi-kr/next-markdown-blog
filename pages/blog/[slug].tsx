import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as marked from "marked";
import Link from "next/link";

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    return (
        <>
            <div className="container mx-auto lg:px-16 px-4 py-8 font-lato">
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
                            __html: marked.parse(content),
                        }}
                    ></div>
                </div>
                <Link href="/">
                    <a className="btn btn-back">Go Back</a>
                </Link>
            </div>
        </>
    );
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({ params: { slug } }) {
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
}
