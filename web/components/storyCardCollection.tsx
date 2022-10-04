import styled from "styled-components";
import { StoryCard, StoryEntry } from "./storyCard";
import simpleHash from "../helpers/simpleHash";
import { MIN_TABLET_WIDTH } from "../utils/utils";

type StoryCardCollectionProps = {
  storyList: StoryEntry[];
  alternating?: boolean;
  compact?: boolean;
};

const StoryCardCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-content: center;
  margin: 1.5em auto;
  gap: 5em;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    margin: 1.25em auto;
    gap: 3.5em;
  }
`;

const StoryCardCollection = ({
  storyList = [],
  alternating = true,
  compact = false,
}: StoryCardCollectionProps): JSX.Element => {
  const storyListLength = storyList.length;

  if (!storyList || storyListLength === 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>) as JSX.Element;
  }

  if (storyListLength === 1) {
    return <StoryCard storyEntry={storyList[0]} compact={compact} />;
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
          compact={compact}
          key={simpleHash(storyEntry.title + index)}
        />
      ))}
    </StoryCardCollectionWrapper>
  );
};

export default StoryCardCollection;
