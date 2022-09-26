import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { LightText, RepeatingRainbowGradientFill } from "../utils/colors";
import SvgTopRightArrow from "./icons/TopRightArrow";
import { MIN_TABLET_WIDTH } from "../utils/utils";

const CtaButtonWrapper = styled.button`
  height: fit-content;
  width: fit-content;
  margin: 0.5em 0;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet and up
    // TODO: Needs to be properly scaled with styles
    margin: 1em 0;
  }
`;

const CtaButtonBorderAnimated = styled.div.attrs<{
  edgeSize?: number;
  borderWidth?: number;
  animationDisabled?: boolean;
}>((props) => ({
  edgeSize: `${props.edgeSize || 1}em`,
  borderWidth: `${props.borderWidth || 0.25}em`,
  animationDisabled: props.animationDisabled ?? false,
}))<{ edgeSize?: number; borderWidth?: number; animationDisabled?: boolean }>`
  --border-width: ${(props) => props.borderWidth};
  --edge-size: ${(props) => props.edgeSize};
  position: relative;
  height: 100%;
  width: 100%;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    filter: brightness(0%) invert(1);
    background: ${RepeatingRainbowGradientFill};
    background-size: 896px 896px;
    animation: slide 2s infinite linear forwards;
    transition: filter 250ms ease-in-out; // this makes the transition between hover states better
    animation-play-state: paused;
    @keyframes slide {
      0% {
        background-position: 896px 0;
      }
      100% {
        background-position: 0 0;
      }
    }
    clip-path: polygon(
      evenodd,
      // top left corner
      0 0,
      // top right
      100% 0,
      // right bottom right
      100% calc(100% - var(--edge-size)),
      // bottom bottom right
      calc(100% - var(--edge-size)) 100%,
      // bottom left
      0 100%,
      // bottom left, inset
      calc(var(--border-width)) calc(100% - var(--border-width)),
      // top left
      var(--border-width) var(--border-width),
      // top right
      calc(100% - var(--border-width)) var(--border-width),
      //bottom right - 1
      calc(100% - var(--border-width))
        calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      // bottom right - 2
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      // bottom left
      calc(var(--border-width)) calc(100% - var(--border-width)),
      // true bottom left
      0 100%
    );
  }
  svg {
    // we have to apply translate here with nothing so transition knows we
    // intend on changing this later and to apply transition to this property
    transition: transform 300ms ease-in-out;
    transform: translate(-1%, 2%);
  }
  :hover {
    :before {
      animation: slide 2s infinite linear forwards;
      filter: ${(props) =>
        props.animationDisabled
          ? "brightness(0%) invert(1)"
          : "brightness(100%) invert(1)"};
      transition: filter 250ms ease-in;
      animation-play-state: ${(props) =>
        props.animationDisabled ? "paused" : "running"};
    }
    svg {
      transform: translate(0%, -1%);
    }
  }
`;

const CtaButtonContentWrapper = styled.div.attrs<{
  isSubmit?: boolean;
}>((props) => ({
  isSubmit: props.isSubmit || false,
}))<{ isSubmit?: boolean }>`
  position: relative;
  z-index: 1;
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isSubmit ? "0.75em 3em" : "0.85em 1.75em")};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet and up
    // TODO: Needs to be properly scaled with styles
    padding: ${(props) => (props.isSubmit ? "1em 6em" : "1.25em 3em")};
  }
`;

const CtaButtonText = styled.div.attrs<{
  isSubmit?: boolean;
}>((props) => ({
  isSubmit: props.isSubmit || false,
}))<{ isSubmit?: boolean }>`
  font-weight: 700;
  font-style: normal;
  font-size: ${(props) => (props.isSubmit ? "1.15em" : "1.5em")};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet and up
    font-size: ${(props) => (props.isSubmit ? "1.35em" : "2em")};
  }
  width: max-content;
`;

const CtaButtonArrow = styled(SvgTopRightArrow)`
  height: 0.75em;
  width: 0.75em;
  padding-left: 0.6em;
  padding-top: 0.075em;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // on tablet and up
    // TODO: Needs to be properly scaled with styles
    height: 1.25em;
    width: 1.25em;
    padding-left: 1.25em;
    padding-top: 0.15em;
  }
`;

type CtaButtonProps = {
  text: string; // Title of button
  target?: string; // Think of this as href
  disabled?: boolean; // Used to disable clicks, for debouncing.
  submit?: boolean; // Specify if it's being used as a submit button in a Formik instance.
  anchor?: boolean; // Specify if it's a link to somewhere that already exists so we can smooth scroll
  mobile?: boolean; // If true, will quick select mobile styling
  arrow?: boolean; // Want an arrow displayed? Pass true.
};

const CtaButton = ({
  text,
  target = "",
  disabled = false,
  submit = false,
  anchor = false,
  mobile = false,
  arrow = false,
}: CtaButtonProps) => {
  const router = useRouter();

  const [animationDisabledState, setAnimationDisabledState] =
    useState<boolean>(false);

  const handleMouseLeave = (e) => {
    setAnimationDisabledState(false);
  };

  const handleAnimationDelay = (delay = 750) => {
    // We must modify any current animation
    // Run if it wasn't running before, but set a timeout to pause after a bit.
    document.getElementById("cta-button").style.animationPlayState = "running";
    setTimeout(() => {
      document.getElementById("cta-button").style.animationPlayState = "paused";
      setAnimationDisabledState(true);
      document
        .getElementById("cta-button")
        .addEventListener("mouseleave", (e) => handleMouseLeave(e));
    }, delay / 4);
  };

  const smoothScroll = (targetAnchor, delay = 0) => {
    if (delay === 0) {
      // No delay? No delay.
      const element = document.getElementById(targetAnchor);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      handleAnimationDelay(delay);
      setTimeout(() => {
        const element = document.getElementById(targetAnchor);
        element.scrollIntoView({ behavior: "smooth" });
      }, delay);
    }
  };

  const routerPush = (targetPath, delay = 0) => {
    if (delay === 0) {
      // No delay? No delay.
      router.push(targetPath);
    } else {
      handleAnimationDelay(delay);
      setTimeout(() => {
        router.push(targetPath);
      }, delay);
    }
  };

  const handleOnClick = (isAnchor, targetPath, isSubmit, delay = 750) => {
    // Handle scroll vs new page vs submit
    if (isAnchor) {
      smoothScroll(targetPath, mobile ? delay : 0);
    } else if (!isSubmit) {
      routerPush(targetPath, mobile ? delay : 0);
    } else {
      // It's a submit button, we shouldn't do anything other than disable the animation.
      handleAnimationDelay(250);
    }
  };

  const getEdgeSize = (isMobile, isSubmit): number => {
    if (isMobile && isSubmit) {
      return 0.75;
    }
    if (isMobile) {
      return 0.8;
    }
    if (isSubmit) {
      return 1.05;
    }
    return 1.375;
  };

  const getBorderWidth = (isMobile, isSubmit): number => {
    if (isMobile && isSubmit) {
      return 0.15;
    }
    if (isMobile) {
      return 0.2;
    }
    if (isSubmit) {
      return 0.2;
    }
    return 0.25;
  };

  return (
    <CtaButtonWrapper
      type={submit ? "submit" : "button"}
      id="cta-button"
      onClick={() => handleOnClick(anchor, target, submit)}
      disabled={disabled}>
      <CtaButtonBorderAnimated
        edgeSize={getEdgeSize(mobile, submit)}
        borderWidth={getBorderWidth(mobile, submit)}
        animationDisabled={animationDisabledState}>
        <CtaButtonContentWrapper isSubmit={submit}>
          <CtaButtonText isSubmit={submit}>{text}</CtaButtonText>
          {!!arrow && <CtaButtonArrow fill="none" stroke={`${LightText}`} />}
        </CtaButtonContentWrapper>
      </CtaButtonBorderAnimated>
    </CtaButtonWrapper>
  );
};

export default CtaButton;
