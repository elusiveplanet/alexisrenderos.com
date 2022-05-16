import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";
import { GlobalStyle } from "../styles/styles";
import { WorkExperienceTimeline } from "../components/workExperienceTimeline";
import { ProjectCardCollection } from "../components/projectCardCollection";

const IndexBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

export const Home = (): JSX.Element => {
  const { data: workExperienceData, error: workExperienceDataError } = useSWR(
    "/api/getAllVisibleWorkExperience",
    fetcher
  );
  const { data: projectData, error: projectDataError } = useSWR(
    "/api/getAllVisibleProjects",
    fetcher
  );

  return (
    <>
      <GlobalStyle />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Alexis Renderos</title>
      <IndexBody>
        <h1>Alexis Renderos</h1>
        <h3>👋 Welcome!</h3>
        <h5>I&apos;m currently rebuilding my personal website.</h5>
        <h5>
          The old version is still at{" "}
          <Link href="https://renderos17.github.io" passHref>
            renderos17.github.io
          </Link>
          .
        </h5>
        <h5>
          Designs for the new version can be found on{" "}
          <Link
            href="https://www.figma.com/file/2zSroQb71YqrjcLDHLGiEh/Final-Website-Mock?node-id=548%3A483"
            passHref>
            Figma
          </Link>
          .
        </h5>

        {!!workExperienceData && (
          <WorkExperienceTimeline workExperienceList={workExperienceData} />
        )}
        {!!workExperienceDataError && (
          <p>Error fetching work experience data...</p>
        )}

        {!!projectData && <ProjectCardCollection projectList={projectData} />}
        {!!projectDataError && <p>Error fetching project data...</p>}
      </IndexBody>
    </>
  );
};

export default Home;
