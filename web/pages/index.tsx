import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import useSWR from "swr";
import { GlobalStyle } from "../styles/styles";
import { DarkText, HalfShadow, SaffronYellow } from "../utils/colors";
import AboutMeSectionLarge from "../components/aboutMeLarge";
import { WorkExperienceTimeline } from "../components/workExperienceTimeline";
import { ProjectCardCollection } from "../components/projectCardCollection";

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

export const IndexTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 0.5em auto;
  text-align: center;
  color: ${DarkText};
  background: ${SaffronYellow};
  border: solid ${SaffronYellow};
  border-width: 0.175em 0.35em 0.175em 0.35em;
  box-shadow: 15px 15px 2px 0 ${HalfShadow};
  width: fit-content;
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

  const temp = 1;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Alexis Renderos 🪐</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexisrenderos.com" />
        <meta property="og:title" content="Alexis Renderos" />
        <meta
          property="og:description"
          content="I enable others to do their best work."
        />
        <meta
          property="og:image"
          content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alexis Renderos" />
        <meta
          name="twitter:description"
          content="I enable others to do their best work."
        />
        <meta
          name="twitter:image"
          content="https://alexisrenderos.com/images/goldenGateWithDog.jpeg"
        />
        <meta name="twitter:creator" content="@elusiveplanet" />
      </Head>
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
        <AboutMeSectionLarge />

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
