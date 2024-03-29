import styled from "styled-components";
import JuiceboxHeader from "../components/navbar";
import SecretCard from "../components/secretCard";

const SecretPageBody = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

export const SecretPage = (): JSX.Element => (
  <>
    <JuiceboxHeader title="Alexis Renderos" />
    <SecretPageBody>
      <SecretCard />
    </SecretPageBody>
  </>
);

export default SecretPage;
