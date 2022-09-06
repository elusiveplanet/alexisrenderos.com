import styled from "styled-components";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import CTA from "./cta";

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  min-height: 800px;
  height: 100vh;
  width: 100%;
  min-width: 1280px;
`;

const LandingBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: max-content;
  margin: auto;
  width: 100%;
  min-height: 600px;
  padding-bottom: 1em;
`;

const LandingSocialIconCollectionWrapper = styled.div`
  margin-left: 1em;
  margin-right: 4em;
  min-width: 68px;
`;

type LandingProps = {
  socialLinkList: SocialLink[];
};

const Landing = ({
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => (
  <LandingWrapper>
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

export default Landing;
