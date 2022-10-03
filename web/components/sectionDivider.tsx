import styled from "styled-components";
import Image from "next/image";
import {
  AccentGradientFill,
  FullyTransparent,
  NeutralOffWhite,
  QuarterShadow,
} from "../utils/colors";
import { MAX_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";
import { ImagePath } from "../helpers/types";

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 12em;
  width: 100%;
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    max-height: 16em;
  }
`;

const DividerBackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const DividerBackground = styled.div.attrs<{
  alternate?: boolean;
}>((props) => ({
  alternate: props.alternate || false,
}))<{ alternate?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 500vh;
  transform: skewY(-10deg);
  background: ${(props) =>
    props.alternate
      ? `linear-gradient(180deg, ${FullyTransparent} calc(50% - 1px), ${NeutralOffWhite} calc(50%))`
      : `linear-gradient(180deg, ${NeutralOffWhite} calc(50% - 1px), ${FullyTransparent} calc(50%))`};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    transform: skewY(-6deg);
  }
  @media (min-width: ${MAX_DESKTOP_WIDTH}px) {
    transform: skewY(-4deg);
  }
`;

const Stripe = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.5em;
  background: ${AccentGradientFill};
  box-shadow: 0 4px 4px ${QuarterShadow};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    height: 2em;
  }
`;

const StripeImageWrapper = styled.div`
  height: min(max(8em, 21.3vw), 12.5em);
  width: min(max(8em, 21.3vw), 12.5em);
  transform: skewY(10deg);
  margin: 0 auto;
  filter: drop-shadow(4px 4px 10px ${QuarterShadow});
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    height: 12.5em;
    width: 12.5em;
    transform: skewY(6deg);
  }
  @media (min-width: ${MAX_DESKTOP_WIDTH}px) {
    transform: skewY(4deg);
  }
`;

const StripeImage = styled(Image)`
  border-radius: 10px;
`;

type SectionDividerProps = {
  image?: ImagePath;
  alternate?: boolean;
};

const SectionDivider = ({
  image,
  alternate = false,
}: SectionDividerProps): JSX.Element => (
  <DividerWrapper>
    <DividerBackgroundWrapper>
      <DividerBackground alternate={alternate}>
        <Stripe>
          {!!image && (
            <StripeImageWrapper>
              <StripeImage
                src={image.imagePath}
                layout="responsive"
                width={40}
                height={40}
                alt={
                  image.imageAltText ||
                  "Alt text unavailable. Apologies! Let me know and I'll fix it."
                }
              />
            </StripeImageWrapper>
          )}
        </Stripe>
      </DividerBackground>
    </DividerBackgroundWrapper>
  </DividerWrapper>
);

export default SectionDivider;
