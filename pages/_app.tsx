import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import darkTheme from "../config/darkTheme";
import lightTheme from "../config/lightTheme";
import { useColorModeContext } from "../contexts/ColorModeContext";
import StateManager from "../contexts/StateManager";

function MyApp({ Component, pageProps }: AppProps) {
  const { darkMode } = useColorModeContext();
  return (
    <>
      <StateManager>
        <Component {...pageProps} />
      </StateManager>
    </>
  );
}

export default MyApp;
