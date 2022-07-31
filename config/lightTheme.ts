import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let lightTheme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 100,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: { default: "#fff" },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
