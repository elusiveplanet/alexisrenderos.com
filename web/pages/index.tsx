import styled from "styled-components";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../styles/styles";
import AboutMe from "../components/aboutMe";
import { LandingMobile } from "../components/landingMobile";
import { Landing } from "../components/landing";
import AboutMeMobile from "../components/aboutMeMobile";
import { LandingTablet } from "../components/landingTablet";
import { AboutMeTablet } from "../components/aboutMeTablet";
import GlobalHead from "../components/globalHead";

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

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const Home = (): JSX.Element => {
  const [width, setWidth] = useState(0);
  const [initialInnerHeight, setInitialInnerHeight] = useState(0);
  const [initialOuterHeight, setInitialOuterHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  const MIN_DESKTOP_WIDTH = 1280;
  const MIN_TABLET_WIDTH = 768;

  const getInitialPageHeight = () => {
    // If we haven't captured the initial window size + browser chrome yet,
    // let's grab it and store it in state to create a reasonable assumption
    // of what the "full bleed" height should be for the landing.
    // Inner and outer sometimes are different depending on mobile browser
    setInitialInnerHeight((prev) => window.innerHeight);
    setInitialOuterHeight((prev) => window.outerHeight);
  };

  const handleWindowChange = () => {
    setInnerHeight((prev) => window.innerHeight);
    setOuterHeight((prev) => window.outerHeight);
    setWidth((prev) => window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available

    // Run only once on page mount.
    getInitialPageHeight();

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
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  const temp = 1;

  return (
    <>
      <GlobalStyle />
      <GlobalHead />
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
            windowHeight={initialInnerHeight}
            socialLinkList={socialLinkData}
          />
          <AboutMeMobile windowHeight={initialInnerHeight} />
        </IndexBodyMobile>
      )}
    </>
  );
};

export default Home;
