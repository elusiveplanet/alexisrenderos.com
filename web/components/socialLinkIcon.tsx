import styled from "styled-components";
import Image from "next/image";

export enum SocialLinkTarget {
  GitHub = "github-nb.png",
  LinkedIn = "linkedin-nb.png",
  Twitter = "twitter-nb.png",
}

export type SocialLink = {
  service: SocialLinkTarget;
  url: string;
};

export type SocialLinkIconProps = {
  socialLink: SocialLink;
};

const SocialLinkServiceIcon = styled.div`
  height: 2em;
  width: 2em;
  margin: 0.1em;
  padding: 0.5em;
  &:hover {
    filter: brightness(60%);
    transition: all 0.5s ease;
  }
`;

export const SocialLinkIcon = ({ socialLink }: SocialLinkIconProps) => {
  const imageLocation = `/images/${SocialLinkTarget[socialLink.service]}`;
  return (
    <SocialLinkServiceIcon>
      <a href={socialLink.url}>
        <Image
          src={imageLocation}
          layout="responsive"
          width={40}
          height={40}
          alt={`Alexis' ${socialLink.service || "Social Media Profile"}`}
        />
      </a>
    </SocialLinkServiceIcon>
  );
};
