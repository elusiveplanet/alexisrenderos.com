import styled from "styled-components";
import {
  DarkText,
  FullyTransparent,
  HalfShadow,
  LightText,
  SaffronYellow,
} from "../utils/colors";

type JuiceboxHeaderProps = {
  title: string;
};

const JuiceboxHeaderTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0.5em;
  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 12px 12px 2px 0 ${HalfShadow};
  width: fit-content;
`;

const JuiceboxOption = styled.a`
  font-size: 2em;
  font-weight: 500;
  margin: 0.5em;
  text-align: right;
  color: ${LightText};
  background: ${FullyTransparent};
  text-decoration-color: ${FullyTransparent};
  width: max-content;
`;

const JuiceboxHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 0;
  width: 100%;
  max-width: 1400px;
  border-radius: 0.75rem;
`;

const JuiceboxTitleWrapper = styled.div`
  //align-items: flex-start;
  width: 100%;
`;

const JuiceboxOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto;
  width: max-content;
`;

const JuiceboxHeaderTablet = ({ title }: JuiceboxHeaderProps) => (
  <JuiceboxHeaderWrapper>
    <JuiceboxTitleWrapper>
      <JuiceboxHeaderTitle>{title}</JuiceboxHeaderTitle>
    </JuiceboxTitleWrapper>
    <JuiceboxOptionsWrapper>
      {/*<JuiceboxOption>About Me</JuiceboxOption>*/}
      {/*<JuiceboxOption>Get In Touch</JuiceboxOption>*/}
    </JuiceboxOptionsWrapper>
  </JuiceboxHeaderWrapper>
);

export default JuiceboxHeaderTablet;
