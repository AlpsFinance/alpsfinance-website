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
import Footer from "../component/Footer";
import Tokenomics from "../component/Tokenomics";
import Image from "next/image";
import { Box } from "@mui/material";
import AlpsTokenPresale from "../component/AlpsTokenPresale";

const Home: NextPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

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
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundImage: isLargeScreen
            ? 'url(/alps-bg.png)'
            : "url(/alps-bg.png)",
          
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
            mb: 0,
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
                      height: "50vh",
                    }
                  : {
                      pt: 0,
                      pb: 5,
                    }
              }
            >
              <Grid item sx={{
                fontFamily: "'Poppins', sans-serif",
                color: '#FFFFFF',
              }}>
                <Typography variant={isLargeScreen ? "h3" : "h4"}>
                  <b>Decentralized Social Investing</b>
                </Typography>
              </Grid>
              <Grid container item sx={{
                  padding:'10px',
                  justifyContent:'center',
                  alignItems:'center'
              }}>
                
                <Typography align={'center'} variant={isLargeScreen ? "h5" : "body1"} mx={0} sx={{
                  width:'60%',
                }}>
                  Alps is the simplest way to build and manage your entire DeFi
                  + NFT portfolio across multiple chains from one dashboard.
                  Explore the world of decentralized finance today.
             
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Image
              src={isLargeScreen ? "/alps-desktop.png" : "/phone.png"}
              alt='Picture of Alps Finance UI'
              width={isLargeScreen ? 948 : 271}
              height={isLargeScreen ? 600 : 552}
            />
            
          </Grid>
        </Grid>
        <Grid
                item
                justifyContent='center'
                alignItems='center'
                xs={0}
                md={0}
                sx={{
                  padding:'2rem',
                }}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://app.alps.finance";
                  window.open(AlpsFinanceAppURL, "_blank") ||
                    window.location.replace(AlpsFinanceAppURL);
                }}
                container
              >
              <Button sx={{
                borderRadius: 30,
                color: "#25284B",
                backgroundColor: "white",
                py: 1,
                px:8,
                fontWeight: "bold",
              }}>Launch App</Button>
              </Grid>
      </Box>
      <AlpsTokenPresale isLargeScreen={isLargeScreen} />
      <WhyAlpsFinance isLargeScreen={isLargeScreen}/>
      <Roadmap isLargeScreen={isLargeScreen} />
      <Community isLargeScreen={isLargeScreen} />
      <Tokenomics isLargeScreen={isLargeScreen} />
      <Footer />
    </div>
  );
};

export default Home;
