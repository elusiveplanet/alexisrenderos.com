import styled from "styled-components";
import { LightText } from "../utils/colors";

const CtaButtonWrapper = styled.div.attrs<{
  height?: number;
  width?: number;
}>((props) => ({
  style: {
    height: `${props.height || 75}px`,
    width: `${props.width || 400}px`,
  },
}))<{ height?: number; width?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CtaButtonBorder = styled.button.attrs<{
  edgeSize?: number;
  borderWidth?: number;
}>((props) => ({
  edgeSize: `${props.edgeSize || 12}px`,
  borderWidth: `${props.borderWidth || 4}px`,
}))<{ edgeSize?: number; borderWidth?: number }>`
  --border-width: ${(props) => props.borderWidth};
  --edge-size: ${(props) => props.edgeSize};
  background: ${LightText};
  height: 100%;
  width: 100%;
  z-index: -5;
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
`;

const CtaButtonText = styled.h1`
  position: absolute;
  font-size: 40px;
  margin: 1em;
`;

type CtaButtonProps = {
  text: number;
  textSize?: number; // Passed in as a multiple of em, used to scale component
  arrow?: boolean;
  height?: number;
  width?: number;
};

const CtaButton = () => (
  <CtaButtonWrapper>
    <CtaButtonText>Learn how I do it ↗</CtaButtonText>
    <CtaButtonBorder edgeSize={16} />
  </CtaButtonWrapper>
);

export default CtaButton;
