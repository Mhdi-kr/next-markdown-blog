import Link from "next/link";
import { IPostPage } from "../pages/blog/[slug]";

export default function Post({ post }: { post: IPostPage }) {
    return (
        <>
            <article className="flex flex-col items-start">
                <Link passHref={true} href={`/blog/${post.slug}`}>
                    <h3>
                        <button>{post.frontmatter.title}</button>
                    </h3>
                </Link>
                <small className="text-gray-400 mt-1">
                    <span>
                        {new Date(Date.parse(post.frontmatter.date))
                            .toDateString()
                            .substring(3)}{" "}
                    </span>
                    <span>- </span>
                    <span>{post.timeToRead}</span>
                </small>
                <div className="mt-1">
                    {post.tags.map((tag, index) => (
                        tag.length > 0 && <small key={index} className="p-1 bg-gray-100 text-gray-500 mr-1 text-xs rounded-lg">{tag}</small>
                    ))}
                </div>
                <p>{post.frontmatter.excerpt}</p>
            </article>
            <hr className="border-gray-250 mt-4" />
        </>
    );
}
