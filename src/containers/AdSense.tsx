import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    const pushAd = () => {
      try {
        /** @ts-ignore */
        const adsbygoogle = window.adsbygoogle;
        // console.log({ adsbygoogle })
        adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      /** @ts-ignore */
      if (window.adsbygoogle) {
        pushAd();
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4238608226493388"
      data-ad-slot="3545458418"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
