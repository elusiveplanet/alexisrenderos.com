import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
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
  min-height: 800px;
  width: 100%;
  max-width: 1400px;
`;

const MissionWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 16px;
  height: 280px;
`;

const MissionBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200vh;
  min-height: 500px;
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
  min-height: 128px;
  width: 100%;
  background: ${NeutralOffWhite};
`;

const SectionHeader = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  font-style: italic;
  margin: 0 auto;
  text-align: center;
  color: ${DarkText};
  width: 75%;
  max-width: 600px;
`;

const SectionTextWrapper = styled.div`
  margin: 1em 0;
`;

const SectionSubheadingOne = styled.h3`
  font-size: 2em;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  color: ${AccentText};
  width: 85%;
  max-width: 500px;
`;

const SectionSubheadingTwo = styled.h4`
  font-size: 1.75em;
  font-weight: 400;
  line-height: 125%;
  margin: 1em auto;
  text-align: center;
  color: ${LightText};
  width: 85%;
  max-width: 650px;
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
  transform: skewY(10deg);
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
`;

const SectionImage = styled(Image)`
  border-radius: 10px;
`;

const Notice = styled.div`
  margin-top: 2em;
  h4 {
    font-size: 1.75em;
    font-weight: 500;
    line-height: 125%;
    margin: 1em auto;
    text-align: center;
    color: ${LightText};
    width: 80%;
    max-width: 675px;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 5em;
  h6 {
    font-size: 1.15em;
    font-weight: 300;
    margin: 1.25em auto;
    text-align: center;
    color: ${LightText};
    width: 100%;
    max-width: 500px;
  }
`;

const AboutMeTablet = (): JSX.Element => (
  <SectionWrapper>
    <div id="learn-about-me-tablet" />
    <SectionHeaderWrapper>
      <SectionHeader>
        My mission is to make the world more accessible for all.
      </SectionHeader>
    </SectionHeaderWrapper>
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
    <SectionTextWrapper>
      <SectionSubheadingOne>
        What matters most to me is what I enable for others.
      </SectionSubheadingOne>
      <SectionSubheadingTwo>
        I take pride in developing thoughtful and intuitive software that helps
        people around the world focus on what’s most important to them.
      </SectionSubheadingTwo>
    </SectionTextWrapper>
    <SectionTextWrapper>
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
          .<br />
          The code is public on{" "}
          <Link
            href="https://github.com/renderos17/alexisrenderos.com"
            passHref>
            GitHub
          </Link>
          .
        </h4>
        <h4>
          If you&apos;d like to learn more about what I&apos;ve been up to,
          check out my{" "}
          <Link
            href="https://renderos17.github.io/AlexisRenderosResume.pdf"
            passHref>
            Resume
          </Link>
          .
        </h4>
      </Notice>
    </SectionTextWrapper>
    <Footer>
      <h6>Made with 💌 in San Francisco, CA</h6>
    </Footer>
  </SectionWrapper>
);

export default AboutMeTablet;
