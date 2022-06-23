import styled from "styled-components";
import Link from "next/link";
import {
  AccentText,
  DarkText,
  FullyTransparent,
  LightText,
  NeutralOffWhite,
  SaffronToNectarGradient,
} from "../utils/colors";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 800px;
  width: 100%;
  max-width: 1400px;
`;

const MissionWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 25%;
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
  height: 6em;
  width: 100%;
  background: ${NeutralOffWhite};
`;

const SectionHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  font-style: italic;
  margin: 0 auto;
  text-align: center;
  color: ${DarkText};
  width: 90%;
  max-width: 500px;
`;

const SectionSubheadingOne = styled.h3`
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
  color: ${AccentText};
  width: 90%;
  max-width: 500px;
`;

const SectionSubheadingTwo = styled.h4`
  font-size: 1em;
  font-weight: 500;
  line-height: 125%;
  margin: 1em auto;
  text-align: center;
  color: ${LightText};
  width: 85%;
  max-width: 500px;
`;

const SectionStripe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.25em;
  background: ${SaffronToNectarGradient};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const SectionImage = styled.div`
  height: 8em;
  width: 8em;
  margin: 0 auto;
  transform: skewY(10deg);
  background: url("/images/AlexisHeadshot.png");
  background-size: cover;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

const Notice = styled.div`
  margin-top: 2.5em;
  h4 {
    font-size: 1em;
    font-weight: 500;
    line-height: 125%;
    margin: 0.75em auto;
    text-align: center;
    color: ${LightText};
    width: 80%;
    max-width: 500px;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  h6 {
    font-size: 0.75em;
    font-weight: 300;
    margin: 1.5em auto;
    text-align: center;
    color: ${LightText};
    width: 100%;
    max-width: 500px;
  }
`;

export const AboutMeMobile = (): JSX.Element => (
  <SectionWrapper>
    <div id="learn-about-me-mobile" />
    <SectionHeaderWrapper>
      <SectionHeader>
        My mission is to make the world more accessible for all.
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
      I take pride in developing thoughtful products that help people around the
      world focus on what’s most important to them.
    </SectionSubheadingTwo>
    <Notice>
      <SectionSubheadingOne>
        I&apos;m currently rebuilding my personal website.
      </SectionSubheadingOne>
      <h4>
        Designs for the website rebuild are public on{" "}
        <Link
          href="https://www.figma.com/file/2zSroQb71YqrjcLDHLGiEh/Final-Website-Mock?node-id=548%3A483"
          passHref>
          Figma
        </Link>
        . The code is public on{" "}
        <Link href="https://github.com/renderos17/alexisrenderos.com" passHref>
          GitHub
        </Link>
        .
      </h4>
      <h4>
        If you&apos;d like to learn more about what I&apos;ve been up to, check
        out my{" "}
        <Link
          href="https://renderos17.github.io/AlexisRenderosResume.pdf"
          passHref>
          Resume
        </Link>
        .
      </h4>
    </Notice>
    <Footer>
      <h6>Made with 💌 in San Francisco, CA</h6>
    </Footer>
  </SectionWrapper>
);

export default AboutMeMobile;
