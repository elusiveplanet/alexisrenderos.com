import Head from "next/head";

const GlobalHead = () => (
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
    
    <!-- Hotjar Tracking Code for https://alexisrenderos.com -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3058994,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    
  </Head>
);

export default GlobalHead;
