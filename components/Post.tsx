import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="flex flex-col">
            <img src={post.frontmatter.cover_image} />
            <div className="flex flex-col">
                <h3 className="font-bold mr-2">{post.frontmatter.title}</h3>
                <span>{post.frontmatter.date}</span>
            </div>
            <span>{post.frontmatter.excerpt}</span>
            <Link href={`/blog/${post.slug}`}>
                <a className="btn">Read More</a>
            </Link>
        </div>
    );
}
