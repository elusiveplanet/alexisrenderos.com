import styled from "styled-components";
import Image from "next/image";

enum SocialLinkTarget {
  GitHub = "github-nb.webp",
  LinkedIn = "linkedin-nb.webp",
  Twitter = "twitter-nb.webp",
}

export enum SocialLinkSize {
  XSmall = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
}

export type SocialLink = {
  service: SocialLinkTarget;
  url: string;
};

type SocialLinkIconProps = {
  socialLink: SocialLink;
  size: SocialLinkSize;
};

const SocialLinkServiceIcon = styled.div`
  &:hover {
    filter: brightness(60%);
    transition: all 0.5s ease;
  }
`;

const SocialLinkServiceIconExtraSmall = styled(SocialLinkServiceIcon)`
  --service-icon-dimension-xs: min(max(1.2em, 3vw), 1.55em);
  height: var(--service-icon-dimension-xs);
  width: var(--service-icon-dimension-xs);
  margin: 0.1em 0.2em 0.1em 0;
  padding: 0.5em calc(var(--service-icon-dimension-xs) / 2) 0.5em 0;
`;

const SocialLinkServiceIconSmall = styled(SocialLinkServiceIcon)`
  --service-icon-dimension-s: min(max(2em, 6vw), 2.75em);
  height: var(--service-icon-dimension-s);
  width: var(--service-icon-dimension-s);
  margin: 0.1em 0.2em 0.1em 0;
  padding: 0.5em calc(var(--service-icon-dimension-s) / 1.75) 0.5em 0;
`;

const SocialLinkServiceIconMedium = styled(SocialLinkServiceIcon)`
  height: 2.75em;
  width: 2.75em;
  padding: 0.75em;
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
    case SocialLinkSize.XSmall:
      return (
        <SocialLinkServiceIconExtraSmall>
          {socialLinkChild}
        </SocialLinkServiceIconExtraSmall>
      );
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
