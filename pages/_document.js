import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                <Script dangerouslySetInnerHTML={{
                    __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9292423173741305",
            enable_page_level_ads: true
            });
            `,
                }} />
            </Head>

            <body className='bg-gray-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}