import Link from "next/link";
import { IPostPage } from "../pages/blog/[slug]";

export default function Post({ post }: { post: IPostPage }) {
    return (
        <>
            <div className="flex flex-col items-start">
                <Link href={`/blog/${post.slug}`}>
                    <button className="mb-2">
                        <h3>{post.frontmatter.title}</h3>
                    </button>
                </Link>
                <small className="text-gray-400">
                    {new Date(Date.parse(post.frontmatter.date))
                        .toDateString()
                        .substring(3)}{" "}
                    - {post.timeToRead}
                </small>
                <p>{post.frontmatter.excerpt}</p>
            </div>
            <hr className="border-gray-300 mt-4" />
        </>
    );
}
