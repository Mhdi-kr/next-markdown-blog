import Link from "next/link";
export default function Header() {
    return (
        <header className="bg-dracula-light">
            <div className="container mx-auto ` py-4">
                <h1 className="lg:text-4xl text-xl font-oleo">
                    <Link href="/">Mehdi&apos;s Engineering Blog</Link>
                </h1>
            </div>
        </header>
    );
}
