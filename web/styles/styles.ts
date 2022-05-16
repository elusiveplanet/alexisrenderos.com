import { createGlobalStyle } from "styled-components";
import {
  Black,
  FullyTransparent,
  IndigoToAzureGradient,
  SaffronToNectarGradient,
  SaffronYellow,
} from "../utils/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    //CSS Reset
    * {
      all: unset;
      display: revert;
    }
    
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Bold-Oblique-Trial.otf");
      font-weight: 700;
      font-style: italic;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Bold-Trial.otf");
      font-weight: 700;
      font-style: normal;
    }        
    @font-face {
    font-family: "GT Walsheim Trial";
    src: url("/fonts/GT-Walsheim-Medium-Oblique-Trial.otf");
    font-weight: 500;
    font-style: italic;  
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Medium-Trial.otf");
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Regular-Oblique-Trial.otf");
      font-weight: 400;
      font-style: italic;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Regular-Trial.otf");
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Light-Oblique-Trial.otf");
      font-weight: 300;
      font-style: italic;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Light-Trial.otf");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Thin-Oblique-Trial.otf");
      font-weight: 200;
      font-style: italic;
    }
    @font-face {
      font-family: "GT Walsheim Trial";
      src: url("/fonts/GT-Walsheim-Thin-Trial.otf");
      font-weight: 200;
      font-style: normal;
    }
    margin: 0;
    background: ${IndigoToAzureGradient};
    color: white;
    font-family: GT Walsheim Trial, sans-serif;
    
    a {
      outline: none;
      text-decoration: underline;
      text-decoration-color: ${SaffronYellow};
      color: ${SaffronYellow};
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

export const Something = "";
