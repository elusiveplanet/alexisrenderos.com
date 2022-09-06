import styled from "styled-components";
import Link from "next/link";
import {
  AccentText,
  AlternateBackgroundColor,
  DarkText,
  FullyTransparent,
  HalfShadow,
  LightText,
  PrimaryBackgroundColor,
  SaffronYellow,
  ThreeQuarterShadow,
} from "../utils/colors";
import { MIN_TABLET_WIDTH } from "../utils/utils";

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
  max-width: 1500px;
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

const JuiceboxHeader = ({
  title,
  absolute,
  altColor = false,
}: JuiceboxHeaderProps) => (
  <StyledJuiceboxHeader absolute={absolute}>
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
