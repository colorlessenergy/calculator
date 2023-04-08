import { useState } from 'react';
import Head from 'next/head';

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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="output">{output}</div>

                <div className="operations">
                    <button className="operation operation-add">+</button>
                    <button className="operation operation-subtract">-</button>
                    <button className="operation operation-multiply">x</button>
                    <button className="operation operation-divide">/</button>
                </div>

                <Numbers setOutput={setOutput} />
            </div>
        </>
    );
}
