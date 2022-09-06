import styled from "styled-components";
import Image from "next/image";
import {
  FullyTransparent,
  NeutralOffWhite,
  SaffronToNectarGradient,
} from "../utils/colors";
import { MAX_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
  height: 100vh;
  width: 100%;
  max-width: 3500px;
`;

const MissionWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 16px;
  min-height: 280px;
`;

const MissionBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(200%);
  transform: skewY(-7deg);
  background: linear-gradient(
    180deg,
    ${NeutralOffWhite} calc(50% - 1px),
    ${FullyTransparent} calc(50%)
  );
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    transform: skewY(-10deg);
  }
  @media (min-width: ${MAX_DESKTOP_WIDTH}px) {
    transform: skewY(-4deg);
  }
`;

const SectionStripe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  background: ${SaffronToNectarGradient};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const SectionImageWrapper = styled.div`
  height: 12em;
  width: 12em;
  margin: 0 auto;
  transform: skewY(7deg);
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    transform: skewY(10deg);
  }
  @media (min-width: ${MAX_DESKTOP_WIDTH}px) {
    transform: skewY(4deg);
  }
`;

const SectionImage = styled(Image)`
  border-radius: 10px;
`;

const AboutMe = (): JSX.Element => (
  <SectionWrapper>
    <MissionWrapper>
      <MissionBackground>
        <SectionStripe>
          <SectionImageWrapper>
            <SectionImage
              src="/images/AlexisHeadshot.webp"
              layout="responsive"
              width={40}
              height={40}
              alt="Alexis is featured in a portrait taken during sunset at a waterfront."
            />
          </SectionImageWrapper>
        </SectionStripe>
      </MissionBackground>
    </MissionWrapper>
  </SectionWrapper>
);

export default AboutMe;
