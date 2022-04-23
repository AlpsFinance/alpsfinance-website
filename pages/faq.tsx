import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "../component/AppBar";
import Footer from "../component/Footer";
import Community from "../component/Community";

const FAQ: NextPage = () => {
  const { palette, breakpoints } = useTheme();
  const isLargeScreen = useMediaQuery(breakpoints.up("md"));

  return (
    <>
      <AppBar />
      <Grid container mt="88px" direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              py: 5,
              color: "white",
              background: `linear-gradient(to right top, ${palette.primary.main}, ${palette.secondary.main})`,
            }}
          >
            <Grid item>
              <Typography
                variant={isLargeScreen ? "h2" : "h4"}
                align="center"
                sx={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                <b>FAQ</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Here are the list of most frequently asked questions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ py: 20 }}>
          <Typography variant={isLargeScreen ? "h4" : "h5"} align="center">
            🚧 Page Under Constructions. 🚧
          </Typography>
        </Grid>
      </Grid>
      <Community />
      <Footer />
    </>
  );
};

export default FAQ;
