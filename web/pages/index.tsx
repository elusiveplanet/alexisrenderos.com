import styled from "styled-components";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Landing from "../components/landing";
import JuiceboxHeader from "../components/navbar";
import ViewportHeightContainer from "../components/viewportHeightContainer";
import fetcher from "../helpers/fetcher";
import isMobile from "../helpers/isMobile";

// For now defining screen sizes as
// Desktop: Width > 1280px
// Tablet: Width > 768px
// Mobile: Width < Tablet

const IndexBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Home = (): JSX.Element => {
  const [isOnMobile, setIsOnMobile] = useState(false);
  useEffect(() => {
    // component is mounted and window is available
    // Run only once on page mount.
    setIsOnMobile((prev) => isMobile(window));
  }, []);
  const { data: socialLinkData, error: socialLinkDataError } = useSWR(
    "/api/getAllVisibleSocialLinks",
    fetcher
  );

  return (
    <>
      <JuiceboxHeader title="Alexis Renderos" absolute />
      <IndexBody>
        {isOnMobile ? (
          <ViewportHeightContainer>
            <Landing mobile={isOnMobile} socialLinkList={socialLinkData} />
          </ViewportHeightContainer>
        ) : (
          <Landing mobile={isOnMobile} socialLinkList={socialLinkData} />
        )}
      </IndexBody>
    </>
  );
};

export default Home;
