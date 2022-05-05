import styled from "styled-components";

export type ProjectCardProps = {
  title: string;
  description: string;
};

export const ProjectCardTitle = styled.h3`
  flex: 0 0 100%;
`;

export const ProjectCardDescription = styled.p`
  flex: 0 0 100%;
`;

const ProjectCardWrapper = styled.div`
  margin: 0.1rem 0;
  padding: 0.1rem 0;
  width: max-content;
  border-radius: 0.75rem;
`;

export const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <ProjectCardWrapper>
    <ProjectCardTitle>{title}</ProjectCardTitle>
    <ProjectCardDescription>{description}</ProjectCardDescription>
  </ProjectCardWrapper>
);
