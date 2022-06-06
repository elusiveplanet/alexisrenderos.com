import styled from "styled-components";
import Image from "next/image";
import {
  Black,
  FullyTransparent,
  LightText,
  SaffronYellow,
} from "../utils/colors";

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 0.5em 0;
`;

export const CTATitleWrapper = styled.div``;

export const CTAHeading = styled.h1`
  color: ${SaffronYellow};
  font-size: 6em;
  text-align: left;
  font-weight: 700;
  font-style: italic;
  line-height: 1em;
  letter-spacing: 0.015em;
`;

export const CTASubtextWrapper = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 150px) 0 0);
`;

export const CTASubtext = styled.h2`
  width: 475px;
  height: 150px;
  padding: 1em 0 0.25em 0.5em;
  color: ${LightText};
  font-size: 2em;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

export const CTALink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  margin: 0.5em 0;
  padding: 0.1em 0.25em;
  font-size: 1.5em;
  font-weight: 700;
  color: ${LightText};
  text-decoration-color: ${LightText};
  img {
    transition: filter 500ms ease-in-out;
  }
  &:where(:hover, :focus-visible) {
    color: ${Black};
    text-decoration-color: ${FullyTransparent};
    img {
      filter: brightness(0%);
    }
  }
`;

const CTANextButtonRight = styled.div`
  height: 1.5em;
  width: 1.5em;
  padding: 0 0.1em 0 0.5em;
`;

export const CTA = (): JSX.Element => (
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
    <CTALink href="#work-experience">
      <h3>Learn how I do it.</h3>
      <CTANextButtonRight>
        <Image
          src="/images/next-button-right.png"
          layout="responsive"
          width={40}
          height={40}
          alt="Icon of an arrow pointing right"
        />
      </CTANextButtonRight>
    </CTALink>
  </CTAWrapper>
);
