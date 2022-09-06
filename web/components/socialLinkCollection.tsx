import styled from "styled-components";
import simpleHash from "../helpers/simpleHash";
import { SocialLink, SocialLinkIcon, SocialLinkSize } from "./socialLinkIcon";

export enum SocialLinkCollectionDirection {
  Column = "column",
  Row = "row",
}

const SocialLinkCollectionWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.1em 0;
  padding: 0.5em 0;
`;

const SocialLinkCollectionWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  min-width: 68px;
`;

type SocialLinkCollectionProps = {
  socialLinkList: SocialLink[];
  direction: SocialLinkCollectionDirection;
  size: SocialLinkSize;
};

export const SocialLinkCollection = ({
  socialLinkList,
  direction = SocialLinkCollectionDirection.Row,
  size = SocialLinkSize.Medium,
}: SocialLinkCollectionProps): JSX.Element => {
  const socialLinkListLength = socialLinkList.length;

  if (!socialLinkList || socialLinkListLength === 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<></>) as JSX.Element;
  }

  if (socialLinkListLength === 1) {
    return <SocialLinkIcon socialLink={socialLinkList[0]} size={size} />;
  }

  const socialLinkChildren = socialLinkList.map((socialLinkEntry, index) => (
    <SocialLinkIcon
      socialLink={socialLinkEntry}
      size={size}
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
