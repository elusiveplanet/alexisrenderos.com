import styled from "styled-components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

const JuiceboxTitleWrapper = styled(Link)`
  align-items: flex-start;
  width: 100%;
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // on desktop
    margin: 1.5em 0;
  }
`;

const JuiceboxHeaderTitle = styled.a.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  font-size: min(max(1.5em, 6vw), 2.25em);
  margin: 0.5em 0.65em 0.75em 0.5em;
  padding: 0.175em 0.3em 0.175em 0.3em;
  box-shadow: 8px 10px 1px 0 ${" "}
    ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
  :where(:hover, :focus-visible) {
    box-shadow: 7px 9px 1px 0 ${" "}
      ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
  }
  font-weight: 700;
  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  width: fit-content;
  transition: box-shadow 500ms ease-out;
  z-index: 100;

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet
    font-size: 2.25em;
    margin: 0.5em 0.65em 0.75em 0.75em;
    padding: 0.175em 0.3em 0.175em 0.3em;
  }
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // on desktop
    font-size: 2.5em;
    margin: 0.5em;
    padding: 0.175em 0.35em 0.175em 0.35em;
    box-shadow: 12px 12px 1px 0 ${" "}
      ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
    :where(:hover, :focus-visible) {
      box-shadow: 10px 10px 1px 0 ${" "}
        ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
    }
  }
`;

const JuiceboxHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em;
  max-width: 1400px;
  width: 100%;
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // on desktop
    margin: 0.5em 2.5em;
    max-width: 1500px;
  }
`;

const JuiceboxOptionsWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto 0;
  //padding-top: 0.75em;

  width: max-content;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet
    margin: auto 1.5em auto 0;
    padding: 0;
  }
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    // on desktop
    margin: auto 2.5em;
    padding: 0;
  }
`;

const StyledJuiceboxHeader = styled.header.attrs<{
  absolute?: boolean;
}>((props) => ({
  absolute: props.absolute || false,
}))<{ absolute?: boolean }>`
  position: ${(props) => (props.absolute ? "absolute" : "static")};
  z-index: 50;
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

const JuiceboxOptionText = styled.li``;

// Force marker is in here to create a marker on the current page
// that is hidden when the Juicebox is interacted with for the first time
// TODO: Implement force marker.
const JuiceboxOptionWrapper = styled.a.attrs<{
  altColor?: boolean;
  forceMarker?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
  forceMarker: props.forceMarker || false,
}))<{ altColor?: boolean; forceMarker?: boolean }>`
  z-index: 135;
  margin: 0;
  list-style-type: ">";

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    margin: 0 0 0 min(max(1.75em, 3.5vw), 3em);
  }
  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    margin: 0.5em 0 0 3.25em;
  }

  li {
    font-size: min(max(2em, 5.2vw), 2.5em);
    @media (min-width: ${MIN_TABLET_WIDTH}px) {
      font-size: 1.6em;
    }
    @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
      font-size: 1.75em;
    }

    font-weight: 500;
    padding: 0 0.2em;
    color: ${(props) => (props.altColor ? DarkTextAlternate : LightText)};
    width: fit-content;
    transition: color 250ms;

    ::marker {
      font-weight: 700;
      @media (min-width: ${MIN_TABLET_WIDTH}px) {
        font-weight: 500;
      }
      color: ${FullyTransparent};
      transition: color 250ms;
    }
  }
  :where(:hover, :focus-visible) {
    li {
      ::marker {
        color: ${(props) => (props.altColor ? DarkTextAlternate : AccentText)};
      }
    }
    filter: brightness(95%);
  }
`;

const JuiceboxOptionLinkWrapper = styled(Link)``;

const JuiceboxOption = ({
  title,
  path,
  altColor = false,
}: JuiceboxOptionProps) => {
  const router = useRouter();

  return (
    <JuiceboxOptionLinkWrapper href={path} passHref>
      <JuiceboxOptionWrapper
        altColor={altColor}
        onClick={() => {
          if (
            router?.pathname === path &&
            document.getElementById("hamburger-menu-button")
          ) {
            document.getElementById("hamburger-menu-button").click();
          }
        }}>
        <JuiceboxOptionText>{title}</JuiceboxOptionText>
      </JuiceboxOptionWrapper>
    </JuiceboxOptionLinkWrapper>
  );
};

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
    setWidth((prev) => window.innerWidth);
    console.log([window.innerWidth, window.outerWidth]);
    // setWidth((prev) => document.documentElement.clientWidth);
    // console.log(document.documentElement.clientWidth);
  };

  const handleOverflow = () => {
    if (document.querySelector("body").style.overflow === "hidden") {
      document.querySelector("body").style.removeProperty("overflow");
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

    handleOverflow();

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
            {width !== 0 &&
              (width >= MIN_TABLET_WIDTH ? (
                <JuiceboxHeaderOptionsChildren altColor={altColor} />
              ) : (
                <BurgerMenu altColor={altColor}>
                  <JuiceboxHeaderOptionsChildren altColor={false} />
                </BurgerMenu>
              ))}
          </JuiceboxOptionsWrapper>
        </JuiceboxHeaderWrapper>
      </StyledJuiceboxHeaderWrapper>
    </StyledJuiceboxHeader>
  );
};

export default JuiceboxHeader;
