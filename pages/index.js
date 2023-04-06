import Head from 'next/head';

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
            <div className="container">
                <div className="output">100</div>

                <div className="operations">
                    <button className="operation operation-add">+</button>
                    <button className="operation operation-subtract">-</button>
                    <button className="operation operation-multiply">x</button>
                    <button className="operation operation-divide">/</button>
                </div>

                <div>
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                    <button className="number number-clear">c</button>
                    <button className="number">0</button>
                    <button className="number">=</button>
                </div>
            </div>
        </>
    );
}
