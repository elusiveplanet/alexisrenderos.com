import styled from "styled-components";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import { CtaMobile } from "./ctaMobile";
import { JuiceboxHeaderMobile } from "./navbarMobile";

export const LandingWrapper = styled.div.attrs((props) => ({
  style: {
    height: `${props.height}px`,
  },
}))`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
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
  windowHeight: number;
  socialLinkList: SocialLink[];
};

export const LandingMobile = ({
  windowHeight,
  socialLinkList: socialLinkData,
}: LandingProps): JSX.Element => (
  <LandingWrapper height={windowHeight}>
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
