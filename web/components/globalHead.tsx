import Head from "next/head";

import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const GlobalHead = () => {
  useEffect(() => {
    hotjar.initialize(3058994, 6);
  }, []);

  return (
    <Head>
      <title>Alexis Renderos 🪐</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="preload"
        href="/fonts/gt-walsheim-bold-oblique-trial.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/gt-walsheim-bold-trial.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />{" "}
      <link
        rel="preload"
        href="/fonts/gt-walsheim-regular-trial.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alexisrenderos.com" />
      <meta property="og:title" content="Alexis Renderos" />
      <meta
        property="og:description"
        content="I enable others to do their best work."
      />
      <meta
        property="og:image"
        content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alexis Renderos" />
      <meta
        name="twitter:description"
        content="I enable others to do their best work."
      />
      <meta
        name="twitter:image"
        content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
      />
      <meta name="twitter:creator" content="@elusiveplanet" />
    </Head>
  );
};

export default GlobalHead;
