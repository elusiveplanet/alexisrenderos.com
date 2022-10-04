import styled from "styled-components";
import useSWR from "swr";
import Image from "next/image";
import { AccentText, QuarterShadow } from "../utils/colors";
import { MIN_TABLET_WIDTH } from "../utils/utils";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLinkSize } from "./socialLinkIcon";
import fetcher from "../helpers/fetcher";

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: min(max(1em, 5vw), 2em);

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

const ContactCardImageWrapper = styled.div`
  height: min(max(6em, 21.3vw), 10em);
  width: min(max(6em, 21.3vw), 10em);
  filter: drop-shadow(4px 4px 10px ${QuarterShadow});
  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    height: min(max(12em, 24vw), 14em);
    width: min(max(12em, 24vw), 14em);
    margin-bottom: 1em;
  }
`;

const ContactCardImage = styled(Image)`
  border-radius: 10px;
`;

const FullName = styled.h4`
  font-size: min(max(1.25em, 5vw), 1.5em);
  font-weight: 700;
  text-align: left;
  color: ${AccentText};
  width: max-content;
  height: fit-content;

  @media (min-width: ${MIN_TABLET_WIDTH}px) {
    // On screen >min tablet
    font-size: min(max(1.5em, 3vw), 1.75em);
  }
`;

const JobTitle = styled.p`
  font-size: min(max(0.95em, 2.25vw), 1.25em);
  margin-top: 0.15em;
  font-weight: 300;
`;

const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactCard = () => {
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  return (
    <ContactCardWrapper>
      <ContactCardImageWrapper>
        <ContactCardImage
          src="/images/AlexisOnThePhone.webp"
          layout="responsive"
          width={40}
          height={40}
          alt="Alexis is smiling at the camera while he attempts to make a call using a phone booth located deep in the woods of California."
        />
      </ContactCardImageWrapper>
      <PersonalInfoWrapper>
        <FullName>Alexis Renderos</FullName>
        <JobTitle>Software Engineer</JobTitle>
        {!!socialLinkData && (
          <SocialLinkCollection
            socialLinkList={socialLinkData}
            direction={SocialLinkCollectionDirection.Row}
            size={SocialLinkSize.XSmall}
          />
        )}
      </PersonalInfoWrapper>
    </ContactCardWrapper>
  );
};

export default ContactCard;
