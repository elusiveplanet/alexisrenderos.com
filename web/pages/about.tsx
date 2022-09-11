import styled from "styled-components";
import useSWR from "swr";
import { useEffect, useState } from "react";
import JuiceboxHeader from "../components/navbar";
import SectionDivider from "../components/sectionDivider";
import StoryCardCollection from "../components/storyCardCollection";
import SectionHeader from "../components/sectionHeader";
import {
  AccentText,
  Black,
  FullyTransparent,
  LightText,
  SaffronToNectarGradient,
} from "../utils/colors";
import Link from "next/link";
import GlobalFooter from "../components/footer";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const BodyTablet = styled(Body)``;

const BodyMobile = styled(Body)``;

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const About = (): JSX.Element => {
  const [width, setWidth] = useState(0);
  const [initialInnerHeight, setInitialInnerHeight] = useState(0);
  const [initialOuterHeight, setInitialOuterHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  const getInitialPageHeight = () => {
    // If we haven't captured the initial window size + browser chrome yet,
    // let's grab it and store it in state to create a reasonable assumption
    // of what the "full bleed" height should be for the landing.
    // Inner and outer sometimes are different depending on mobile browser

    // On Instagram and Facebook's in-app browsers, the page loads in a way
    // that causes the inner window dimensions to be significantly larger than the
    // outer, something that should *never* be the case. To fix this, we check if
    // this error in reported window size exists (inner>outer), if so, we rely on the outer to populate
    if (window.innerHeight > window.outerHeight) {
      setInitialInnerHeight((prev) => window.outerHeight);
    } else {
      setInitialInnerHeight((prev) => window.innerHeight);
    }
    setInitialOuterHeight((prev) => window.outerHeight);
  };

  const getPageWidth = () => {
    // Similar bug as described in getInitialPageHeight, same fix.
    if (window.innerWidth > window.outerWidth) {
      setWidth((prev) => window.outerWidth);
    } else {
      setWidth((prev) => window.innerWidth);
    }
  };

  const handleWindowChange = () => {
    setInnerHeight((prev) => window.innerHeight);
    setOuterHeight((prev) => window.outerHeight);
    getPageWidth();
  };

  useEffect(() => {
    // component is mounted and window is available

    // Run only once on page mount.
    getInitialPageHeight();

    handleWindowChange();

    // Re-calculate on resize
    window.addEventListener("resize", handleWindowChange);

    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", handleWindowChange);

    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowChange);
      window.removeEventListener("orientationchange", handleWindowChange);
    };
  }, []);
  const { data: storyEntryData, error: storyEntryDataError } = useSWR(
    "/api/getAllVisiblePersonalStoryEntries",
    fetcher
  );

  const { data: workExperienceData, error: workExperienceDataError } = useSWR(
    "/api/getAllVisibleWorkExperience",
    fetcher
  );

  const { data: projectData, error: projectDataError } = useSWR(
    "/api/getAllVisibleProjects",
    fetcher
  );

  const DividerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 800px;
    height: 100vh;
    width: 100%;
    max-width: 3500px;
  `;

  const StoryTextWrapper = styled.div`
    margin: 5em auto;
    width: 80%;
    max-width: 850px;

    a {
      outline: none;
      text-decoration: underline;
      text-decoration-color: ${AccentText};
      color: ${AccentText};
      background: ${SaffronToNectarGradient} no-repeat right bottom / 0
        var(--bg-h);
      transition: background-size 350ms ease-in-out, color 500ms ease-in-out,
        text-decoration-color 500ms ease-in-out;
      --bg-h: 100%;
    }
    a:where(:hover, :focus-visible) {
      color: ${Black};
      text-decoration-color: ${FullyTransparent};
      background-size: 100% var(--bg-h);
      background-position-x: left;
    }
  `;

  const StoryHeadline = styled.h2`
    font-size: min(max(1.3em, 4.75vw), 3em);
    font-weight: 700;
    margin: 0.33em auto;
    text-align: center;
    color: ${AccentText};
  `;

  const StoryBodyOne = styled.p`
    font-size: min(max(1.3em, 4.5vw), 1.85em);
    font-weight: 400;
    margin: 0.33em auto;
    text-align: center;
    color: ${LightText};
  `;

  const StoryBodyTwo = styled.p`
    font-size: min(max(1em, 4vw), 1.5em);
    font-weight: 400;
    line-height: 125%;
    margin: 0.33em auto;
    text-align: center;
    color: ${LightText};
  `;

  return (
    <Body>
      <JuiceboxHeader title="Alexis Renderos" altColor />
      <SectionHeader
        title="What matters most to me is enabling others to do more."
        altColor
      />
      <SectionDivider
        image={{
          imagePath: "/images/AlexisHeadshot.webp",
          imageAltText: "Alexis",
        }}
      />
      <StoryCardCollection storyList={storyEntryData} />
      <StoryTextWrapper>
        <StoryBodyOne>
          From these early experiences, I realized something important.
        </StoryBodyOne>
        <StoryHeadline>I love bringing out the best in people.</StoryHeadline>
        <StoryBodyTwo>
          The most fulfilling parts of my life have been spent investing in
          others.
        </StoryBodyTwo>
        <br />
        <StoryBodyTwo>
          I love working on products and with teams built on this principle—if
          this resonates with you, I’d love to{" "}
          <Link href="/contact" passHref>
            get in touch
          </Link>
          .
        </StoryBodyTwo>
      </StoryTextWrapper>

      {/*<WorkExperienceTimeline workExperienceList={workExperienceData} />*/}
      {/*<ProjectCardCollection projectList={projectData} />*/}

      <GlobalFooter />
    </Body>
  );
};

export default About;
