import styled from "styled-components";
import simpleHash from "../helpers/simpleHash";
import { SocialLink, SocialLinkIcon } from "./socialLinkIcon";

export enum SocialLinkCollectionDirection {
  Column = "column",
  Row = "row",
}

export const SocialLinkCollectionWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.1em;
  padding: 0.4em;
`;

export const SocialLinkCollectionWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1em;
  padding: 0.4em;
`;

export type SocialLinkCollectionProps = {
  socialLinkList: SocialLink[];
  direction: SocialLinkCollectionDirection;
};

export const SocialLinkCollection = ({
  socialLinkList,
  direction = SocialLinkCollectionDirection.Row,
}: SocialLinkCollectionProps): JSX.Element => {
  const socialLinkListLength = socialLinkList.length;

  if (!socialLinkList || socialLinkListLength === 0) {
    return {} as JSX.Element;
  }

  if (socialLinkListLength === 1) {
    return <SocialLinkIcon socialLink={socialLinkList[0]} />;
  }

  const socialLinkChildren = socialLinkList.map((socialLinkEntry, index) => (
    <SocialLinkIcon
      socialLink={socialLinkEntry}
      key={simpleHash(socialLinkEntry.service + socialLinkEntry.url + index)}
    />
  ));

  return direction === SocialLinkCollectionDirection.Column ? (
    <SocialLinkCollectionWrapperColumn>
      {socialLinkChildren}
    </SocialLinkCollectionWrapperColumn>
  ) : (
    <SocialLinkCollectionWrapperRow>
      {socialLinkChildren}
    </SocialLinkCollectionWrapperRow>
  );
};
