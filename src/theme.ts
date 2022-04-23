import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
  },
  palette: {
    primary: {
      main: "#25284B",
    },
    secondary: {
      main: "#20264d",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
