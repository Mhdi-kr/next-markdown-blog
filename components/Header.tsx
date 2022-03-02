import Link from "next/link";
export default function Header() {
    return (
        //  style="background-color:#393E46;"
        <header className="mb-8 bg-dark-blog">
            <div className="container flex items-center justify-between py-8 mx-auto lg:px-48">
                <Link href="/">
                    <span className="text-3xl font-lobster cursor-pointer text-secondary-blog">
                        Mehdi&apos;s Engineering Blog
                    </span>
                </Link>
                <Link href="/about">
                    <span className="text-gray-500 cursor-pointer hover:text-gray-200 transition-colors">
                        about author
                    </span>
                </Link>
            </div>
        </header>
    );
}
