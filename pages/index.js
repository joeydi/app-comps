import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>American Plating Power Website Comps</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <img src="homepage-v12.png" width="3840" height="11080" alt="" />
            </main>
        </>
    );
}
