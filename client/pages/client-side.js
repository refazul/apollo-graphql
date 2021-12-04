import Head from "next/head";
import ClientOnly from "../components/clientonly";
import Launches from "../components/launches";

export default function ClientSide() {
    return (
        <div className="">
            <Head>
                <title>Client Fetch</title>
            </Head>

            <main className="">
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <ClientOnly>
                    <Launches />
                </ClientOnly>
            </main>
        </div>
    );
}
