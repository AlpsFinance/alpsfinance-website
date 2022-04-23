import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily:
      "Poppins,Helvetica,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji",
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
