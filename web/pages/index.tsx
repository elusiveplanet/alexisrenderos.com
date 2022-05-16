import Link from "next/link";
import { GlobalStyle } from "../styles/styles";
import { WorkExperienceTimeline } from "../components/workExperienceTimeline";
import useSWR from "swr";

const tempProjects = [
  {
    name: "7Words",
    description:
      "Python-based tool used to check song lyrics for potentially explicit language using the Genius and Spotify APIs. Designed for radio stations.",
  },
  {
    name: "Clark",
    description:
      "60-pound autonomous custom designed and fabricated robot running on ROS.",
  },
];

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
    </>
  );
};

export default Home;
