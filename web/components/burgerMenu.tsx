import styled from "styled-components";
import React, { useState } from "react";
import {
  AlternateBackgroundColor,
  DarkTextAlternate,
  FullyTransparent,
  PrimaryBackgroundColor,
} from "../utils/colors";

type BurgerMenuProps = {
  children: JSX.Element;
  altColor?: boolean;
};

const BurgerMenuWrapper = styled.div``;

const BurgerMenuLabel = styled.label`
  display: flex;
  padding: 0.8em;
  z-index: 100;
`;

const GetBurgerMenuIconColor = (altColor: boolean, clicked: boolean) => {
  if (clicked) {
    return AlternateBackgroundColor;
  }
  return altColor ? DarkTextAlternate : AlternateBackgroundColor;
};

const BurgerButton = styled.button``;

const BurgerIcon = styled.div.attrs<{
  altColor: boolean;
  clicked: boolean;
}>((props) => ({
  clicked: props.clicked || false,
}))<{ altColor: boolean; clicked: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.clicked
      ? FullyTransparent
      : GetBurgerMenuIconColor(props.altColor, props.clicked)};
  width: 2.5em;
  height: 0.2em;
  margin: 1.25em 0.25em;
  transition: all 0.2s;
  &::before,
  &::after {
    content: "";
    background-color: ${(props) =>
      GetBurgerMenuIconColor(props.altColor, props.clicked)};
    width: 2.5em;
    height: 0.2em;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.75rem")};
    transform: ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.75rem")};
    transform: ${(props) => (props.clicked ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const BurgerMenuOverlay = styled.div.attrs<{
  altColor: boolean;
  clicked: boolean;
}>((props) => ({
  clicked: props.clicked || false,
}))<{ altColor: boolean; clicked: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 75;
  height: auto;
  width: auto;
  padding: 10em 2em;
  background: ${PrimaryBackgroundColor};
  filter: ${(props) => (props.clicked ? "opacity(100%)" : "opacity(0%)")};

  transition: filter 200ms ease-in,
    visibility 0ms ${(props) => (props.clicked ? "0ms" : "200ms")};

  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BurgerMenuChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 3em;
`;

// alt color only sets the initial state of the burger icon
const BurgerMenu = ({ children, altColor = false }: BurgerMenuProps) => {
  const [click, setClick] = useState(false);
  const handleOverflow = () => {
    document.querySelector("body").style.overflow = click
      ? "visible"
      : "hidden";
  };
  const handleClick = () => {
    setClick((prev) => !click);
    handleOverflow();
  };
  return (
    <>
      <BurgerMenuOverlay altColor={altColor} clicked={click}>
        <BurgerMenuChildren>{children}</BurgerMenuChildren>
      </BurgerMenuOverlay>
      <BurgerMenuLabel htmlFor="navigation-toggle" onClick={handleClick}>
        <BurgerButton id="hamburger-menu-button" onClick={() => handleClick}>
          <BurgerIcon altColor={altColor} clicked={click} />
        </BurgerButton>
      </BurgerMenuLabel>
    </>
  );
};

export default BurgerMenu;
