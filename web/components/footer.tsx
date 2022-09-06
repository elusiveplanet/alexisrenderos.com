import styled from "styled-components";
import { LightText } from "../utils/colors";

const Footer = styled.div`
  margin-top: auto;
  h6 {
    font-size: 1.15em;
    font-weight: 300;
    margin: 1.25em auto;
    text-align: center;
    color: ${LightText};
    width: 100%;
    max-width: 500px;
  }
`;

const GlobalFooter = () => (
  <Footer>
    <h6>The 27th time is always the charm 💌</h6>
  </Footer>
);

export default GlobalFooter;
