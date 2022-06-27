import styled from "styled-components";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLink, SocialLinkSize } from "./socialLinkIcon";
import CtaMobile from "./ctaMobile";
import JuiceboxHeaderMobile from "./navbarMobile";

const LandingWrapper = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height}px`,
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

const LandingBodyWrapper = styled.div`
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

const LandingSocialIconCollectionWrapper = styled.div``;

type LandingProps = {
  windowHeight: number;
  socialLinkList: SocialLink[];
};

const LandingMobile = ({
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

export default LandingMobile;
