import styled from "styled-components";
import { useRouter } from "next/router";
import { LightText } from "../utils/colors";
import SvgTopRightArrow from "./icons/TopRightArrow";
import { MIN_TABLET_WIDTH } from "../utils/utils";

const CtaButtonWrapper = styled.button`
  height: fit-content;
  width: fit-content;
  margin: 1em 0;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    margin: 0.5em 0;
  }
`;

const CtaButtonBorderAnimated = styled.div.attrs<{
  edgeSize?: number;
  borderWidth?: number;
}>((props) => ({
  edgeSize: `${props.edgeSize || 1}em`,
  borderWidth: `${props.borderWidth || 0.25}em`,
}))<{ edgeSize?: number; borderWidth?: number }>`
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
    background: repeating-linear-gradient(
      45deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 5%,
      rgba(208, 222, 33, 1) 10%,
      rgba(79, 220, 74, 1) 15%,
      rgba(63, 218, 216, 1) 20%,
      rgba(47, 201, 226, 1) 25%,
      rgba(28, 127, 238, 1) 30%,
      rgba(95, 21, 242, 1) 35%,
      rgba(186, 12, 248, 1) 40%,
      rgba(251, 7, 217, 1) 45%,
      rgba(255, 0, 0, 1) 50%,
      rgba(255, 154, 0, 1) 55%,
      rgba(208, 222, 33, 1) 60%,
      rgba(79, 220, 74, 1) 65%,
      rgba(63, 218, 216, 1) 70%,
      rgba(47, 201, 226, 1) 75%,
      rgba(28, 127, 238, 1) 80%,
      rgba(95, 21, 242, 1) 85%,
      rgba(186, 12, 248, 1) 90%,
      rgba(251, 7, 217, 1) 95%,
      rgba(255, 0, 0, 1) 100%
    );
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
      filter: brightness(100%) invert(1);
      transition: filter 250ms ease-in;
      animation-play-state: running;
    }
    svg {
      transform: translate(0%, -1%);
    }
  }
`;

const CtaButtonContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25em 3em;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    padding: 0.85em 1.75em;
  }
`;

const CtaButtonText = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 2em;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 1.5em;
  }
  width: max-content;
`;

const CtaButtonArrow = styled(SvgTopRightArrow)`
  height: 1.25em;
  width: 1.25em;
  padding-left: 1.25em;
  padding-top: 0.15em;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    height: 0.75em;
    width: 0.75em;
    padding-left: 0.6em;
    padding-top: 0.075em;
  }
`;

type CtaButtonProps = {
  text: string; // Title of button
  target: string; // Think of this as href
  anchor?: boolean; // Specify if it's a link to somewhere that already exists so we can smooth scroll
  mobile?: boolean; // If true, will quick select mobile styling
  arrow?: boolean; // Want an arrow displayed? Pass true.
};

const CtaButton = ({
  text,
  target,
  anchor = false,
  mobile = false,
  arrow = false,
}: CtaButtonProps) => {
  const router = useRouter();

  const handleAnimationDelay = (delay = 750) => {
    // We must modify any current animation
    // Run if it wasn't running before, but set a timeout to pause after a bit.
    document.getElementById("cta-button").style.animationPlayState = "running";
    setTimeout(() => {
      document.getElementById("cta-button").style.animationPlayState = "paused";
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

  const handleOnClick = (isAnchor, targetPath, delay = 750) => {
    // Handle scroll vs new page
    if (isAnchor) {
      smoothScroll(targetPath, mobile ? delay : 0);
    } else {
      routerPush(targetPath, mobile ? delay : 0);
    }
  };

  return (
    <CtaButtonWrapper
      type="button"
      id="cta-button"
      onClick={() => handleOnClick(anchor, target)}>
      <CtaButtonBorderAnimated
        edgeSize={!mobile ? 1.375 : 0.8}
        borderWidth={!mobile ? 0.25 : 0.2}>
        <CtaButtonContentWrapper>
          <CtaButtonText>{text}</CtaButtonText>
          {!!arrow && <CtaButtonArrow fill="none" stroke={`${LightText}`} />}
        </CtaButtonContentWrapper>
      </CtaButtonBorderAnimated>
    </CtaButtonWrapper>
  );
};

export default CtaButton;
