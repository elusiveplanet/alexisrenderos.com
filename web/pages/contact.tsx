import styled from "styled-components";
import JuiceboxHeader from "../components/navbar";
import GlobalFooter from "../components/footer";
import {
  HalfShadow,
  PrimaryBackgroundColor,
  SlightShadow,
} from "../utils/colors";
import SectionDivider from "../components/sectionDivider";
import ContactCard from "../components/contactCard";
import ContactWidget from "../components/contactWidget";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: 100vh;
  min-height: 800px;
`;

const ContactCollection = styled.div`
  position: absolute;
  margin-top: 10em;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${PrimaryBackgroundColor} center;
  background-size: 100vw 100vh;
  box-shadow: 25px 25px 5px 0 ${HalfShadow};
  border-radius: 16px;
  border: 5px ${SlightShadow} solid;
  transition: box-shadow 250ms ease-out;
  :where(:hover, :focus-visible) {
    box-shadow: 22px 22px 5px 0 ${HalfShadow};
  }
  gap: 5em;
  padding: 5em;
`;

const ContactAndDividerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const Contact = (): JSX.Element => (
  <>
    <JuiceboxHeader title="Alexis Renderos" altColor />
    <ContactBody>
      <ContactAndDividerWrapper>
        <SectionDivider />
        <ContactCollection>
          <ContactWrapper>
            <ContactCard />
            <ContactWidget />
          </ContactWrapper>
        </ContactCollection>
      </ContactAndDividerWrapper>
    </ContactBody>
    <GlobalFooter />
  </>
);

export default Contact;
