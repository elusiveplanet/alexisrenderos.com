import styled from "styled-components";
import Image from "next/image";
import {
  Black,
  FullyTransparent,
  LightText,
  SaffronToNectarGradient,
} from "../utils/colors";

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CTAInfoWrapper = styled.div`
  display: flex;
  margin: 0.5em 0;
  flex-direction: column;
`;

const CTATitleWrapper = styled.div``;

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

const CTASubtextWrapper = styled.div`
  float: right;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 150px) 0 0);
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

const CTALink = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  margin: 0.5em 0;
  padding: 0.1em 0.25em;
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

const CTALinkWrapper = styled.button`
  width: min-content;
`;

const CTALinkTitle = styled.h3`
  font-size: 2.75em;
  font-weight: 700;
`;

const CTANextButtonRight = styled.div`
  height: 2.25em;
  width: 2.25em;
  padding: 0 0.1em 0 0.5em;
`;

const smoothScroll = () => {
  const element = document.getElementById("learn-about-me-tablet");
  setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth" });
  }, 500);
};

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
    <CTALinkWrapper onClick={smoothScroll}>
      <CTALink>
        <CTALinkTitle>Learn how I do it.</CTALinkTitle>
        <CTANextButtonRight>
          <Image
            src="/images/next-button-right.webp"
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

export default CtaTablet;
