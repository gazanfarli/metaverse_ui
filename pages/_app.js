import Head from 'next/head';

import '../styles/globals.css';

const myApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metversus</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default myApp;
