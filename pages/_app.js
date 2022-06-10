import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {

  return <>
    <Navbar />

    <Component {...pageProps} />

    <Script
      id="Adsense-id"
      async="true"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9292423173741305"
      crossorigin="anonymous"
      strategy="beforeInteractive"
    />
    <Footer />
  </>
}

export default MyApp
