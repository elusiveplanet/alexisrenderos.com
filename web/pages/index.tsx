import styled from "styled-components";
import Head from "next/head";
import useSWR from "swr";
import { GlobalStyle } from "../styles/styles";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";
import AboutMe from "../components/aboutMe";
import { LandingMobile } from "../components/landingMobile";
import { Landing } from "../components/landing";
import AboutMeMobile from "../components/aboutMeMobile";
import { LandingTablet } from "../components/landingTablet";
import { AboutMeTablet } from "../components/aboutMeTablet";
import { useEffect, useState } from "react";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const IndexBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const IndexBodyTablet = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const IndexBodyMobile = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const IndexTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 0.5em auto;
  text-align: center;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 15px 15px 2px 0 ${HalfShadow};
  width: fit-content;
`;

export const IndexSubtitle = styled.div`
  margin: 0 auto;
  text-align: center;
  h3,
  h5 {
    margin: 0.25em 0;
  }
`;

const HeroContent = styled.div`
  width: 65%;
  margin: 0 auto;
  max-width: 500px;
`;

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

export const Home = (): JSX.Element => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const MIN_DESKTOP_WIDTH = 1280;
  const MIN_TABLET_WIDTH = 768;

  const handleWindowChange = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowChange();

    // Re-calculate on resize
    window.addEventListener("resize", handleWindowChange);

    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", handleWindowChange);

    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowChange);
      window.removeEventListener("orientationchange", handleWindowChange);
    };
  }, []);

  const { data: workExperienceData, error: workExperienceDataError } = useSWR(
    "/api/getAllVisibleWorkExperience",
    fetcher
  );
  const { data: projectData, error: projectDataError } = useSWR(
    "/api/getAllVisibleProjects",
    fetcher
  );
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  const temp = 1;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Alexis Renderos 🪐</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      {width > MIN_DESKTOP_WIDTH && (
        <IndexBody>
          <Landing socialLinkList={socialLinkData} />
          <AboutMe />
        </IndexBody>
      )}
      {width < MIN_DESKTOP_WIDTH && width > MIN_TABLET_WIDTH && (
        <IndexBodyTablet>
          <LandingTablet socialLinkList={socialLinkData} />
          <AboutMeTablet />
        </IndexBodyTablet>
      )}
      {width < MIN_TABLET_WIDTH && (
        <IndexBodyMobile>
          <LandingMobile
            windowHeight={height}
            socialLinkList={socialLinkData}
          />
          <AboutMeMobile />
        </IndexBodyMobile>
      )}
    </>
  );
};

export default Home;
