import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";
import {
  DarkText,
  HalfShadow,
  LightText,
  SaffronYellow,
  SignificantlyDarken,
  SlightlyDarken,
} from "../utils/colors";
import { MIN_TABLET_WIDTH } from "../utils/utils";
import {
  SocialLinkCollection,
  SocialLinkCollectionDirection,
} from "./socialLinkCollection";
import { SocialLinkSize } from "./socialLinkIcon";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${SlightlyDarken};
  background-color: ${SignificantlyDarken};
  width: 100%;
  margin-top: 2.5em;
  min-height: 10em;
  h6 {
    font-size: 1.15em;
    font-weight: 300;
    margin: 2em auto 1.25em auto;
    text-align: center;
    color: ${LightText};
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    min-height: 7.5em;
  }
`;

const FooterItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0;
  width: 75%;
  max-width: 1250px;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    width: 90%;
  }
`;

const FooterCollectionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FooterCollectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: auto;
`;

const PageTitleCard = styled.a`
  font-size: 1.25em;
  font-weight: 700;
  text-align: left;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 8px 8px 1px 0 ${HalfShadow};
  width: fit-content;
  height: fit-content;
  transition: box-shadow 500ms ease-out;
  :where(:hover, :focus-visible) {
    box-shadow: 6px 6px 1px 0 ${HalfShadow};
  }

  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 1.15em;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.825em;
  font-weight: 300;
  @media (max-width: ${MIN_TABLET_WIDTH}px) {
    font-size: 0.75em;
  }
`;

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

// add a no social option for use on contact and landing

const GlobalFooter = () => {
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  return (
    <FooterWrapper>
      <FooterItemWrapper>
        <FooterCollectionOne>
          <Link href="/" passHref>
            <PageTitleCard>Alexis Renderos</PageTitleCard>
          </Link>
          <CopyrightText>
            Copyright ©{new Date().getFullYear()} Alexis Renderos
          </CopyrightText>
        </FooterCollectionOne>
        <FooterCollectionTwo>
          {!!socialLinkData && (
            <SocialLinkCollection
              socialLinkList={socialLinkData}
              direction={SocialLinkCollectionDirection.Row}
              size={SocialLinkSize.XSmall}
            />
          )}
        </FooterCollectionTwo>
      </FooterItemWrapper>
    </FooterWrapper>
  );
};

export default GlobalFooter;
