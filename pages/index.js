import { useState } from 'react';
import Head from 'next/head';

import Operations from './components/Operations';
import Numbers from './components/Numbers';

export default function Home() {
    const [output, setOutput] = useState('');

    return (
        <>
            <Head>
                <title>calculator</title>
                <meta name="description" content="calculator" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="container">
                <div className="output">{output}</div>

                <Operations output={output} setOutput={setOutput} />

                <Numbers setOutput={setOutput} />
            </div>
        </>
    );
}
