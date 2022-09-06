import styled from "styled-components";
import { StoryCard, StoryEntry } from "./storyCard";
import simpleHash from "../helpers/simpleHash";

type StoryCardCollectionProps = {
  storyList: StoryEntry[];
  alternating?: boolean;
};

const StoryCardCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-content: center;
  margin: 1.5em auto;
  gap: 5em;
`;

const StoryCardCollection = ({
  storyList = [],
  alternating = true,
}: StoryCardCollectionProps): JSX.Element => {
  const storyListLength = storyList.length;

  if (!storyList || storyListLength === 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>) as JSX.Element;
  }

  if (storyListLength === 1) {
    return <StoryCard storyEntry={storyList[0]} />;
  }

  // We should sort the list to make sure the order is proper.
  const sortByOrder = (a, b) => a.order - b.order;

  storyList.sort(sortByOrder);

  return (
    <StoryCardCollectionWrapper>
      {storyList.map((storyEntry, index) => (
        <StoryCard
          storyEntry={storyEntry}
          reversed={alternating && index % 2 !== 0}
          key={simpleHash(storyEntry.title + index)}
        />
      ))}
    </StoryCardCollectionWrapper>
  );
};

export default StoryCardCollection;
