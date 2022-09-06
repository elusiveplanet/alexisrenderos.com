import styled from "styled-components";
import { ProjectCard, ProjectEntry } from "./projectCard";
import simpleHash from "../helpers/simpleHash";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";

const ProjectCardCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding: 2em 0;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
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

const ProjectCardCollection = ({
  projectList = [],
}: ProjectCardCollectionProps): JSX.Element => {
  const projectListLength = projectList.length;

  if (!projectList || projectListLength === 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>) as JSX.Element;
  }

  if (projectListLength === 1) {
    return <ProjectCard project={projectList[0]} />;
  }

  return (
    <ProjectCardCollectionWrapper>
      <ProjectCardCollectionTitle>Projects</ProjectCardCollectionTitle>
      <ProjectCardWrapper>
        {projectList.map((projectEntry, index) => (
          <ProjectCard
            project={projectEntry}
            key={simpleHash(
              projectEntry.name + projectEntry.description + index
            )}
          />
        ))}
      </ProjectCardWrapper>
    </ProjectCardCollectionWrapper>
  );
};

export default ProjectCardCollection;
