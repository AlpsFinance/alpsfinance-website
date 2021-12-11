/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/Home.module.css";
import AppBar from "../component/AppBar";
import WhyAlpsFinance from "../component/WhyAlpsFinance";
import Roadmap from "../component/Roadmap";
import Community from "../component/Community";
import Image from "next/image";
import { Box } from "@mui/material";
import AlpsTokenPresale from "../component/AlpsTokenPresale";

const Home: NextPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={styles.container}>
      <Head>
        <title>Alps Finance | Decentralized Social Investing Platform</title>
        <meta
          name='description'
          content='Alps Finance is a Crosschain Asset Tracker and Social Investing Platform to learn, socialize, and manage their finance on the blockchain.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        style={{
          // background: "linear-gradient(rgba(13, 126, 6, 1), rgba(0, 36, 0, 1))",
          background: isLargeScreen
            ? "linear-gradient(169.07deg, #0D7E06 18.8%, #002400 93.74%)"
            : "linear-gradient(130.49deg, #0D7E06 -6.02%, #002400 54.94%)",
          ...(isLargeScreen
            ? {
                borderBottomLeftRadius: "20%",
                borderBottomRightRadius: "85%",
              }
            : {
                borderBottomLeftRadius: "0%",
                borderBottomRightRadius: "60%",
              }),
        }}
      >
        <AppBar />
        <Grid
          container
          spacing={0}
          alignItems='center'
          justifyContent='center'
          pt={10}
          sx={{
            color: "white",
            pb: 5,
          }}
          flexDirection='column'
        >
          <Grid item>
            <Grid
              container
              direction='column'
              justifyContent='center'
              textAlign='center'
              spacing={2}
              sx={
                isLargeScreen
                  ? {
                      height: "30vh",
                    }
                  : {
                      pt: 5,
                      pb: 5,
                    }
              }
            >
              <Grid item>
                <Typography variant={isLargeScreen ? "h3" : "h4"}>
                  <b>Decentralized Social Investing</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant={isLargeScreen ? "h4" : "caption"}>
                  All-in-one dApp to BUY, SELL, TRADE and SHARE!
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://app.alps.finance";
                  window.open(AlpsFinanceAppURL, "_blank") ||
                    window.location.replace(AlpsFinanceAppURL);
                }}
                container
                alignItems='center'
                justifyContent='center'
              >
                <Button
                  color='inherit'
                  variant='contained'
                  sx={{
                    borderRadius: 30,
                    color: "#0D7E06",
                    backgroundColor: "white",
                    p: 2,
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    const AlpsFinanceAppURL = "https://app.alps.finance";
                    window.open(AlpsFinanceAppURL, "_blank") ||
                      window.location.replace(AlpsFinanceAppURL);
                  }}
                >
                  Connect Wallet
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image
              src={isLargeScreen ? "/laptop.png" : "/phone.png"}
              alt='Picture of the author'
              width={isLargeScreen ? 948 : 271}
              height={isLargeScreen ? 520.07 : 552}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Grid>
        </Grid>
      </Box>
      <AlpsTokenPresale isLargeScreen={isLargeScreen} />
      <WhyAlpsFinance isLargeScreen={isLargeScreen}/>
      <Roadmap />
      <Community />
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          background: "linear-gradient(to right, #0d7e06, #00bb89)",
          color: "white",
          p: 2,
        }}
      >
        <Grid item>
          <Typography variant='h6'>&copy; 2021 Alps Labs</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
