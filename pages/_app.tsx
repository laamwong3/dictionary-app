import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import darkTheme from "../config/darkTheme";
import StateManager from "../contexts/StateManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <StateManager>
          <Component {...pageProps} />
        </StateManager>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
