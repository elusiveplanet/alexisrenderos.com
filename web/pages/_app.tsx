import type { AppProps } from "next/app";
import GlobalHead from "../components/globalHead";
import GlobalStyle from "../styles/styles";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalHead />
    <GlobalStyle />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);
export default App;
