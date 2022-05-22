import styled from "styled-components";
import {
  AccentText,
  DarkText,
  FullyTransparent,
  LightText,
  NectarYellow,
  NeutralOffWhite,
} from "../utils/colors";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
`;

const MissionWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 17.5em;
`;

const MissionBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(200%);
  transform: skewY(-10deg);
  background: linear-gradient(
    180deg,
    ${NeutralOffWhite} calc(50% - 1px),
    ${FullyTransparent} calc(50%)
  );
`;

const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 7.5em;
  width: 100%;
  background: ${NeutralOffWhite};
`;

const SectionHeader = styled.h2`
  font-size: 1.75em;
  font-weight: 700;
  font-style: italic;
  margin: 0 auto;
  text-align: center;
  color: ${DarkText};
  width: 65%;
  max-width: 500px;
`;

const SectionSubheadingOne = styled.h3`
  margin: 0 auto;
  text-align: center;
  color: ${AccentText};
  width: 65%;
  max-width: 500px;
`;

const SectionSubheadingTwo = styled.h4`
  font-weight: 300;
  margin: 0.5em auto;
  text-align: center;
  color: ${LightText};
  width: 65%;
  max-width: 500px;
`;

const SectionStripe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2em;
  background: ${NectarYellow};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const SectionImage = styled.div`
  height: 12em;
  width: 12em;
  margin: 0 auto;
  transform: skewY(10deg);
  background: url("/images/AlexisHeadshot.png");
  background-size: cover;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const AboutMeSectionMobile = (): JSX.Element => {
  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>
          My mission is to democratize access to technology for all.
        </SectionHeader>
      </SectionHeaderWrapper>
      <MissionWrapper>
        <MissionBackground>
          <SectionStripe>
            <SectionImage />
          </SectionStripe>
        </MissionBackground>
      </MissionWrapper>
      <SectionSubheadingOne>
        What matters most to me is what I enable for others.
      </SectionSubheadingOne>
      <SectionSubheadingTwo>
        I take pride in developing thoughtful and intuitive software that helps
        people around the world focus on what’s most important to them.
      </SectionSubheadingTwo>
    </SectionWrapper>
  );
};

export default AboutMeSectionMobile;
