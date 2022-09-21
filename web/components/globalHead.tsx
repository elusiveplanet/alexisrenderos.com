import Head from "next/head";

const GlobalHead = () => (
  <Head>
    <title>Alexis Renderos 🪐</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="author" content="John Doe" />
    <meta
      name="description"
      content="Alexis Renderos is a San Francisco based software engineer focused on front end web development and accessibility."
    />
    <meta name="keywords" content="Alexis Renderos, Software Engineer" />
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
    />
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
      content="I’m Alexis, a San Francisco based software engineer focused on front end web development and accessibility."
    />
    <meta
      property="og:image"
      content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Alexis Renderos" />
    <meta
      name="twitter:description"
      content="I’m Alexis, a San Francisco based software engineer focused on front end web development and accessibility."
    />
    <meta
      name="twitter:image"
      content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
    />
    <meta name="twitter:creator" content="@elusiveplanet" />
  </Head>
);

export default GlobalHead;
