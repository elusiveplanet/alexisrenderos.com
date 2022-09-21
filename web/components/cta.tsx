import styled from "styled-components";
import { AccentGradientFill, LightText } from "../utils/colors";
import CtaButton from "./ctaButton";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // if on desktop
    min-width: 1000px;
    min-height: 380px;
  }
`;

const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 0.5em 0;
  flex-direction: column;

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // if on desktop
    margin: 2.5em 0 0.5em;
    flex-direction: row;
  }
`;

const CTATitleWrapper = styled.div`
  min-width: 1010px;
`;

const CTAHeading = styled.h1`
  background: ${AccentGradientFill};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 6em;
  text-align: left;
  font-weight: 700;
  font-style: italic;
  line-height: 1em;
  letter-spacing: 0.015em;

  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    // if on tablet or phone
    font-size: 5.5em;
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    // if on phone
    font-size: min(max(2em, 12vw), 5em);
    padding: 0.1em 0;
    max-width: 600px;
  }
`;

const CTASubtextWrapper = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 150px) 0 0);
`;

const CTASubtext = styled.h2`
  width: fit-content;
  height: fit-content;
  padding: 1em 0 0.5em 0;
  color: ${LightText};
  font-size: 2em;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // if on desktop
    width: 475px;
    height: 150px;
    padding: 1em 0 0.25em 0.25em;
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    // if on phone
    max-width: 400px;
    padding: 0 0 0.5em 0;
    font-size: min(max(1em, 6vw), 2em);
  }
`;

type CTAProps = {
  width: number;
};

const CTA = ({ width }: CTAProps): JSX.Element => (
  <CTAWrapper>
    {width >= MIN_DESKTOP_WIDTH ? (
      <CTAInfoWrapper>
        <CTATitleWrapper>
          <CTASubtextWrapper>
            <CTASubtext>
              I’m Alexis, a San Francisco based software engineer focused on
              front end web development and accessibility.
            </CTASubtext>
          </CTASubtextWrapper>
          <CTAHeading>
            I enable others <br />
            to do their best work.
          </CTAHeading>
        </CTATitleWrapper>
      </CTAInfoWrapper>
    ) : (
      <CTAInfoWrapper>
        <CTASubtext>
          I’m Alexis, a San Francisco
          <br /> based software engineer.
        </CTASubtext>
        <CTAHeading>
          I enable others
          <br /> to do their
          <br /> best work.
        </CTAHeading>
      </CTAInfoWrapper>
    )}

    {width >= MIN_TABLET_WIDTH ? (
      <CtaButton text="Learn how I do it" target="/about" arrow />
    ) : (
      <CtaButton text="Learn how I do it" target="/about" mobile arrow />
    )}
  </CTAWrapper>
);

export default CTA;
