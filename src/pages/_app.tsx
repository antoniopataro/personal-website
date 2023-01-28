import Script from "next/script";

import type { AppProps } from "next/app";

import "@styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  const GA_MEASUREMENT_ID = "G-PDGLNB31S1";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}
