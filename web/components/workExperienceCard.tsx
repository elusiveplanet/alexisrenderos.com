import styled from "styled-components";
import {
  Black,
  FullyTransparent,
  NeutralOffWhite,
  SaffronYellow,
  White,
} from "../utils/colors";

// Work Experience Card
// This component is used to display a single work experience entry.
// It also renders a single circle with a timeline "line" depending on the position.

/*
 * workExperienceCardPosition
 * Enum to indicate the position of the card.
 * Used to determine the styling, since head and tail cards are styled differently.
 * Body indicates a card is placed between the First and Last cards.
 */

export enum WorkExperienceCardPosition {
  First = 0,
  Body = 1,
  Last = 2,
  Only = 3,
}

export type WorkExperienceTimeRange = {
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
};

export type WorkExperienceEntry = {
  company: string;
  url?: string;
  title: string;
  dates: WorkExperienceTimeRange;
  description: string;
  location?: string;
  additionalInfo?: string;
};

export type WorkExperienceCardProps = {
  workExperience: WorkExperienceEntry;
  cardPosition: WorkExperienceCardPosition;
};

export type WorkExperienceCardTimelineProps = {
  position: WorkExperienceCardPosition;
};

export const TimelineDot = styled.div`
  z-index: 2;
  background-color: ${NeutralOffWhite};
  border: 5px solid ${Black};
  position: absolute;
  top: calc(50% - 25px);
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const TimeLine = styled.div`
  z-index: 1;
  background-color: ${SaffronYellow};
  position: absolute;
  width: 15px;
`;

export const TimeLineFirst = styled(TimeLine)`
  top: calc(50%);
  height: 50%;
`;

export const TimeLineBody = styled(TimeLine)`
  top: 0;
  height: 100%;
`;

export const TimeLineLast = styled(TimeLine)`
  top: 0;
  height: 50%;
`;

// Intentionally empty. For future use, if styling a single card is needed.
export const TimeLineOnly = styled.div``;

const WorkExperienceCardTimelineWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: relative;
  max-width: 75px;
  min-height: 100px;
`;

export const WorkExperienceCardHeading = styled.h2`
  color: ${White};
  font-size: 2.5em;
  letter-spacing: 0.2px;
  text-align: left;
  margin: 0;
  padding: 2px 0;
  font-weight: 700;
`;

export const WorkExperienceCardSubheadingOne = styled.h3`
  color: ${SaffronYellow};
  font-size: 1.75em;
  letter-spacing: 0.2px;
  text-align: left;
  margin: 0;
  padding: 0;
  font-weight: 500;
`;

export const WorkExperienceCardSubheadingTwo = styled.h4`
  color: ${White};
  font-size: 1.2em;
  text-align: left;
  margin: 0;
  padding: 5px 0 0 0;
  font-weight: 400;
`;

export const WorkExperienceCardBody = styled.p`
  color: ${White};
  font-size: 1.75em;
  text-align: left;
  margin: 0;
  padding: 5px 0 0 0;
  max-width: 650px;
  font-weight: 400;
`;

const WorkExperienceCardTextWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: max-content;
  padding: 60px 20px;
`;

const WorkExperienceCardWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
  background: ${FullyTransparent};
`;

export const WorkExperienceCardTimeline = ({
  position,
}: WorkExperienceCardTimelineProps) => (
  <WorkExperienceCardTimelineWrapper>
    <TimelineDot />
    {position === 0 && <TimeLineFirst />}
    {position === 1 && <TimeLineBody />}
    {position === 2 && <TimeLineLast />}
    {position === 3 && <TimeLineOnly />}
  </WorkExperienceCardTimelineWrapper>
);

export const WorkExperienceCard = ({
  workExperience,
  cardPosition,
}: WorkExperienceCardProps) => (
  <WorkExperienceCardWrapper>
    <WorkExperienceCardTimeline position={cardPosition} />
    <WorkExperienceCardTextWrapper>
      <WorkExperienceCardHeading>
        {workExperience.company}
      </WorkExperienceCardHeading>
      <WorkExperienceCardSubheadingOne>
        {workExperience.title}
      </WorkExperienceCardSubheadingOne>
      <WorkExperienceCardSubheadingTwo>
        {workExperience.dates.startMonth} {workExperience.dates.startYear}{" "}
        &mdash; {workExperience.dates.endMonth}
        {!!workExperience.dates.endYear && ` ${workExperience.dates.endYear}`}
      </WorkExperienceCardSubheadingTwo>
      <WorkExperienceCardBody>
        {workExperience.description}
      </WorkExperienceCardBody>
    </WorkExperienceCardTextWrapper>
  </WorkExperienceCardWrapper>
);
