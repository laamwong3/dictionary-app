import { CssBaseline, ThemeProvider } from "@mui/material";
import darkTheme from "../config/darkTheme";
import lightTheme from "../config/lightTheme";
import ColorModeContext, { useColorModeContext } from "./ColorModeContext";
import SearchBarContext from "./SearchBarContext";

interface StateManagerProps {
  children: React.ReactNode;
}

const StateManager = ({ children }: StateManagerProps) => {
  const { darkMode } = useColorModeContext();
  return (
    <ColorModeContext>
      <SearchBarContext>{children}</SearchBarContext>;
    </ColorModeContext>
  );
};

export default StateManager;
