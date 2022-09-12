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

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactCardImageWrapper = styled.div`
  height: 14em;
  width: 14em;
  margin-bottom: 1em;
  filter: drop-shadow(4px 4px 10px ${QuarterShadow});
`;

const ContactCardImage = styled(Image)`
  border-radius: 10px;
`;

const FullName = styled.h4`
  font-size: 1.75em;
  font-weight: 700;
  text-align: left;
  color: ${AccentText};
  width: fit-content;
  height: fit-content;

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    font-size: min(max(1.5em, 6vw), 2.5em);
  }
`;

const JobTitle = styled.p`
  font-size: 1.25em;
  margin-top: 0.15em;
  font-weight: 300;
`;

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

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
      <FullName>Alexis Renderos</FullName>
      <JobTitle>Software Engineer</JobTitle>
      {!!socialLinkData && (
        <SocialLinkCollection
          socialLinkList={socialLinkData}
          direction={SocialLinkCollectionDirection.Row}
          size={SocialLinkSize.Small}
        />
      )}
    </ContactCardWrapper>
  );
};

export default ContactCard;
