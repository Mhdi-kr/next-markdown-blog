import Link from "next/link";
import { IPostPage } from "../pages/blog/[slug]";

export default function Post({ post }: { post: IPostPage }) {
    return (
        <>
            <div className="flex flex-col items-start">
                <Link href={`/blog/${post.slug}`}>
                    <button>
                        <h3 className="text-gray-100 font-semibold">
                            {post.frontmatter.title}
                        </h3>
                    </button>
                </Link>
                <small className="text-gray-400">
                    {new Date(Date.parse(post.frontmatter.date)).toDateString()}
                </small>
                <p className="text-gray-300 mb-4 mt-2">
                    {post.frontmatter.excerpt}
                </p>
            </div>
            <hr className="border-gray-600 mb-4" />
        </>
    );
}
