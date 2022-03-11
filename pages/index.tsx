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
import Footer, { SocialMediaArray, SocialMediaObject } from "../component/Footer";
import Tokenomics from "../component/Tokenomics";
import Image from "next/image";
import { Box } from "@mui/material";
import AlpsTokenPresale from "../component/AlpsTokenPresale";
import IconButton from "@mui/material/IconButton";

const Home: NextPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={styles.container}>
      <Head>
        <title>Alps Finance | Decentralized Social Investing Platform</title>
        <meta
          name='description'
          content='Alps Finance is the simplest way to build and manage your entire DeFi + NFT portfolio across multiple chains from one dashboard. Explore the world of decentralized finance today.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        style={{
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
          pt={isLargeScreen ? 10 : 3}
          sx={{
            color: "white",
            pb: 5,
            mb: 5,
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
                      pt: 0,
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
                <Typography variant={isLargeScreen ? "h5" : "body1"} mx={5}>
                  Alps is the simplest way to build and manage your entire DeFi
                  + NFT portfolio across multiple chains from one dashboard.
                  Explore the world of decentralized finance today.
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
              alt='Picture of Alps Finance UI'
              width={isLargeScreen ? 948 : 271}
              height={isLargeScreen ? 520.07 : 552}
            />
          </Grid>
          <Grid item sx={{
            background: 'white',
            color: '#0D7E06',
            padding: '10px 20px 10px',
            borderRadius: 20,
            boxShadow: '1px 1px 5px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Grid container justifyContent='center' alignItems='center'>
              {SocialMediaArray.map((socialMedia: SocialMediaObject) => {
                const { name, icon: Icon, color, link } = socialMedia;
                return (
                  <Grid item key={name}>
                    <IconButton
                      aria-label={name}
                      sx={{
                        "&:hover": { color },
                        transition: "0.3s",
                        color: "#0D7E06",
                      }}
                      onClick={() =>
                        window.open(link, "_blank") ||
                        window.location.replace(link)
                      }
                    >
                      <Icon />
                    </IconButton>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <AlpsTokenPresale isLargeScreen={isLargeScreen} />
      <WhyAlpsFinance isLargeScreen={isLargeScreen} isMediumScreen={isMediumScreen}/>
      <Roadmap isLargeScreen={isLargeScreen} />
      <Community isLargeScreen={isLargeScreen} />
      <Tokenomics isLargeScreen={isLargeScreen} />
      <Footer />
    </div>
  );
};

export default Home;
