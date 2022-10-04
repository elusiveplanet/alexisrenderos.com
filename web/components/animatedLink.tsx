import styled from "styled-components";
import Link from "next/link";
import {
  AccentText,
  Black,
  FullyTransparent,
  SaffronToNectarGradient,
} from "../utils/colors";

const StyledLinkWrapper = styled.span`
  a {
    outline: none;
    text-decoration: underline;
    text-decoration-color: ${AccentText};
    color: ${AccentText};
    background: ${SaffronToNectarGradient} no-repeat right bottom / 0
      var(--bg-h);
    transition: background-size 350ms ease-in-out, color 500ms ease-in-out,
      text-decoration-color 500ms ease-in-out;
    --bg-h: 100%;
  }
  a:where(:hover, :focus-visible) {
    color: ${Black};
    text-decoration-color: ${FullyTransparent};
    background-size: 100% var(--bg-h);
    background-position-x: left;
  }
`;

const AnimatedLink = (props) => (
  <StyledLinkWrapper>
    <Link {...props} />
  </StyledLinkWrapper>
);

export default AnimatedLink;
