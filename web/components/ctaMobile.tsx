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

const CTALink = styled.a`
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

const CTALinkWrapper = styled.button`
  width: min-content;
`;

const CTALinkTitle = styled.h3`
  font-size: min(max(1.25em, 6vw), 2.5em);
  font-weight: 700;
`;

const CTANextButtonRight = styled.div`
  height: min(max(1.15em, calc(6vw - 0.1em)), 2.4em);
  width: min(max(1.15em, calc(6vw - 0.1em)), 2.4em);
  padding: 0 0.1em 0 0.45em;
`;

const smoothScroll = () => {
  const element = document.getElementById("learn-about-me-mobile");
  setTimeout(() => {
    element.scrollIntoView({ behavior: "smooth" });
  }, 500);
};

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

export default CtaMobile;
