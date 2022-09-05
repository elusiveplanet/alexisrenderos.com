import styled from "styled-components";
import {
  AccentText,
  DarkText,
  FullyTransparent,
  HalfShadow,
  IndigoToAzureGradient,
  LightText,
  NeutralOffWhite,
  SaffronYellow,
  ThreeQuarterShadow,
} from "../utils/colors";
import { MIN_TABLET_WIDTH } from "../utils/utils";
import Link from "next/link";

type JuiceboxHeaderProps = {
  title: string;
  altColor?: boolean;
};

type JuiceboxOptionProps = {
  title: string;
  path: string;
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
    box-shadow: 11px 11px 1px 0
      ${(props) => (props.altColor ? ThreeQuarterShadow : HalfShadow)};
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
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
  margin: 0.5em 0;
  width: 100%;
  max-width: 1400px;
`;

const JuiceboxTitleWrapper = styled(Link)`
  align-items: flex-start;
  margin: 1.5em 0;
  width: 100%;
`;

const JuiceboxOptionsWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto 0;
  width: max-content;
`;

const StyledJuiceboxHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledJuiceboxHeaderWrapper = styled.header.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${(props) =>
    props.altColor ? NeutralOffWhite : IndigoToAzureGradient};
`;

const JuiceboxOptionText = styled.a``;

const JuiceboxOptionWrapper = styled.li.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  margin: 0 0 0 3.25em;
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
    color: ${(props) => (props.altColor ? DarkText : LightText)};
    width: max-content;
    transition: color 250ms;
  }
  :where(:hover, :focus-visible) {
    ::marker {
      color: ${(props) => (props.altColor ? DarkText : AccentText)};
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

const JuiceboxHeader = ({ title, altColor = false }: JuiceboxHeaderProps) => (
  <StyledJuiceboxHeader>
    <StyledJuiceboxHeaderWrapper altColor={altColor}>
      <JuiceboxHeaderWrapper>
        <JuiceboxTitleWrapper href="/" passHref>
          <JuiceboxHeaderTitle altColor={altColor}>{title}</JuiceboxHeaderTitle>
        </JuiceboxTitleWrapper>
        <JuiceboxOptionsWrapper>
          <JuiceboxOption title="About" path="/about" altColor={altColor} />
          <JuiceboxOption title="Contact" path="/contact" altColor={altColor} />
          <JuiceboxOption title="Resume" path="/resume" altColor={altColor} />
        </JuiceboxOptionsWrapper>
      </JuiceboxHeaderWrapper>
    </StyledJuiceboxHeaderWrapper>
  </StyledJuiceboxHeader>
);

export default JuiceboxHeader;
