import { createGlobalStyle, ThemeProvider } from "styled-components";
import '../styles/globals.css'
import { AppProps } from 'next/app'
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
  font-family: 'Inter', sans-serif;

  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};


export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}