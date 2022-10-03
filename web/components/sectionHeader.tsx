import styled from "styled-components";
import {
  AccentText,
  AlternateBackgroundColor,
  FullyTransparent,
  IndigoToAzureTextGradient,
  PrimaryBackgroundColor,
} from "../utils/colors";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/utils";

const HeaderWrapper = styled.div.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  display: flex;
  width: 100%;
  background: ${(props) =>
    props.altColor ? AlternateBackgroundColor : PrimaryBackgroundColor};
`;

const Header = styled.h2.attrs<{
  altColor?: boolean;
}>((props) => ({
  altColor: props.altColor || false,
}))<{ altColor?: boolean }>`
  position: relative;
  font-size: min(max(1.55em, 5.25vw), 2.75em);
  margin: 0.75em auto 0.25em auto;
  width: 90%;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  color: ${AccentText};

  ${(props) =>
    props.altColor &&
    `
    color: ${FullyTransparent};
    background: ${IndigoToAzureTextGradient};
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  `};

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 2.75em;
    margin: 0.5em auto 0.5em auto;
    width: 77.5%;
    max-width: 750px;
  }

  @media (min-width: ${MIN_DESKTOP_WIDTH}px) {
    font-size: 2.75em;
    margin: 0.5em auto 0.5em auto;
  }
`;

type SectionHeaderProps = {
  title: string;
  altColor?: boolean;
};

const SectionHeader = ({ title, altColor = false }: SectionHeaderProps) => (
  <HeaderWrapper altColor={altColor}>
    <Header altColor={altColor}>{title}</Header>
  </HeaderWrapper>
);

export default SectionHeader;
