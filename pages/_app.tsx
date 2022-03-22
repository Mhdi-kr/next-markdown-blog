import "../styles/globals.css";
import "../styles/onedark.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Aside } from "../components/Aside";

function ApplicationRoot({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <section className="container flex flex-col md:flex-row items-start p-4 lg:px-32 mx-auto">
                <main className="w-full md:w-2/3 pb-8">
                    <Component {...pageProps} />
                </main>
                <Aside className="md:p-8 w-full md:w-1/3 text-sm sticky top-0" {...pageProps} />
            </section>
            <Footer />
        </>
    );
}

export default ApplicationRoot;
