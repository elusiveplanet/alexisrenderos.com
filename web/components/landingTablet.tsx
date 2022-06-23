import styled from "styled-components";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import { CtaTablet } from "./ctaTablet";
import { JuiceboxHeaderTablet } from "./navbarTablet";

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
  padding-bottom: 100px;
  margin: auto;
  height: max-content;
  width: fit-content;
  min-height: 600px;
`;

export const LandingSocialIconCollectionWrapper = styled.div``;

export type LandingProps = {
  socialLinkList: SocialLink[];
};

export const LandingTablet = ({
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => (
  <LandingWrapper>
    <JuiceboxHeaderTablet title="Alexis Renderos" />
    <LandingBodyWrapper>
      <CtaTablet />
      <LandingSocialIconCollectionWrapper>
        {!!socialLinkData && (
          <SocialLinkCollection
            socialLinkList={socialLinkData}
            direction={SocialLinkCollectionDirection.Row}
            size={SocialLinkSize.Medium}
          />
        )}
      </LandingSocialIconCollectionWrapper>
    </LandingBodyWrapper>
  </LandingWrapper>
);
