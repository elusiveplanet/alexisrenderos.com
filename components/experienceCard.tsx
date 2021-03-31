import { CSSProperties } from "react";
import styled from "styled-components";

export interface ExperienceCardProps {
  title: string;
  value: string | number;
  [propsToCard: string]: any;
}

export const ExperienceCard = ({
                             title,
                             value,
                             ...propsToCard
                           }: ExperienceCardProps) => (
  <ExperienceCardWrapper>
    <ExperienceCardTitle>
      {title}: {value || ""}
    </ExperienceCardTitle>
  </ExperienceCardWrapper>
);

export const ExperienceCardTitle = styled.p`
  flex: 0 0 100%;
`;

const ExperienceCardWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;

export interface ExperienceCardCollectionProps {
  title: string;
  style?: CSSProperties;
  [propsToCardCollection: string]: any;
}

export const ExperienceCardCollection = ({
                                       title,
                                       style,
                                       children,
                                       ...propsToCardCollection
                                     }: ExperienceCardCollectionProps) => (
  <ExperienceCardCollectionWrapper style={style}>
    <ExperienceCardCollectionTitle>{title}</ExperienceCardCollectionTitle>
    {children}
  </ExperienceCardCollectionWrapper>
);

export const ExperienceCardCollectionTitle = styled.h3`
  flex: 0 0 100%;
`;

export const ExperienceCardCollectionWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #0b0b0b;
  border-radius: 0.75rem;
`;

export interface ResponsibilityLineProps {
  title: string;
  value: string | number;
  [propsToLine: string]: any;
}

export const ResponsibilityLine = ({
                                 title,
                                 value,
                                 ...propsToLine
                               }: ResponsibilityLineProps) => (
  <ResponsibilityLineWrapper>
    <p>
      {title}: {value || ""}
    </p>
  </ResponsibilityLineWrapper>
);

const ResponsibilityLineWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;