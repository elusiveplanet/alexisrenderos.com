import styled from "styled-components";
import { ProjectCard, ProjectEntry } from "./projectCard";
import simpleHash from "../helpers/simpleHash";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";

const ProjectCardCollectionWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 auto 10em auto;
  width: max-content;
  max-width: 800px;
  padding: 2em;
`;

const ProjectCardCollectionTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0.75em auto;
  text-align: center;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 15px 15px 2px 0 ${HalfShadow};
`;

type ProjectCardCollectionProps = {
  projectList: ProjectEntry[];
};

export const ProjectCardCollection = ({
  projectList,
}: ProjectCardCollectionProps): JSX.Element => {
  const projectListLength = projectList.length;

  if (!projectList || projectListLength === 0) {
    return {} as JSX.Element;
  }

  if (projectListLength === 1) {
    return <ProjectCard project={projectList[0]} />;
  }

  return (
    <ProjectCardCollectionWrapper>
      <ProjectCardCollectionTitle>Projects</ProjectCardCollectionTitle>
      {projectList.map((projectEntry, index) => (
        <ProjectCard
          project={projectEntry}
          key={simpleHash(projectEntry.name + projectEntry.description + index)}
        />
      ))}
    </ProjectCardCollectionWrapper>
  );
};
