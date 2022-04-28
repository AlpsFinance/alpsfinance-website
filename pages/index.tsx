/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar, { AppBarMode } from "../component/AppBar";
import WhyAlpsFinance from "../component/WhyAlpsFinance";
import Roadmap from "../component/Roadmap";
import Community from "../component/Community";
import Footer from "../component/Footer";
import Tokenomics from "../component/Tokenomics";
import Image from "next/image";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import AlpsFeatures from "../component/AlpsFeatures";

const Home: NextPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Head>
        <title>Alps Finance | All-in-one Social + DeFi</title>
        <meta
          name="description"
          content="Alps Finance is the simplest way to build and manage your entire DeFi + NFT portfolio across multiple chains from one dashboard. Explore the world of decentralized finance today."
        />
      </Head>
      <AppBar mode={AppBarMode.HOME} />
      <Grid
        container
        alignItems="center"
        sx={{
          color: "white",
          px: isLargeScreen ? 5 : 3,
          background: "linear-gradient(to right, #597DFD, #B091F9)",
          height: "calc(100vh)",
        }}
      >
        <Grid
          container
          alignItems="center"
          mt={isLargeScreen ? "80px" : 0}
          spacing={isLargeScreen ? 0 : 2}
        >
          <Grid item xs={12} md={4}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={
                isLargeScreen
                  ? {}
                  : {
                      pt: 10,
                      px: 3,
                    }
              }
            >
              <Grid
                item
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                <Slide
                  direction="right"
                  in
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <Grid container alignItems="center" justifyContent="center">
                    <Typography
                      variant={isLargeScreen ? "h3" : "h5"}
                      align="center"
                    >
                      <b>
                        Social <br />
                        + <br />
                        DeFi
                      </b>
                    </Typography>
                  </Grid>
                </Slide>
              </Grid>
              {/* <Grid
                item
                sx={{
                  padding: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  align={isLargeScreen ? "left" : "center"}
                  variant={isLargeScreen ? "h6" : "body1"}
                  mx={0}
                >
                  Alps is the simplest way to build and manage your entire DeFi
                  + NFT portfolio across multiple chains from one dashboard.
                  Explore the world of decentralized finance today.
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="flex-end">
              <Fade in timeout={1000}>
                <Grid item>
                  <Image
                    src="/app/desktop.png"
                    alt="Picture of Alps Finance UI"
                    width={850}
                    height={550}
                  />
                </Grid>
              </Fade>
            </Grid>
          </Grid>
          {!isLargeScreen && (
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 3,
                  py: 1,
                  px: 5,
                  fontWeight: "bold",
                  background: "white",
                }}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://app.alps.finance";
                  window.open(AlpsFinanceAppURL, "_blank") ||
                    window.location.replace(AlpsFinanceAppURL);
                }}
              >
                <Typography>
                  <b
                    style={{
                      background: "linear-gradient(to right, #597DFD, #B091F9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Launch App
                  </b>
                </Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
      <WhyAlpsFinance />
      <AlpsFeatures />
      <Roadmap />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
