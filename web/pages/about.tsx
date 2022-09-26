import styled from "styled-components";
import useSWR from "swr";
import { useEffect, useState } from "react";
import JuiceboxHeader from "../components/navbar";
import SectionDivider from "../components/sectionDivider";
import StoryCardCollection from "../components/storyCardCollection";
import SectionHeader from "../components/sectionHeader";
import { AccentText, LightText } from "../utils/colors";
import GlobalFooter from "../components/footer";
import AnimatedLink from "../components/animatedLink";
import fetcher from "../helpers/fetcher";
import { MIN_TABLET_WIDTH } from "../utils/utils";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const StoryTextWrapper = styled.div`
  margin: 5em auto;
  width: 80%;
  max-width: 850px;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    width: auto;
    margin: 5em 1.75em 5em 1.25em;
  }
`;

const StoryHeadline = styled.h2`
  font-size: min(max(1.75em, 4.75vw), 3em);
  font-weight: 700;
  margin: 0.33em auto;
  text-align: center;
  color: ${AccentText};
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    text-align: left;
  }
`;

const StoryBodyOne = styled.p`
  font-size: min(max(1.15em, 4.5vw), 1.85em);
  font-weight: 400;
  margin: 0.33em auto;
  text-align: center;
  color: ${LightText};
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    text-align: left;
  }
`;

const StoryBodyTwo = styled.p`
  font-size: min(max(1.05em, 4vw), 1.5em);
  font-weight: 400;
  line-height: 135%;
  margin: 0.33em auto;
  text-align: center;
  color: ${LightText};
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    text-align: left;
  }
`;

export const About = (): JSX.Element => {
  const { data: storyEntryData, error: storyEntryDataError } = useSWR(
    "/api/getAllVisiblePersonalStoryEntries",
    fetcher
  );

  const [width, setWidth] = useState(0);

  const getPageWidth = () => {
    setWidth((prev) => window.innerWidth);
    console.log([window.innerWidth, window.outerWidth]);
    // setWidth((prev) => document.documentElement.clientWidth);
    // console.log(document.documentElement.clientWidth);
  };

  useEffect(() => {
    // component is mounted and window is available

    // Run only once on page mount.
    getPageWidth();

    // Re-calculate on resize
    window.addEventListener("resize", getPageWidth);

    // Re-calculate on device orientation change
    window.addEventListener("orientationchange", getPageWidth);

    // unsubscribe from the event on component unmount
    return () => {
      window.removeEventListener("resize", getPageWidth);
      window.removeEventListener("orientationchange", getPageWidth);
    };
  }, []);

  return (
    <>
      <JuiceboxHeader title="Alexis Renderos" altColor />
      <AboutBody>
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
        <StoryCardCollection
          storyList={storyEntryData}
          compact={width < MIN_TABLET_WIDTH}
        />
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
            <AnimatedLink href="/contact" passHref>
              get in touch
            </AnimatedLink>
            .
          </StoryBodyTwo>
        </StoryTextWrapper>
      </AboutBody>
      <GlobalFooter />
    </>
  );
};

export default About;
