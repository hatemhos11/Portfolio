import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import '../styles/style.scss'
import 'keen-slider/keen-slider.min.css'

import Layout from '../layout/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleStart = (url:string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url:string) => {
      timeout = setTimeout(() => {        
        setLoading(false)
      }, 1400);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);


    return () => {clearTimeout(timeout)}
  }, [router]);

  return(
    <>
  <Head>
    <link rel="icon" href="/logo.png" />
  </Head>

  <Layout loading={loading}>
      <Component {...pageProps} />
  </Layout>
  </>
  )
}
