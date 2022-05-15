import styled from "styled-components";
import { ProjectCard, ProjectEntry } from "./projectCard";
import simpleHash from "../helpers/simpleHash";

export const ProjectCardCollectionWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export type ProjectCardCollectionProps = {
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
      {projectList.map((projectEntry, index) => (
        <ProjectCard
          project={projectEntry}
          key={simpleHash(
            projectEntry.title + projectEntry.description + index
          )}
        />
      ))}
    </ProjectCardCollectionWrapper>
  );
};
