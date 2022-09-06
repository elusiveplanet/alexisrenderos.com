import styled from "styled-components";
import { AccentGradientFill, LightText } from "../utils/colors";
import CtaButton from "./ctaButton";

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  min-height: 380px;
`;

const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 2.5em 0 0.5em;
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
`;

const CTASubtextWrapper = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 150px) 0 0);
`;

const CTASubtext = styled.h2`
  width: 475px;
  height: 150px;
  padding: 1em 0 0.25em 0.25em;
  color: ${LightText};
  font-size: 2em;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

const CTA = (): JSX.Element => (
  <CTAWrapper>
    <CTAInfoWrapper>
      <CTATitleWrapper>
        <CTASubtextWrapper>
          <CTASubtext>
            I’m Alexis, a San Francisco based software engineer focused on front
            end web development and accessibility.
          </CTASubtext>
        </CTASubtextWrapper>
        <CTAHeading>
          I enable others <br />
          to do their best work.
        </CTAHeading>
      </CTATitleWrapper>
    </CTAInfoWrapper>
    <CtaButton text="Learn how I do it" target="/about" arrow />
  </CTAWrapper>
);

export default CTA;
