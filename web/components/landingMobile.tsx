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
  height: 100vh;
  min-height: 800px;
  width: 100%;
`;

export const LandingBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -60%);
  margin: auto;
  height: max-content;
  width: fit-content;
  min-height: 600px;
`;

export const LandingSocialIconCollectionWrapper = styled.div``;

export type LandingProps = {
  socialLinkList: SocialLink[];
};

export const LandingMobile = ({
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => (
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
