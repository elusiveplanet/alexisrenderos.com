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
  padding: 0.1em 0;
  font-size: min(max(2em, 12vw), 5em);
  text-align: left;
  font-weight: 700;
  font-style: italic;
  line-height: 1em;
  letter-spacing: 0.015em;
  max-width: 600px;
`;

const CTASubtext = styled.h2`
  max-width: 400px;
  padding-bottom: 0.5em;
  color: ${LightText};
  font-size: min(max(1em, 6vw), 2em);
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

const CtaMobile = (): JSX.Element => (
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
      target="learn-about-me-mobile"
      anchor
      mobile
      arrow
    />
  </CTAWrapper>
);

export default CtaMobile;
