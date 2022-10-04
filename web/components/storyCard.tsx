import styled from "styled-components";
import Image from "next/image";
import { AccentText, LightText, QuarterShadow } from "../utils/colors";
import { ImagePath } from "../helpers/types";
import { MIN_TABLET_WIDTH } from "../utils/utils";

// Story Card
// This component is used to display a single story entry.
// It also renders an optional single square image on the left or right side of the card.

// Story Card also has a compact version, selected by passing the `compact` prop.
// This version is used to display a single story entry in a compact format.
// It is primarily used in mobile layouts, but can also be used to save space.
// An optional single square image is rendered on the left or right side of the card's body text.

export type StoryEntry = {
  order: number;
  title: string;
  body: string;
  image?: ImagePath;
};

type StoryCardProps = {
  storyEntry: StoryEntry;
  reversed?: boolean;
  compact?: boolean;
};

const StoryCardHeading = styled.h3`
  font-weight: 700;
  font-size: min(max(1.25em, 4vw), 1.5em);
  line-height: 125%;
  text-align: left;
  color: ${AccentText};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 2em;
    font-weight: 500;
  }
`;

const StoryCardBodyText = styled.p`
  font-size: min(max(1em, 3.5vw), 1.25em);
  line-height: 150%;
  font-weight: 400;
  text-align: left;
  color: ${LightText};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 1.6em;
    line-height: 140%;
  }
`;

const StoryCardWrapper = styled.div.attrs<{
  reversed?: boolean;
}>((props) => ({
  reversed: props.reversed || false,
}))<{ reversed?: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  margin: 1em auto;
  gap: ${(props) => (props.reversed ? "3.5em" : "2em")};
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
    max-width: 80%;
  }
`;

const StoryCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-width: 615px;
`;

const StoryCardImageWrapper = styled.div`
  height: min(max(8em, 21.3vw), 10em);
  width: min(max(8em, 21.3vw), 10em);
  margin: 0.25em 0;
  flex-shrink: 0;
  filter: drop-shadow(4px 4px 10px ${QuarterShadow});
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    height: min(max(12em, 20vw), 14em);
    width: min(max(12em, 20vw), 14em);
    //margin: 2em 0;
  }
`;

const StoryCardImage = styled(Image)`
  border-radius: 10px;
`;

const CompactStoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  margin: 1em 1.25em;
  gap: 0.5em;
  max-width: 500px;
`;

const StoryCardTextAndImageWrapper = styled.div.attrs<{
  reversed?: boolean;
}>((props) => ({
  reversed: props.reversed || false,
}))<{ reversed?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  max-width: 600px;
  gap: 1em;
`;

export const StoryCard = ({
  storyEntry,
  reversed = false,
  compact = false,
}: StoryCardProps) =>
  compact ? (
    <CompactStoryCardWrapper>
      <StoryCardTextWrapper>
        <StoryCardHeading>{storyEntry.title}</StoryCardHeading>
      </StoryCardTextWrapper>
      <StoryCardTextAndImageWrapper reversed={reversed}>
        {!!storyEntry.image && (
          <StoryCardImageWrapper>
            <StoryCardImage
              src={storyEntry.image.imagePath}
              layout="responsive"
              width={40}
              height={40}
              alt={
                storyEntry.image.imageAltText ||
                "Alt text unavailable. Apologies! Let me know and I'll fix it."
              }
            />
          </StoryCardImageWrapper>
        )}
        <StoryCardBodyText>{storyEntry.body}</StoryCardBodyText>
      </StoryCardTextAndImageWrapper>
    </CompactStoryCardWrapper>
  ) : (
    <StoryCardWrapper reversed={reversed}>
      <StoryCardTextWrapper>
        <StoryCardHeading>{storyEntry.title}</StoryCardHeading>
        <StoryCardBodyText>{storyEntry.body}</StoryCardBodyText>
      </StoryCardTextWrapper>
      {!!storyEntry.image && (
        <StoryCardImageWrapper>
          <StoryCardImage
            src={storyEntry.image.imagePath}
            layout="responsive"
            width={40}
            height={40}
            alt={
              storyEntry.image.imageAltText ||
              "Alt text unavailable. Apologies! Let me know and I'll fix it."
            }
          />
        </StoryCardImageWrapper>
      )}
    </StoryCardWrapper>
  );
