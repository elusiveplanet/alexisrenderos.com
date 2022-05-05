import styled from "styled-components";
import {
  WorkExperienceCard,
  WorkExperienceCardPosition,
  WorkExperienceEntry,
} from "./workExperienceCard";
import simpleHash from "../helpers/simpleHash";

export const WorkExperienceCardCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export type WorkExperienceCardCollectionProps = {
  workExperienceList: WorkExperienceEntry[];
};

export const WorkExperienceTimeline = ({
  workExperienceList,
}: WorkExperienceCardCollectionProps): JSX.Element => {
  const experienceListLength = workExperienceList.length;

  if (!workExperienceList || experienceListLength === 0) {
    return {} as JSX.Element;
  }

  return (
    <WorkExperienceCardCollectionWrapper>
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
    </WorkExperienceCardCollectionWrapper>
  );

  if (experienceListLength === 1) {
    return (
      <WorkExperienceCard
        workExperience={workExperienceList[0]}
        cardPosition={WorkExperienceCardPosition.Only}
      />
    );
  }
};
