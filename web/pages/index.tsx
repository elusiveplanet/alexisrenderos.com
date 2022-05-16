import Link from "next/link";
import styled from "styled-components";
import { GlobalStyle } from "../styles/styles";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";

const IndexBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const IndexTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 0.5em 0;
  text-align: center;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 15px 15px 2px 0 ${HalfShadow};
`;

export const IndexSubtitle = styled.div`
  margin: 0 auto;
  text-align: center;
  h3,
  h5 {
    margin: 0.25em 0;
  }
`;

const HeroContent = styled.div`
  width: 65%;
  margin: 0 auto;
  max-width: 500px;
`;

// const fetcher = async (
//   input: RequestInfo,
//   init: RequestInit,
//   ...args: any[]
// ) => {
//   const res = await fetch(input, init);
//   return res.json();
// };

export const Home = (): JSX.Element => {
  // const { data: workExperienceData, error: workExperienceDataError } = useSWR(
  //   "/api/getAllVisibleWorkExperience",
  //   fetcher
  // );
  // const { data: projectData, error: projectDataError } = useSWR(
  //   "/api/getAllVisibleProjects",
  //   fetcher
  // );

  const temp = 1;

  return (
    <>
      <GlobalStyle />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Alexis Renderos</title>
      <IndexBody>
        <HeroContent>
          <IndexTitle>Alexis Renderos</IndexTitle>
          <IndexSubtitle>
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
            <h5>
              If you&apos;d like to learn more about what I&apos;ve worked on,
              check out my{" "}
              <Link
                href="https://renderos17.github.io/AlexisRenderosResume.pdf"
                passHref>
                Resume
              </Link>
              .
            </h5>
          </IndexSubtitle>
        </HeroContent>

        {/*{!!workExperienceData && (*/}
        {/*  <WorkExperienceTimeline workExperienceList={workExperienceData} />*/}
        {/*)}*/}
        {/*{!!workExperienceDataError && (*/}
        {/*  <p>Error fetching work experience data...</p>*/}
        {/*)}*/}

        {/*{!!projectData && <ProjectCardCollection projectList={projectData} />}*/}
        {/*{!!projectDataError && <p>Error fetching project data...</p>}*/}
      </IndexBody>
    </>
  );
};

export default Home;
