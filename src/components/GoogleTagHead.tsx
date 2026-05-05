import Script from "next/script";

const GA_ID = "G-6SXV2PBPYD";

/** `lazyOnload` defers analytics until after the main thread is idle — lower TBT than `afterInteractive`. */
export default function GoogleTagHead() {
  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
