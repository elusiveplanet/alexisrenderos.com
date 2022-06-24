import styled from "styled-components";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import { CtaMobile } from "./ctaMobile";
import { JuiceboxHeaderMobile } from "./navbarMobile";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  height: calc(var(--vh) * 100);
  min-height: 600px;
  width: 100%;
`;

export const LandingBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 150px;
  margin: auto;
  height: max-content;
  width: fit-content;
  min-height: 500px;
`;

export const LandingSocialIconCollectionWrapper = styled.div``;

export type LandingProps = {
  socialLinkList: SocialLink[];
};

export const LandingMobile = ({
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => {
  function calculateVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // Initial calculation
  calculateVh();

  // Re-calculate on resize
  window.addEventListener("resize", calculateVh);

  // Re-calculate on device orientation change
  window.addEventListener("orientationchange", calculateVh);
  return (
    <LandingWrapper>
      <JuiceboxHeaderMobile title="Alexis Renderos" />
      <LandingBodyWrapper>
        <CtaMobile />
        <LandingSocialIconCollectionWrapper>
          {!!socialLinkData && (
            <SocialLinkCollection
              socialLinkList={socialLinkData}
              direction={SocialLinkCollectionDirection.Row}
              size={SocialLinkSize.Small}
            />
          )}
        </LandingSocialIconCollectionWrapper>
      </LandingBodyWrapper>
    </LandingWrapper>
  );
};
