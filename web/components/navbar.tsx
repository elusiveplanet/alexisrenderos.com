import styled from "styled-components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AccentText,
  AlternateBackgroundColor,
  DarkText,
  DarkTextAlternate,
  FullyTransparent,
  HalfShadow,
  LightText,
  PrimaryBackgroundColor,
  SaffronYellow,
  ThreeQuarterShadow,
} from "../utils/colors";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";
import BurgerMenu from "./burgerMenu";

type JuiceboxHeaderProps = {
  title: string;
  absolute?: boolean;
  altColor?: boolean;
};

type JuiceboxOptionProps = {
  title: string;
  path: string;
  altColor?: boolean;
};

type JuiceboxHeaderOptionsChildrenProps = {
  altColor?: boolean;
};

const JuiceboxHeaderTitle = styled.a.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0.5em;
  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 12px 12px 1px 0
    ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
  width: fit-content;
  transition: box-shadow 500ms ease-out;
  :where(:hover, :focus-visible) {
    box-shadow: 10px 10px 1px 0
      ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    // on mobile
    font-size: min(max(1.5em, 6vw), 2.5em);
    margin: 0.5em 0.75em;
    border-width: 0.175em 0.3em 0.175em 0.3em;
    box-shadow: 8px 10px 1px 0
      ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
    :where(:hover, :focus-visible) {
      box-shadow: 7px 9px 1px 0
        ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
    }
  }
`;

const JuiceboxHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 2.5em;
  width: 100%;
  max-width: 1500px;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    // on tablet or mobile
    margin: 0.5em;
    max-width: 1400px;
  }
`;

const JuiceboxTitleWrapper = styled(Link)`
  align-items: flex-start;
  width: 100%;
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // on desktop
    margin: 1.5em 0;
  }
`;

const JuiceboxOptionsWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto 2.5em;
  width: max-content;
  @media (max-width: ${MIN_DESKTOP_WIDTH}px) {
    // on tablet or mobile
    margin: auto 0 auto 2.5em;
    padding-top: 0.5em;
  }
`;

const StyledJuiceboxHeader = styled.header.attrs<{
  absolute?: boolean;
}>((props) => ({
  absolute: props.absolute || false,
}))<{ absolute?: boolean }>`
  position: ${(props) => (props.absolute ? "absolute" : "static")};
  z-index: 100;
  width: 100%;
`;

const StyledJuiceboxHeaderWrapper = styled.header.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${(props) =>
    props.altColor ? AlternateBackgroundColor : PrimaryBackgroundColor};
`;

const JuiceboxOptionText = styled.a``;

const JuiceboxOptionWrapper = styled.li.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  margin: 0.5em 0 0 3.25em;
  list-style-type: ">";
  ::marker {
    font-size: 1.8em;
    font-weight: 500;
    color: ${FullyTransparent};
    transition: color 250ms;
  }
  a {
    font-size: 1.75em;
    font-weight: 500;
    margin: 0 0 0 0.2em;
    text-align: right;
    color: ${(props) => (props.altColor ? DarkTextAlternate : LightText)};
    width: max-content;
    transition: color 250ms;
  }
  :where(:hover, :focus-visible) {
    ::marker {
      color: ${(props) => (props.altColor ? DarkTextAlternate : AccentText)};
    }
    filter: brightness(95%);
  }
`;

const JuiceboxOptionLinkWrapper = styled(Link)``;

const JuiceboxOption = ({
  title,
  path,
  altColor = false,
}: JuiceboxOptionProps) => (
  <JuiceboxOptionWrapper altColor={altColor}>
    <JuiceboxOptionLinkWrapper href={path} passHref>
      <JuiceboxOptionText>{title}</JuiceboxOptionText>
    </JuiceboxOptionLinkWrapper>
  </JuiceboxOptionWrapper>
);

const JuiceboxHeaderOptionsChildren = ({
  altColor = false,
}: JuiceboxHeaderOptionsChildrenProps): JSX.Element => (
  <>
    <JuiceboxOption title="About" path="/about" altColor={altColor} />
    <JuiceboxOption title="Contact" path="/contact" altColor={altColor} />
    <JuiceboxOption title="Resume" path="/resume" altColor={altColor} />
  </>
);

const JuiceboxHeader = ({
  title,
  absolute,
  altColor = false,
}: JuiceboxHeaderProps) => {
  const [width, setWidth] = useState(0);

  const getPageWidth = () => {
    if (window.innerWidth > window.outerWidth) {
      setWidth((prev) => window.outerWidth);
    } else {
      setWidth((prev) => window.innerWidth);
    }
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
    <StyledJuiceboxHeader absolute={absolute}>
      <StyledJuiceboxHeaderWrapper altColor={altColor}>
        <JuiceboxHeaderWrapper>
          <JuiceboxTitleWrapper href="/" passHref>
            <JuiceboxHeaderTitle altColor={altColor}>
              {title}
            </JuiceboxHeaderTitle>
          </JuiceboxTitleWrapper>
          <JuiceboxOptionsWrapper>
            {width >= MIN_DESKTOP_WIDTH ? (
              <JuiceboxHeaderOptionsChildren altColor={altColor} />
            ) : (
              <BurgerMenu altColor={altColor}>
                <JuiceboxHeaderOptionsChildren altColor={altColor} />
              </BurgerMenu>
            )}
          </JuiceboxOptionsWrapper>
        </JuiceboxHeaderWrapper>
      </StyledJuiceboxHeaderWrapper>
    </StyledJuiceboxHeader>
  );
};

export default JuiceboxHeader;
