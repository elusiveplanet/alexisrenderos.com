import styled from "styled-components";
import { useEffect, useState } from "react";
import JuiceboxHeader from "../components/navbar";
import GlobalFooter from "../components/footer";
import {
  AlternateBackgroundColor,
  FullyTransparent,
  PrimaryBackgroundColor,
  SlightShadow,
} from "../utils/colors";
import SectionDivider from "../components/sectionDivider";
import ContactCard from "../components/contactCard";
import ContactWidget from "../components/contactWidget";
import SectionHeader from "../components/sectionHeader";
import ViewportHeightContainer from "../components/viewportHeightContainer";
import isMobile from "../helpers/isMobile";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const ContactBody = styled.div.attrs<{
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
    min-height: 800px;
  }
`;

const ContactCollection = styled.div`
  position: relative;
  z-index: 10;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${PrimaryBackgroundColor} center;
  background-size: 100vw 100vh;
  box-shadow: 8px 18px 18px 0 ${SlightShadow};
  border-radius: 16px;
  border: 5px ${SlightShadow} solid;
  transition: box-shadow 250ms ease-out;
  :where(:hover, :focus-visible) {
    box-shadow: 8px 18px 12px 0 ${SlightShadow};
  }
  gap: 2em;
  padding: 2em;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    flex-direction: row;
    gap: 2.5em;
    padding: 2.5em;
    box-shadow: 8px 18px 18px 0 ${SlightShadow};
    :where(:hover, :focus-visible) {
      box-shadow: 8px 18px 12px 0 ${SlightShadow};
    }
  }
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    gap: 5em;
    padding: 5em;
  }
`;

const ContactAndDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 85%;
  padding: 1.25em 0 2em 0;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    max-width: 85%;
  }
`;

const SectionBreakWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const SectionBreakTopBuffer = styled.div`
  background: ${AlternateBackgroundColor};
  width: 100%;
  flex-grow: 2;
`;

const SectionBreakBottomBuffer = styled.div`
  background: ${FullyTransparent};
  width: 100%;
  flex-grow: 2.5;
`;

const ContactChildren = () => (
  <>
    <SectionHeader title="Get in touch" altColor />
    <ContactAndDividerWrapper>
      <ContactCollection>
        <ContactWrapper>
          <ContactCard />
          <ContactWidget />
        </ContactWrapper>
      </ContactCollection>
      <SectionBreakWrapper>
        <SectionBreakTopBuffer />
        <SectionDivider />
        <SectionBreakBottomBuffer />
      </SectionBreakWrapper>
    </ContactAndDividerWrapper>
  </>
);

export const Contact = (): JSX.Element => {
  const [isOnMobile, setIsOnMobile] = useState(false);
  useEffect(() => {
    // component is mounted and window is available
    // Run only once on page mount.
    setIsOnMobile((prev) => isMobile(window));
  }, []);
  return (
    <>
      <JuiceboxHeader title="Alexis Renderos" altColor />
      {isOnMobile ? (
        <ViewportHeightContainer min>
          <ContactBody mobile={isOnMobile}>
            <ContactChildren />
          </ContactBody>
        </ViewportHeightContainer>
      ) : (
        <ContactBody mobile={isOnMobile}>
          <ContactChildren />
        </ContactBody>
      )}

      <GlobalFooter />
    </>
  );
};

export default Contact;
