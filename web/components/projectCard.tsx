import styled from "styled-components";
import {
  Black,
  FullyTransparent,
  HalfShadow,
  LightText,
  ModeratelyDarken,
  SaffronYellow,
  SlightShadow,
} from "../utils/colors";

// Project Card
// This component is used to display a single project entry.
// It also renders a single vertical accent line on the left side of the card.
export type ProjectEntry = {
  name: string;
  url?: string;
  code?: string;
  cad?: string;
  description: string;
  used?: string[];
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
  max-width: 650px;
  margin: 20px;
  box-shadow: 25px 25px 5px 0 ${HalfShadow};
  border-radius: 16px;
  border: 5px ${SlightShadow} solid;
`;

export const ProjectCardHeading = styled.h2`
  color: ${LightText};
  font-size: 2.5em;
  text-align: left;
  margin: 0;
  padding: 10px 0 5px 0;
  max-width: 500px;
  font-weight: 700;
  a {
    color: ${LightText};
    text-decoration-color: ${LightText};
  }
  a:where(:hover, :focus-visible) {
    color: ${Black};
    text-decoration-color: ${FullyTransparent};
  }
`;

export const ProjectCardBody = styled.p`
  color: ${LightText};
  font-size: 1.75em;
  text-align: left;
  margin: 0;
  padding: 5px 0 10px 0;
  max-width: 600px;
  font-weight: 400;
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
  background: ${SaffronYellow};
`;

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <ProjectCardWrapper>
    <ProjectCardAccentWrapper />
    <ProjectCardTextWrapper>
      <ProjectCardHeading>
        {!!project.url && <a href={project.url}>{project.name}</a>}
        {!project.url && project.name}
      </ProjectCardHeading>
      <ProjectCardBody>{project.description}</ProjectCardBody>
    </ProjectCardTextWrapper>
  </ProjectCardWrapper>
);
