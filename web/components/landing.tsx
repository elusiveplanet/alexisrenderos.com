import styled from "styled-components";
import { JuiceboxHeader } from "./navbar";
import { CTA } from "./cta";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const LandingBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -55%);
  height: max-content;
  margin: auto;
  width: 100%;
  min-height: 600px;
`;

export const LandingSocialIconCollectionWrapper = styled.div`
  margin-right: 5em;
`;

export type LandingProps = {
  socialLinkList: SocialLink[];
};

export const Landing = ({
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => (
  <LandingWrapper>
    <JuiceboxHeader title="Alexis Renderos" />
    <LandingBodyWrapper>
      <LandingSocialIconCollectionWrapper>
        {!!socialLinkData && (
          <SocialLinkCollection
            socialLinkList={socialLinkData}
            direction={SocialLinkCollectionDirection.Column}
            size={SocialLinkSize.Medium}
          />
        )}
      </LandingSocialIconCollectionWrapper>
      <CTA />
    </LandingBodyWrapper>
  </LandingWrapper>
);
