import styled from "styled-components";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import JuiceboxHeader from "../components/navbar";
import ViewportHeightContainer from "../components/viewportHeightContainer";
import fetcher from "../helpers/fetcher";
import isMobile from "../helpers/isMobile";
import SectionHeader from "../components/sectionHeader";
import CtaButton from "../components/ctaButton";
import GlobalFooter from "../components/footer";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const ResumeBody = styled.div.attrs<{
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
  min-height: 600px;
  width: 100%;

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    min-height: 800px;
  }

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    min-height: 1200px;
  }
`;

export const Resume = (): JSX.Element => {
  const [isOnMobile, setIsOnMobile] = useState(false);
  useEffect(() => {
    // component is mounted and window is available
    // Run only once on page mount.
    setIsOnMobile((prev) => isMobile(window));
  }, []);
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  return (
    <>
      <JuiceboxHeader title="Alexis Renderos" />
      {isOnMobile ? (
        <ViewportHeightContainer>
          <ResumeBody mobile={isOnMobile}>
            <SectionHeader title="Download my resume below." />
            <CtaButton
              text="Download Now"
              target="/documents/AlexisRenderosResume.pdf"
              arrow
            />
          </ResumeBody>
        </ViewportHeightContainer>
      ) : (
        <ResumeBody mobile={isOnMobile}>
          <SectionHeader title="Download my resume below." />
          <CtaButton
            text="Download Now"
            target="/documents/AlexisRenderosResume.pdf"
            arrow
          />
        </ResumeBody>
      )}

      <GlobalFooter />
    </>
  );
};

export default Resume;
