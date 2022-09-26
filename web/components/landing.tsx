import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import CTA from "./cta";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

const LandingWrapper = styled.div.attrs<{
  mobile: boolean;
}>(({ mobile }) => ({
  style: {
    height: mobile ? "100%" : "100vh",
  },
}))<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  min-height: 800px;
  width: 100%;

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-bottom: 0.5px;
    min-width: 1200px;
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    min-height: 600px;
  }
`;

const LandingBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  height: max-content;
  width: fit-content;

  padding-bottom: 10%;
  min-height: 500px;

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    width: 100%;
    padding-bottom: 1em;
    flex-direction: row;
    align-items: center;
    min-height: 600px;
  }
`;

const LandingSocialIconCollectionWrapper = styled.div`
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    margin-left: 1em;
    margin-right: 4em;
    min-width: 68px;
  }
`;

type LandingProps = {
  mobile: boolean;
  socialLinkList: SocialLink[];
};

const Landing = ({
  mobile,
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => {
  const [width, setWidth] = useState(0);

  const getPageWidth = () => {
    setWidth((prev) => window.innerWidth);
    console.log([window.innerWidth, window.outerWidth]);
    // setWidth((prev) => document.documentElement.clientWidth);
    // console.log(document.documentElement.clientWidth);
  };

  useEffect(() => {
    // component is mounted and window is available

    // Run only once on page mount.
    getPageWidth();

    // Re-calculate on resize
    window.addEventListener("resize", getPageWidth);

    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", getPageWidth);

    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener("resize", getPageWidth);
      window.removeEventListener("orientationchange", getPageWidth);
    };
  }, []);

  return (
    <LandingWrapper mobile={mobile}>
      <LandingBodyWrapper>
        {width < MIN_DESKTOP_WIDTH && <CTA width={width} />}
        <LandingSocialIconCollectionWrapper>
          {!!socialLinkData && (
            <SocialLinkCollection
              socialLinkList={socialLinkData}
              direction={
                width >= MIN_DESKTOP_WIDTH
                  ? SocialLinkCollectionDirection.Column
                  : SocialLinkCollectionDirection.Row
              }
              size={
                width >= MIN_TABLET_WIDTH
                  ? SocialLinkSize.Medium
                  : SocialLinkSize.Small
              }
            />
          )}
        </LandingSocialIconCollectionWrapper>
        {width >= MIN_DESKTOP_WIDTH && <CTA width={width} />}
      </LandingBodyWrapper>
    </LandingWrapper>
  );
};

export default Landing;
