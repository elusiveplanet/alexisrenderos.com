import styled from "styled-components";
import {
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

type ProjectCardProps = {
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
  transition: box-shadow 250ms ease-out, border 300ms ease-out;

  :where(:hover, :focus-visible) {
    border: 5px ${HalfShadow} solid;
    box-shadow: 20px 20px 5px 0 ${HalfShadow};
  }
`;

const ProjectCardHeading = styled.h2`
  color: ${LightText};
  font-size: 2.2em;
  text-align: left;
  padding: 0.125em 0.15em;
  max-width: 500px;
  font-weight: 700;
  border-radius: 0.25em;
  :where(:hover, :focus-visible) {
    background: ${HalfShadow};
  }
`;

const ProjectCardBody = styled.p`
  color: ${LightText};
  font-size: 1.35em;
  text-align: left;
  margin: 0;
  line-height: 135%;
  padding: 0.125em 0.15em;
  max-width: 500px;
  font-weight: 400;
`;

const ProjectCardTextWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: max-content;
  padding: 1.75em 1.5em;
  background: ${ModeratelyDarken};
`;

const ProjectCardAccentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 5%;
  background: ${SaffronYellow};
`;

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <a href={project.url}>
    <ProjectCardWrapper>
      <ProjectCardAccentWrapper />
      <ProjectCardTextWrapper>
        <ProjectCardHeading>
          {/*{!!project.url && <a href={project.url}>{project.name}</a>}*/}
          {/*{!project.url && project.name}*/}
          {project.name}
        </ProjectCardHeading>
        <ProjectCardBody>{project.description}</ProjectCardBody>
      </ProjectCardTextWrapper>
    </ProjectCardWrapper>
  </a>
);
