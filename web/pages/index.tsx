import Link from 'next/link'

export const Home = (): JSX.Element => (
  <div className="container">
    <meta charSet="utf-8" />
    <title>Alexis J. Renderos</title>
    <p>Hey! I'm Alexis—my personal website is currently under construction, but you can visit the old version by clicking here: <Link href={"https://renderos17.github.io"} passHref={true}>renderos17.github.io</Link></p>
    <p>If you're interested in reviewing designs for the new version, you can review them here on <Link href={"https://www.figma.com/file/2zSroQb71YqrjcLDHLGiEh/Final-Website-Mock?node-id=548%3A483"} passHref={true}>Figma</Link>.</p>
  </div>
)

export default Home
