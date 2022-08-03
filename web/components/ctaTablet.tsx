import styled from "styled-components";
import { LightText, SaffronToNectarGradient } from "../utils/colors";
import CtaButton from "./ctaButton";

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 0.5em 0;
  flex-direction: column;
`;

const CTAHeading = styled.h1`
  background: ${SaffronToNectarGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 6em;
  text-align: left;
  font-weight: 700;
  font-style: italic;
  line-height: 1em;
  letter-spacing: 0.015em;
`;

const CTASubtext = styled.h2`
  width: 475px;
  height: fit-content;
  padding: 1em 0 0.5em 0;
  color: ${LightText};
  font-size: 2em;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

const CtaTablet = (): JSX.Element => (
  <CTAWrapper>
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
    <CtaButton
      text="Learn how I do it"
      target="learn-about-me-tablet"
      anchor
      arrow
    />
  </CTAWrapper>
);

export default CtaTablet;
