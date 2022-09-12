import styled from "styled-components";
import useSWR from "swr";
import JuiceboxHeader from "../components/navbar";
import GlobalFooter from "../components/footer";
import ContactWidget from "../components/contactWidget";
import ContactCard from "../components/contactCard";
import { HalfShadow, SlightShadow } from "../utils/colors";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const ContactCollection = styled.div`
  margin: 5em 0;
  box-shadow: 25px 25px 5px 0 ${HalfShadow};
  border-radius: 16px;
  border: 5px ${SlightShadow} solid;
  transition: box-shadow 250ms ease-out;

  :where(:hover, :focus-visible) {
    box-shadow: 22px 22px 5px 0 ${HalfShadow};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5em;
  margin: 5em;
`;

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export const About = (): JSX.Element => {
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );
  return (
    <Body>
      <JuiceboxHeader title="Alexis Renderos" />
      <ContactCollection>
        <ContactWrapper>
          <ContactCard />
          <ContactWidget />
        </ContactWrapper>
      </ContactCollection>
      <GlobalFooter />
    </Body>
  );
};

export default About;
