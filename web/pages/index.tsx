import Link from "next/link";
import { ProjectCardCollection } from "../components/projectCardCollection";
import { GlobalStyle } from "../styles/styles";

const tempProjects = [
  {
    title: "7Words",
    description:
      "Python-based tool used to check song lyrics for potentially explicit language using the Genius and Spotify APIs. Designed for radio stations.",
  },
  {
    title: "Clark",
    description:
      "60-pound autonomous custom designed and fabricated robot running on ROS.",
  },
];

export const Home = (): JSX.Element => (
  <>
    <GlobalStyle />
    <title>Alexis J. Renderos</title>
    <p>
      Hey! I&apos;m Alexis—my personal website is currently under construction,
      but you can visit the old version by clicking here:{" "}
      <Link href="https://renderos17.github.io" passHref>
        renderos17.github.io
      </Link>
    </p>
    <p>
      If you&apos;re interested in reviewing designs for the new version, you
      can review them here on{" "}
      <Link
        href="https://www.figma.com/file/2zSroQb71YqrjcLDHLGiEh/Final-Website-Mock?node-id=548%3A483"
        passHref>
        Figma
      </Link>
      .
    </p>

    <ProjectCardCollection projectList={tempProjects} />
  </>
);

export default Home;
