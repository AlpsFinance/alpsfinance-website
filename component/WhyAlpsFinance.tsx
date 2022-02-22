import { FC, Key } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

interface Props {
  isLargeScreen: Boolean;
  isMediumScreen: Boolean;
}

const showLargePhone = (isRight = false) => {
  return (
    <Grid item p={0} ml={isRight ? 0 : "8rem"} mt={"-5rem"} lg={4}>
      <Image src={"/phone.png"} alt='Phone sample' width={418} height={850} />
    </Grid>
  );
};
const showSmallPhone = () => {
  return (
    <Grid item xs={12} p={0}>
      <Grid container justifyContent='center' alignItems='center' pt={1}>
        <Image src={"/phone.png"} alt='Phone sample' width={271} height={552} />
      </Grid>
    </Grid>
  );
};
const gridData = [
  {
    src: "/bi-lock.svg",
    alt: "Data Ownership and Privacy Icon",
    header: "Data Ownership and Privacy",
    body: "You will have full ownership and privacy on the all your data on the platform, which will be stored on the blockchain, making it censorship resistant.",
  },
  {
    src: "/setting.svg",
    alt: "Easy Account Management Icon",
    header: "Easy Account Management",
    body: "We are making it easy for you to manage your account from a simple user-friendly interface. You no longer need to hop from one protocol to another when you can simply manage and invest all your assets from one dashboard.",
  },
];
const gridDataSecond = [
  {
    src: "/integration.svg",
    alt: "DeFi Integration Icon",
    header: "DeFi Integration",
    body: "Every week you can expect us to role out new DeFi protocol integrations to increase your investment options as we expand our partnership across the ecosystem.",
  },
  {
    src: "/database.svg",
    alt: "Multi-Asset Deriviatives Icon",
    header: "Multi-Asset Deriviatives",
    body: "At the core of our mission is giving you unlimited options. We aim to remove your worries that you might be missing out on some opportunity which is why we're our platform multichain + crosschain so you have multiple assets to explore.",
  },
];
const gridDataThird = [
  {
    src: "/marketplace.svg",
    alt: "Metaverse Marketplace Icon",
    header: "Metaverse Marketplace",
    body: "It's no secret that the Metaverse is the new frontier in the crypto space which is why we're providing you the opportunity to provide liquidity, stake, and invest in a variety of your favorite metaverse platform.",
  },
];

interface gridInterface {
  src: string;
  alt: string;
  header: string;
  body: string;
}

const getGridStructure = (
  grid: gridInterface,
  index: Key,
  isLargeScreen: Boolean
) => {
  return (
    <Grid
      key={index}
      item
      lg={index === 0 ? true : 6}
      xs={12}
      sx={{
        background: "#002400",
        boxShadow: "0px 3px 11px 3px rgba(18, 209, 6, 0.25)",
        borderRadius: "3px",
      }}
      mb={2}
      pb={2}
      mr={isLargeScreen ? 1 : 0}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={{
              width: 80,
              height: isLargeScreen ? 128 : 150,
              ml: 2,
            }}
          >
            <Box
              sx={{
                p: 1,
                boxShadow: "0px 3px 11px 3px rgba(18, 209, 6, 0.25)",
              }}
            >
              <Image
                src={grid.src}
                alt={grid.alt}
                width={isLargeScreen ? 40 : 30}
                height={isLargeScreen ? 40 : 30}
              />
            </Box>
          </ButtonBase>
        </Grid>
        <Grid item xs sm container>
          <Grid item xs container direction='column' spacing={3}>
            <Grid item xs>
              <Typography
                variant={isLargeScreen ? "h6" : "body1"}
                fontWeight={600}
                sx={{ mt: isLargeScreen ? 1 : 2, mb: 1 }}
              >
                {grid.header}
              </Typography>
              <Typography>
                {grid.body}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const WhyAlpsFinance: FC<Props> = (props) => {
  const { isLargeScreen, isMediumScreen } = props;
  return (
    <Box>
      <Grid
        container
        sx={{ pl: 5, pr: 5, mt: isLargeScreen ? 1 : 0 }}
        spacing={3}
      >
        {isLargeScreen ? showLargePhone() : null}
        <Grid item lg={6} xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            justifyContent='center'
            style={{ minHeight: isLargeScreen ? "60vh" : "auto" }}
          >
            <Typography variant={"h4"} fontWeight={600} sx={{ mb: 3 }} textAlign='center'>
              Multi-Chain, Multi-Platform
            </Typography>
            <Typography>
              As we are converging to a multi-chain world, we shall be trying
              our best to support as many (EVM-compatible) chain as possible.
              Furthermore, we shall be making the platform accessible to all
              device, mainly on web and mobile.
            </Typography>
          </Grid>
        </Grid>
        {isLargeScreen ? null : showSmallPhone()}
      </Grid>
      <Box
        sx={{
          backgroundImage: isMediumScreen ? "url(whyAlpsBackground.svg)" : "url(whyAlpsBackgroundMobile.svg)",
          backgroundSize: "cover",
        }}
        color='white'
        pb={isLargeScreen ? 10 : 0}
      >
        <Grid
          container
          sx={{ pl: isLargeScreen ? 10 : 5, pr: 4, mt: isLargeScreen ? 1 : 0 }}
          spacing={3}
        >
          <Grid item lg={6} xs={12} ml={isLargeScreen ? "8rem" : 0} mr={isLargeScreen ? 0 : "2rem"}>
            <Grid
              container
              spacing={0}
              direction='column'
              justifyContent='center'
              style={{ minHeight: isLargeScreen ? "60vh" : "auto" }}
            >
              <Typography variant='h4' fontWeight={600} sx={{ mb: 3 }} textAlign='center'>
                Community
              </Typography>
              <Typography>
                We believe in the power of community, which is why a core
                component of our platform is enabling connection and interaction
                with other users. You are not alone as we are giving you the
                opportunity to connect, follow, engage, learn and compete with
                other users who are investing through our platform.
              </Typography>
              <Button
                color='inherit'
                variant='contained'
                sx={{
                  borderRadius: 30,
                  color: "#0D7E06",
                  backgroundColor: "white",
                  py: isLargeScreen ? 2 : 1,
                  px: 4,
                  fontWeight: "bold",
                  width: "fit-content",
                  mt: 2,
                  textTransform: "none",
                }}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://app.alps.finance";
                  window.open(AlpsFinanceAppURL, "_blank") ||
                    window.location.replace(AlpsFinanceAppURL);
                }}
              >
                Launch The dApp
              </Button>
            </Grid>
          </Grid>
          {isLargeScreen ? showLargePhone(true) : showSmallPhone()}
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='start'
          sx={{ ml: isLargeScreen ? 1 : 0, mb: 3, mt: isLargeScreen ? 0 : 5 }}
        >
          <Typography variant={isLargeScreen ? "h4" : "h6"} fontWeight={600}>
            Why Choose Alps Finance?
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ pl: isLargeScreen ? 5 : 2, pr: isLargeScreen ? 5 : 2 }}
        >
          {gridData.map((grid, index) => {
            return getGridStructure(grid, index, isLargeScreen);
          })}
        </Grid>
        <Grid
          container
          sx={{ pl: isLargeScreen ? 5 : 2, pr: isLargeScreen ? 5 : 2 }}
        >
          {gridDataSecond.map((grid, index) => {
            return getGridStructure(grid, index, isLargeScreen);
          })}
        </Grid>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ pl: isLargeScreen ? 0 : 2, pr: isLargeScreen ? 0 : 2 }}
        >
          {gridDataThird.map((grid, index) => {
            return getGridStructure(grid, index + 1, isLargeScreen);
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyAlpsFinance;
