import Link from "next/link";
import useSWR from "swr";
import { GlobalStyle } from "../styles/styles";
import { WorkExperienceTimeline } from "../components/workExperienceTimeline";
import { ProjectCardCollection } from "../components/projectCardCollection";

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
      <title>Alexis J. Renderos</title>
      <p>
        Hey! I&apos;m Alexis—my personal website is currently under
        construction, but you can visit the old version at{" "}
        <Link href="https://renderos17.github.io" passHref>
          renderos17.github.io
        </Link>
        .
      </p>
      <p>
        Designs for the new version can be found on{" "}
        <Link
          href="https://www.figma.com/file/2zSroQb71YqrjcLDHLGiEh/Final-Website-Mock?node-id=548%3A483"
          passHref>
          Figma
        </Link>
        .
      </p>

      {!!workExperienceData && (
        <WorkExperienceTimeline workExperienceList={workExperienceData} />
      )}
      {!!workExperienceDataError && (
        <p>Error fetching work experience data...</p>
      )}

      {!!projectData && <ProjectCardCollection projectList={projectData} />}
      {!!projectDataError && <p>Error fetching work experience data...</p>}
    </>
  );
};

export default Home;
