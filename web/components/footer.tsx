import styled from "styled-components";
import { LightText } from "../utils/colors";

const Footer = styled.div`
  margin-top: auto;
  padding-top: 5em;
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
    <h6>Made with 💌 in San Francisco, CA</h6>
  </Footer>
);

export default GlobalFooter;
