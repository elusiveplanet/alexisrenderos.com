import styled from "styled-components";
import { WorkExperienceEntry } from "./workExperienceCard";

export const WorkExperienceCardCollectionWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #0b0b0b;
  border-radius: 0.75rem;
`;

export type WorkExperienceCardCollectionProps = {
  workExperienceList: WorkExperienceEntry[];
};

export const WorkExperienceTimeline = ({
  workExperienceList,
}: WorkExperienceCardCollectionProps) => (
  <WorkExperienceCardCollectionWrapper />
);
