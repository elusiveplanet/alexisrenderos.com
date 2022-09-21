import styled from "styled-components";
import React, { useState } from "react";
import {
  AlternateBackgroundColor,
  DarkTextAlternate,
  FullyTransparent,
} from "../utils/colors";

type BurgerMenuProps = {
  children: JSX.Element;
  altColor?: boolean;
};

const BurgerMenuWrapper = styled.div``;

const BurgerMenuLabel = styled.label``;

const GetBurgerMenuIconColor = (altColor: boolean) =>
  altColor ? DarkTextAlternate : AlternateBackgroundColor;

const BurgerIcon = styled.button.attrs<{
  altColor: boolean;
  clicked: boolean;
}>((props) => ({
  clicked: props.clicked || false,
}))<{ altColor: boolean; clicked: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.clicked ? FullyTransparent : GetBurgerMenuIconColor(props.altColor)};
  width: 3em;
  height: 0.25em;
  margin: 1.5em;
  transition: all 0.2s;
  &::before,
  &::after {
    content: "";
    background-color: ${(props) => GetBurgerMenuIconColor(props.altColor)};
    width: 3em;
    height: 0.25em;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const BurgerMenuButton = () => {};

const BurgerMenuOverlay = styled.div``;

const BurgerMenu = ({ children, altColor = false }: BurgerMenuProps) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <BurgerMenuLabel htmlFor="navigation-toggle" onClick={handleClick}>
      <BurgerIcon
        altColor={altColor}
        clicked={click}
        onClick={() => handleClick}
      />
    </BurgerMenuLabel>
  );
};

export default BurgerMenu;
