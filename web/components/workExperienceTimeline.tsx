import styled from "styled-components";
import {
  WorkExperienceCard,
  WorkExperienceCardPosition,
  WorkExperienceEntry,
} from "./workExperienceCard";
import simpleHash from "../helpers/simpleHash";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";

const WorkExperienceTimelineWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  width: max-content;
  max-width: 800px;
  padding: 2em;
`;

const WorkExperienceTimelineTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 15px 15px 2px 0 ${HalfShadow};
`;

type WorkExperienceCardCollectionProps = {
  workExperienceList: WorkExperienceEntry[];
};

const WorkExperienceTimeline = ({
  workExperienceList = [],
}: WorkExperienceCardCollectionProps): JSX.Element => {
  const experienceListLength = workExperienceList.length;

  if (!workExperienceList || experienceListLength === 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>) as JSX.Element;
  }

  if (experienceListLength === 1) {
    return (
      <WorkExperienceCard
        workExperience={workExperienceList[0]}
        cardPosition={WorkExperienceCardPosition.Only}
      />
    );
  }

  return (
    <WorkExperienceTimelineWrapper>
      <WorkExperienceTimelineTitle>Work Experience</WorkExperienceTimelineTitle>
      {workExperienceList.map((workExperience, index) => {
        let currentCardPosition: number;
        if (index === 0) {
          currentCardPosition = WorkExperienceCardPosition.First;
        } else if (index === experienceListLength - 1) {
          currentCardPosition = WorkExperienceCardPosition.Last;
        } else {
          currentCardPosition = WorkExperienceCardPosition.Body;
        }
        return (
          <WorkExperienceCard
            workExperience={workExperience}
            cardPosition={currentCardPosition}
            key={simpleHash(
              workExperience.company + workExperience.title + index
            )}
          />
        );
      })}
    </WorkExperienceTimelineWrapper>
  );
};

export default WorkExperienceTimeline;
