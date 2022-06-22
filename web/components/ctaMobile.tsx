import styled from "styled-components";
import Image from "next/image";
import {
  Black,
  FullyTransparent,
  LightText,
  SaffronToNectarGradient,
} from "../utils/colors";

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 0.5em 0;
  flex-direction: column;
`;

export const CTATitleWrapper = styled.div``;

export const CTAHeading = styled.h1`
  background: ${SaffronToNectarGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.1em 0;
  font-size: 2.75em;
  text-align: left;
  font-weight: 700;
  font-style: italic;
  line-height: 1em;
  letter-spacing: 0.015em;
  max-width: 600px;
`;

export const CTASubtext = styled.h2`
  max-width: 400px;
  padding-bottom: 0.5em;
  color: ${LightText};
  font-size: 1.25em;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.015em;
`;

export const CTALink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  padding: 0.1em 0.15em;
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

export const CTALinkWrapper = styled.button`
  width: min-content;
`;

export const CTALinkTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
`;

const CTANextButtonRight = styled.div`
  height: 1.4em;
  width: 1.4em;
  padding: 0 0.1em 0 0.45em;
`;

const smoothScroll = () => {
  const element = document.getElementById("learn-about-me-mobile");
  setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth" });
  }, 500);
};

export const CtaMobile = (): JSX.Element => (
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
    <CTALinkWrapper onClick={smoothScroll}>
      <CTALink>
        <CTALinkTitle>Learn how I do it.</CTALinkTitle>
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
    </CTALinkWrapper>
  </CTAWrapper>
);
