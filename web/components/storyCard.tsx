import styled from "styled-components";
import Image from "next/image";
import { AccentText, LightText, QuarterShadow } from "../utils/colors";
import { ImagePath } from "../helpers/types";

// Story Card
// This component is used to display a single story entry.
// It also renders an optional single square image on the left or right side of the card.
export type StoryEntry = {
  order: number;
  title: string;
  body: string;
  image?: ImagePath;
};

type StoryCardProps = {
  storyEntry: StoryEntry;
  reversed?: boolean;
};

const StoryCardHeading = styled.h3`
  font-size: 2em;
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.5em;
  color: ${AccentText};
`;

const StoryCardBodyText = styled.p`
  font-size: 1.6em;
  font-weight: 400;
  line-height: 125%;
  text-align: left;
  color: ${LightText};
`;

const StoryCardWrapper = styled.div.attrs<{
  reversed?: boolean;
}>((props) => ({
  reversed: props.reversed || false,
}))<{ reversed?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  align-items: center;
  align-content: center;
  margin: 1em auto;
  gap: ${(props) => (props.reversed ? "3.5em" : "2em")};
`;

const StoryCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const StoryCardImageWrapper = styled.div`
  height: 14em;
  width: 14em;
  margin: 2em 0;
  filter: drop-shadow(4px 4px 10px ${QuarterShadow});
`;

const StoryCardImage = styled(Image)`
  border-radius: 10px;
`;

export const StoryCard = ({ storyEntry, reversed = false }: StoryCardProps) => (
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
