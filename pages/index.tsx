/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
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
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import AlpsFeatures from "../component/AlpsFeatures";
import ReactTypingEffect from "react-typing-effect";

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
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PM2VXFC');
        `}
      </Script>
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
          <Grid item xs={12} md={5} lg={4}>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={
                isLargeScreen
                  ? {}
                  : {
                      pt: 10,
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
                  <Grid
                    container
                    alignItems="center"
                    justifyContent={isLargeScreen ? "start" : "center"}
                  >
                    <Typography
                      variant={isLargeScreen ? "h4" : "h5"}
                      align={isLargeScreen ? "left" : "center"}
                    >
                      <b>
                        Expand your Network.
                        <br /> Grow your Net Worth.
                      </b>
                    </Typography>
                  </Grid>
                </Slide>
                <Grid
                  container
                  mt={1}
                  alignItems="center"
                  justifyContent={isLargeScreen ? "start" : "center"}
                >
                  <Grid item>
                    <Typography
                      variant={isLargeScreen ? "h6" : "subtitle1"}
                      sx={{ fontFamily: "'Quicksand', sans-serif" }}
                      align={isLargeScreen ? "left" : "center"}
                    >
                      Be a 21st Century Investor. <br />
                      Build your{" "}
                      <b>
                        <ReactTypingEffect
                          text={[
                            "Cross-Chain DeFi strategy.",
                            "Cross-Chain Farming strategy.",
                            "NFT Metaverse DAO.",
                            "Hedge Fund DAO.",
                          ]}
                          speed={100}
                        />
                      </b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
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
                          background:
                            "linear-gradient(to right, #597DFD, #B091F9)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Launch App
                      </b>
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
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
                      const AlpsFinanceAppURL =
                        "https://storageapi.fleek.co/yosephks-team-bucket/AlpsFinanceWhitepaper.pdf";
                      window.open(AlpsFinanceAppURL, "_blank") ||
                        window.location.replace(AlpsFinanceAppURL);
                    }}
                  >
                    <Typography>
                      <b
                        style={{
                          background:
                            "linear-gradient(to right, #597DFD, #B091F9)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Whitepaper
                      </b>
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
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
