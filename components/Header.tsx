import Link from "next/link";
import GithubIcon from "./Icons/GithubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
export default function Header() {
    return (
        //  style="background-color:#393E46;"
        <header className="mb-8 bg-dark-blog">
            <div className="container flex items-center justify-between py-8 mx-auto p-4 lg:px-32">
                <Link passHref={true} href="/">
                    <span className="text-3xl font-lobster cursor-pointer text-secondary-blog">
                        Mehdi&apos;s Engineering Blog
                    </span>
                </Link>
                <a
                    href="https://www.github.com/mhdi-kr"
                    referrerPolicy="no-referrer"
                >
                    <GithubIcon />
                </a>
            </div>
        </header>
    );
}
