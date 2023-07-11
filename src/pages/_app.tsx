import { ReactNode, useEffect } from "react";
import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Script from "next/script";

import { getItem, setItem } from "@services/storage";

import "@styles/index.css";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const theme = getItem("theme");

    if (!theme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setItem("theme", "dark");
      return;
    }

    document.documentElement.classList.add(theme ?? "dark");
    document.documentElement.classList.remove(
      theme ?? "dark" === "dark" ? "light" : "dark"
    );
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
