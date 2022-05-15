import styled from "styled-components";
import {
  LightText,
  ModeratelyDarken,
  QuarterShadow,
  SaffronYellow,
} from "../utils/colors";
// Project Card
// This component is used to display a single project entry.
// It also renders a single vertical accent line on the left side of the card.

export type ProjectEntry = {
  title: string;
  description: string;
};

export type ProjectCardProps = {
  project: ProjectEntry;
};

const ProjectCardWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 1000px;
  margin: 20px;
  box-shadow: 25px 25px 25px 0 ${QuarterShadow};
  border-radius: 16px;
  border: 20px transparent;
`;

export const ProjectCardHeading = styled.h2`
  color: ${LightText};
  font-size: 48px;
  text-align: left;
  margin: 0;
  padding: 10px 0 5px 0;
  max-width: 500px;
  font-weight: bold;
`;

export const ProjectCardBody = styled.p`
  color: ${LightText};
  font-size: 32px;
  text-align: left;
  margin: 0;
  padding: 5px 0 10px 0;
  max-width: 600px;
`;

const ProjectCardTextWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: max-content;
  padding: 25px;
  background-color: ${ModeratelyDarken};
`;

const ProjectCardAccentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 5%;
  background-color: ${SaffronYellow};
`;

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <ProjectCardWrapper>
    <ProjectCardAccentWrapper />
    <ProjectCardTextWrapper>
      <ProjectCardHeading>{project.title}</ProjectCardHeading>
      <ProjectCardBody>{project.description}</ProjectCardBody>
    </ProjectCardTextWrapper>
  </ProjectCardWrapper>
);
