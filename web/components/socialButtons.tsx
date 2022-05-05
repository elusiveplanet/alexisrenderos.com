import styled from "styled-components";

export interface SocialButtonsProps {
  title: string;
  value: string | number;
}

// Okay here's what I'm thinking for design of this button.

// I want multiple icons rendered here, so why not design a component that takes in usernames and constructs links on the fly?
// Just for fun.
// Not really anything practical.
// Pass in service name and the service username to a helper component, get a clickable item
// Returns a component with fixed (?) height and flex width dep on number of items.

export type SocialButtonProps = {
  title: string;
  value: string | number;
};

export const SocialButtonTitle = styled.p`
  flex: 0 0 100%;
`;

const SocialButtonWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;

export const SocialButtonsTitle = styled.p`
  flex: 0 0 100%;
`;

const SocialButtonsWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;

export const SocialButton = ({ title, value }: SocialButtonProps) => (
  <SocialButtonWrapper>
    <SocialButtonTitle>
      {title}: {value || ""}
    </SocialButtonTitle>
  </SocialButtonWrapper>
);

export const SocialButtons = ({ title, value }: SocialButtonsProps) => (
  <SocialButtonsWrapper>
    <SocialButtonsTitle>
      {title}: {value || ""}
    </SocialButtonsTitle>
  </SocialButtonsWrapper>
);
