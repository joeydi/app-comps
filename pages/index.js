import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>RGS Website Comps</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <img src="homepage-v7.png" width="3840" height="9700" alt="" />
            </main>
        </>
    );
}