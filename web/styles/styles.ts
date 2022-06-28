import { createGlobalStyle } from "styled-components";
import {
  AccentText,
  Black,
  FullyTransparent,
  IndigoToAzureGradient,
  SaffronToNectarGradient,
} from "../utils/colors";

const GlobalStyle = createGlobalStyle`
  body {
    //CSS Reset
    * {
      all: unset;
      display: revert;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-bold-oblique-trial.woff2") format("woff2");
      font-weight: 700;
      font-style: italic;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-bold-trial.woff2") format("woff2");
      font-weight: 700;
      font-style: normal;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-medium-oblique-trial.woff2") format("woff2");
      font-weight: 500;
      font-style: italic;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-medium-trial.woff2") format("woff2");
      font-weight: 500;
      font-style: normal;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-regular-oblique-trial.woff2") format("woff2");
      font-weight: 400;
      font-style: italic;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-regular-trial.woff2") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-light-oblique-trial.woff2") format("woff2");
      font-weight: 300;
      font-style: italic;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-light-trial.woff2") format("woff2");
      font-weight: 300;
      font-style: normal;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-thin-oblique-trial.woff2") format("woff2");
      font-weight: 200;
      font-style: italic;
      font-display: optional;
    }
    @font-face {
      font-family: "GT Walsheim";
      src: url("/fonts/gt-walsheim-thin-trial.woff2") format("woff2");
      font-weight: 200;
      font-style: normal;
      font-display: optional;
    }
    margin: 0;
    background: ${IndigoToAzureGradient};
    color: white;
    font-family: GT Walsheim, sans-serif;
    
    a {
      outline: none;
      text-decoration: underline;
      text-decoration-color: ${AccentText};
      color: ${AccentText};
      background: ${SaffronToNectarGradient} no-repeat right bottom / 0 var(--bg-h);
      transition: background-size 350ms ease-in-out, color 500ms ease-in-out, text-decoration-color 500ms ease-in-out;
      --bg-h: 100%;
    }
    a:where(:hover, :focus-visible) {
      color: ${Black};
      text-decoration-color: ${FullyTransparent};
      background-size: 100% var(--bg-h);
      background-position-x: left;
    }
    
    h1 {
      font-size: 2.25em;
      font-weight: 700;
    }
    
    h2 {
      font-size: 2em;
      font-weight: 700;
    }

    h3 {
      font-size: 1.75em;
      font-weight: 500;
    }
    
    h4 {
      font-size: 1.5em;
      font-weight: 500;
    }

    h5 {
      font-size: 1.25em;
      font-weight: 500;
    }

    h6 {
      font-size: 1em;
      font-weight: 500;
    }

    p {
      font-size: 1em;
      font-weight: 400;
    }
  }
`;

export default GlobalStyle;
