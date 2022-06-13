import { useEffect } from 'react';



export function GoogleAd() {


    const loadAds = () => {
        try {
            if (typeof window !== "undefined") {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.log("adsense error", error.message);
        }
    };

    useEffect(() => {
        loadAds();
    }, []);


    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-9292423173741305"
            data-ad-slot="7151005124"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
}