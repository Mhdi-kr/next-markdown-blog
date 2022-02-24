import Link from "next/link";
import { IPostPage } from "../pages/blog/[slug]";

export default function Post({ post } : {post: IPostPage}) {
    return (
        <>
            <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg text-gray-100 cursor-pointer font-semibold">
                    {post.frontmatter.title}
                </h3>
            </Link>
            <small className="text-sm text-gray-400">
                {new Date(Date.parse(post.frontmatter.date)).toDateString()}
            </small>
            <p className="text-base text-gray-300 mb-4 mt-2">
                {post.frontmatter.excerpt}
            </p>
            <hr className="border-gray-500 mb-4" />
        </>
    );
}
