import '@/styles/globals.css';

import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${mono.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
