import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"/>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
