import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Head>
                <title>calculator</title>
                <meta name="description" content="calculator" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}
