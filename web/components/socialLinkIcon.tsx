import styled from "styled-components";
import Image from "next/image";

export enum SocialLinkTarget {
  GitHub = "github-nb.png",
  LinkedIn = "linkedin-nb.png",
  Twitter = "twitter-nb.png",
}

export enum SocialLinkSize {
  Small = 0,
  Medium = 1,
  Large = 2,
}

export type SocialLink = {
  service: SocialLinkTarget;
  url: string;
};

export type SocialLinkIconProps = {
  socialLink: SocialLink;
  size: SocialLinkSize;
};

const SocialLinkServiceIcon = styled.div`
  &:hover {
    filter: brightness(60%);
    transition: all 0.5s ease;
  }
`;

const SocialLinkServiceIconSmall = styled(SocialLinkServiceIcon)`
  height: 1.85em;
  width: 1.85em;
  margin: 0.1em 0.2em 0.1em 0;
  padding: 0.5em 1em 0.5em 0;
`;

const SocialLinkServiceIconMedium = styled(SocialLinkServiceIcon)`
  height: 2.5em;
  width: 2.5em;
  margin: 0.1em;
  padding: 0.5em;
`;

const SocialLinkServiceIconLarge = styled(SocialLinkServiceIcon)`
  height: 3em;
  width: 3em;
  margin: 0.1em;
  padding: 0.5em;
`;

export const SocialLinkIcon = ({ socialLink, size }: SocialLinkIconProps) => {
  const imageLocation = `/images/${SocialLinkTarget[socialLink.service]}`;
  const socialLinkChild = (
    <a href={socialLink.url}>
      <Image
        src={imageLocation}
        layout="responsive"
        width={40}
        height={40}
        alt={`Alexis' ${socialLink.service || "Social Media Profile"}`}
        priority
      />
    </a>
  );

  switch (size) {
    case SocialLinkSize.Small:
      return (
        <SocialLinkServiceIconSmall>
          {socialLinkChild}
        </SocialLinkServiceIconSmall>
      );
    case SocialLinkSize.Medium:
      return (
        <SocialLinkServiceIconMedium>
          {socialLinkChild}
        </SocialLinkServiceIconMedium>
      );
    case SocialLinkSize.Large:
      return (
        <SocialLinkServiceIconLarge>
          {socialLinkChild}
        </SocialLinkServiceIconLarge>
      );
    default:
      return (
        <SocialLinkServiceIconMedium>
          {socialLinkChild}
        </SocialLinkServiceIconMedium>
      );
  }
};
