import styled from "styled-components";
import {
  DarkText,
  FullyTransparent,
  LightText,
  SaffronYellow,
} from "../utils/colors";

type JuiceboxHeaderProps = {
  title: string;
};

const JuiceboxHeaderTitle = styled.h2`
  font-weight: 700;

  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
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
  align-items: flex-start;
  width: 100%;
`;

const JuiceboxOptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: auto;
  width: max-content;
`;

const JuiceboxHeaderMobile = ({ title }: JuiceboxHeaderProps) => (
  <JuiceboxHeaderWrapper>
    <JuiceboxTitleWrapper>
      <JuiceboxHeaderTitle>{title}</JuiceboxHeaderTitle>
    </JuiceboxTitleWrapper>
    <JuiceboxOptionsWrapper>
      {/*<JuiceboxOption>☰</JuiceboxOption>*/}
    </JuiceboxOptionsWrapper>
  </JuiceboxHeaderWrapper>
);

export default JuiceboxHeaderMobile;
