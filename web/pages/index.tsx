import Link from 'next/link'

export const Home = (): JSX.Element => (
  <div className="container">
    <meta charSet="utf-8" />
    <title>Alexis J. Renderos</title>
    <p>Hey! I'm Alexis—my personal website is currently under construction, but you can visit the old version by clicking here: <Link href={"https://renderos17.github.io"} passHref={true}>renderos17.github.io</Link></p>
  </div>
)

export default Home
