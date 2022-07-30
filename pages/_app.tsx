import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import darkTheme from "../config/darkTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
