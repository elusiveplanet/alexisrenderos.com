import styled from "styled-components";

export type JuiceboxHeaderProps = {
  title: string;
  value: string | number;
};

export const JuiceboxHeaderTitle = styled.p`
  flex: 0 0 100%;
`;

const JuiceboxHeaderWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;

export const JuiceboxHeader = ({ title, value }: JuiceboxHeaderProps) => (
  <JuiceboxHeaderWrapper>
    <JuiceboxHeaderTitle>
      {title}: {value || ""}
    </JuiceboxHeaderTitle>
  </JuiceboxHeaderWrapper>
);
