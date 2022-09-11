import styled from "styled-components";
import useSWR from "swr";
import { useEffect, useState } from "react";
import AboutMeTablet from "../components/aboutMeTablet";
import AboutMeMobile from "../components/aboutMeMobile";
import Landing from "../components/landing";
import LandingTablet from "../components/landingTablet";
import LandingMobile from "../components/landingMobile";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";
import JuiceboxHeader from "../components/navbar";

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

const IndexBodyTablet = styled(IndexBody)``;

const IndexBodyMobile = styled(IndexBody)``;

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

  const getInitialPageHeight = () => {
    // If we haven't captured the initial window size + browser chrome yet,
    // let's grab it and store it in state to create a reasonable assumption
    // of what the "full bleed" height should be for the landing.
    // Inner and outer sometimes are different depending on mobile browser

    // On Instagram and Facebook's in-app browsers, the page loads in a way
    // that causes the inner window dimensions to be significantly larger than the
    // outer, something that should *never* be the case. To fix this, we check if
    // this error in reported window size exists (inner>outer), if so, we rely on the outer to populate
    if (window.innerHeight > window.outerHeight) {
      setInitialInnerHeight((prev) => window.outerHeight);
    } else {
      setInitialInnerHeight((prev) => window.innerHeight);
    }
    setInitialOuterHeight((prev) => window.outerHeight);
  };

  const getPageWidth = () => {
    // Similar bug as described in getInitialPageHeight, same fix.
    if (window.innerWidth > window.outerWidth) {
      setWidth((prev) => window.outerWidth);
    } else {
      setWidth((prev) => window.innerWidth);
    }
  };

  const handleWindowChange = () => {
    setInnerHeight((prev) => window.innerHeight);
    setOuterHeight((prev) => window.outerHeight);
    getPageWidth();
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
      {width >= MIN_DESKTOP_WIDTH && (
        <IndexBody>
          <JuiceboxHeader title="Alexis Renderos" absolute />
          <Landing socialLinkList={socialLinkData} />
        </IndexBody>
      )}
      {width < MIN_DESKTOP_WIDTH && width >= MIN_TABLET_WIDTH && (
        <IndexBodyTablet>
          <LandingTablet socialLinkList={socialLinkData} />
          <AboutMeTablet />
        </IndexBodyTablet>
      )}
      {width < MIN_TABLET_WIDTH && width !== 0 && (
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
