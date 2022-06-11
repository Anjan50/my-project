
import '../styles/globals.css'
import Script from 'next/script'
import Layout from '../components/Layout'



function MyApp({ Component, pageProps }) {

  return <>

    <Layout>


      <Component {...pageProps} />

      <Script
        id="Adsense-id"
        async={true}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9292423173741305"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />

    </Layout>

  </>
}

export default MyApp
