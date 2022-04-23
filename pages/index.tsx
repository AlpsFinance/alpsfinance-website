/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/Home.module.css";
import AppBar from "../component/AppBar";
import WhyAlpsFinance from "../component/WhyAlpsFinance";
import Roadmap from "../component/Roadmap";
import Community from "../component/Community";
import Footer from "../component/Footer";
import Tokenomics from "../component/Tokenomics";
import Image from "next/image";
import Box from "@mui/material/Box";
// import AlpsTokenPresale from "../component/AlpsTokenPresale";

const Home: NextPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={styles.container}>
      <Head>
        <title>Alps Finance | Decentralized Social Investing Platform</title>
        <meta
          name="description"
          content="Alps Finance is the simplest way to build and manage your entire DeFi + NFT portfolio across multiple chains from one dashboard. Explore the world of decentralized finance today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <Box
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: isLargeScreen
            ? "url(/alps-bg.png)"
            : "url(/alps-bg.png)",
        }}
      >
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          pt={isLargeScreen ? 20 : 3}
          sx={{
            color: "white",
          }}
          flexDirection="column"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              spacing={2}
              sx={
                isLargeScreen
                  ? {
                      width: "65vw",
                    }
                  : {
                      pt: 10,
                      pb: 5,
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
                <Grid container alignItems="center" justifyContent="center">
                  <Typography variant={isLargeScreen ? "h3" : "h5"}>
                    <b style={{ fontFamily: "'Press Start 2P', cursive" }}>
                      Decentralized Social Investing
                    </b>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  padding: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  align="center"
                  variant={isLargeScreen ? "h5" : "body1"}
                  mx={0}
                >
                  Alps is the simplest way to build and manage your entire DeFi
                  + NFT portfolio across multiple chains from one dashboard.
                  Explore the world of decentralized finance today.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image
              src="/alps-desktop.png"
              alt="Picture of Alps Finance UI"
              width={isLargeScreen ? 948 : 350}
              height={isLargeScreen ? 600 : 200}
            />
          </Grid>
        </Grid>
      </Box>
      {/* <AlpsTokenPresale isLargeScreen={isLargeScreen} /> */}
      <WhyAlpsFinance isLargeScreen={isLargeScreen} />
      <Roadmap isLargeScreen={isLargeScreen} />
      <Tokenomics isLargeScreen={isLargeScreen} />
      <Community isLargeScreen={isLargeScreen} />
      <Footer />
    </div>
  );
};

export default Home;
