import styled from "styled-components";
import {
  AccentText,
  Black,
  FullyTransparent,
  LightText,
  NeutralOffWhite,
  SaffronYellow,
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
  top: calc(50% - 1em - 5px);
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

export const TimeLine = styled.div`
  z-index: 1;
  background-color: ${SaffronYellow};
  position: absolute;
  width: 0.85em;
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
  display: inline-flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position: relative;
  width: 75px;
`;

export const WorkExperienceCardHeading = styled.h2`
  color: ${LightText};
  font-size: 2.05em;
  letter-spacing: 0.0125em;
  text-align: left;
  margin: 0;
  padding: 1px 0;
`;

export const WorkExperienceCardSubheadingOne = styled.h3`
  color: ${AccentText};
  font-size: 1.5em;
  letter-spacing: 0.0125em;
  text-align: left;
  margin: 0.075em 0;
  padding: 0;
`;

export const WorkExperienceCardSubheadingTwo = styled.h4`
  color: ${LightText};
  font-size: 1.3em;
  text-align: left;
  padding: 5px 0 0 0;
`;

export const WorkExperienceCardBody = styled.p`
  color: ${LightText};
  font-size: 1.75em;
  line-height: 115%;
  text-align: left;
  margin: 0.1em 0;
  padding: 0.5em 0 0 0;
  max-width: 600px;
`;

const WorkExperienceCardTextWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: max-content;
  padding: 4em 1.5em;
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
        {!!workExperience.url && (
          <a href={workExperience.url}>{workExperience.title}</a>
        )}
        {!workExperience.url && workExperience.title}
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
