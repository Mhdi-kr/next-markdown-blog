import Link from "next/link";

export default function Header() {
    return (
        <footer className="bg-dark-blog text-center p-2">
            <span className="text-white">2019 - {new Date().getFullYear()}</span>
        </footer>
    );
}
