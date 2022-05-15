import { createGlobalStyle } from "styled-components";
import { IndigoToAzureGradient } from "../utils/colors";

export const GlobalStyle = createGlobalStyle`
  body {
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
    background: ${IndigoToAzureGradient};
    color: white;
    font-family: GT Walsheim Trial, sans-serif;
  }
`;

export const Something = "";
