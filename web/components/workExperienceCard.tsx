import styled from "styled-components";

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
}

export type WorkExperienceTimeRange = {
  startMonth: string;
  endMonth: string;
  startYear: string;
  endYear: string;
};

export type WorkExperienceEntry = {
  company: string;
  title: string;
  dates: WorkExperienceTimeRange;
  description: string;
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
  background-color: rgba(244, 244, 244, 1);
  border: 6px solid rgba(0, 0, 0, 1);
  position: absolute;
  top: calc(50% - 35px);
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const TimeLineFirst = styled.div`
  z-index: 1;
  background-color: rgba(243, 200, 27, 1);
  position: absolute;
  top: calc(50%);
  width: 15px;
  height: 50%;
`;

export const TimeLineBody = styled.div`
  z-index: 1;
  background-color: rgba(243, 200, 27, 1);
  position: absolute;
  top: 0;
  width: 15px;
  height: 100%;
`;

export const TimeLineLast = styled.div`
  z-index: 1;
  background-color: rgba(243, 200, 27, 1);
  position: absolute;
  top: 0;
  width: 15px;
  height: 50%;
`;

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
  color: rgba(255, 255, 255, 1);
  font-size: 48px;
  text-align: left;
  margin: 0;
  padding: 2px 0;
  font-family: GT Walsheim Trial, sans-serif;
  font-weight: bold;
`;

export const WorkExperienceCardSubheadingOne = styled.h3`
  color: rgba(243, 200, 27, 1);
  font-size: 30px;
  text-align: left;
  margin: 0;
  padding: 0;
  font-family: GT Walsheim Trial, sans-serif;
  font-weight: bold;
`;

export const WorkExperienceCardSubheadingTwo = styled.h4`
  color: rgba(243, 243, 243, 1);
  font-size: 20px;
  text-align: left;
  margin: 0;
  padding: 0;
  font-family: GT Walsheim Trial, sans-serif;
  font-weight: normal;
`;

export const WorkExperienceCardBody = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  text-align: left;
  margin: 0;
  padding: 15px 0;
  max-width: 650px;
  font-family: GT Walsheim Trial, sans-serif;
`;

const WorkExperienceCardTextWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: max-content;
  padding: 20px;
`;

const WorkExperienceCardWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
  background-image: linear-gradient(
    to right,
    rgba(24, 48, 73, 1) 0%,
    rgba(24, 51, 79, 1) 14.0625%,
    rgba(24, 58, 91, 1) 27.08333432674408%,
    rgba(24, 81, 135, 1) 100%
  );
`;

export const WorkExperienceCardTimeline = ({
  position,
}: WorkExperienceCardTimelineProps) => (
  <WorkExperienceCardTimelineWrapper>
    <TimelineDot />
    {position === 0 && <TimeLineFirst />}
    {position === 1 && <TimeLineBody />}
    {position === 2 && <TimeLineLast />}
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
        {workExperience.dates.startMonth} {workExperience.dates.startYear} -{" "}
        {workExperience.dates.endMonth}
        {!!workExperience.dates.endYear && ` ${workExperience.dates.endYear}`}
      </WorkExperienceCardSubheadingTwo>
      <WorkExperienceCardBody>
        {workExperience.description}
      </WorkExperienceCardBody>
    </WorkExperienceCardTextWrapper>
  </WorkExperienceCardWrapper>
);
