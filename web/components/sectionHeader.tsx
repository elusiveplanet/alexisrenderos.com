import styled from "styled-components";
import {
  AccentText,
  AlternateBackgroundColor,
  FullyTransparent,
  PrimaryBackgroundColor,
} from "../utils/colors";

const HeaderWrapper = styled.div.attrs<{
  altColor?: boolean;
}>((props) => ({
  reversed: props.altColor || false,
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
  font-size: 2.75em;
  font-weight: 700;
  font-style: italic;
  margin: 1.25em auto 0.75em auto;
  text-align: center;
  color: ${AccentText};

  ${(props) =>
    props.altColor &&
    `
    color: ${FullyTransparent};
    background: ${PrimaryBackgroundColor};
    width: 75%;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  `}

  width: 75%;
  max-width: 800px;
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
