import { FC, Key } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useTheme } from "@mui/system";

interface Props {
  isLargeScreen: Boolean;
  isMediumScreen?: Boolean;
}

const showLargePhone = (isRight = false) => {
  return (
    <Grid item p={0} ml={isRight ? 0 : "2rem"} mt={"3rem"} lg={0}>
      <Image
        src={"/alps-transparent.png"}
        alt="Phone sample"
        width={550}
        height={600}
      />
    </Grid>
  );
};
const showSmallPhone = () => {
  return (
    <Grid item xs={12} p={0}>
      <Grid container justifyContent="center" alignItems="center" pt={1}>
        <Image src={"/phone.png"} alt="Phone sample" width={271} height={552} />
      </Grid>
    </Grid>
  );
};
const gridData = [
  {
    src: "/bi-lock.svg",
    alt: "Asset Ownership",
    header: "Data Ownership and Privacy",
    body: "Full asset control and ownership that is censorship resistant from any third-party.",
  },
  {
    src: "/setting.svg",
    alt: "Easy Account Management Icon",
    header: "Easy Account Management",
    body: "Simple user interface to manage your DeFi investments in multiple wallets, smart contract wallets, and DAOs.",
  },
  {
    src: "/integration.svg",
    alt: "DeFi Integration Icon",
    header: "DeFi Integration",
    body: "Integration with numerous DeFi protocols across different blockchains.",
  },
  {
    src: "/database.svg",
    alt: "Multi-Asset Icon",
    header: "Multi-Asset",
    body: "Invest in unlimited options of DeFi products and take advantage of DeFi's money lego feature to the maximum from single dashboard.",
  },
  {
    src: "/marketplace.svg",
    alt: "Metaverse Marketplace Icon",
    header: "Metaverse Marketplace",
    body: "Trade & stake your favorite NFTs throughout multiple NFT Marketplace & Metaverse game.",
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
  index: number,
  isLargeScreen: Boolean
) => {
  return (
    <Grid
      key={index}
      item
      lg={4}
      md={6}
      xs={12}
      sx={{
        borderRadius: "3px",
      }}
      mb={2}
      py={1}
      px={isLargeScreen ? 5 : 7}
    >
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Image
            src={grid.src}
            alt={grid.alt}
            width={isLargeScreen ? 40 : 70}
            height={isLargeScreen ? 40 : 70}
          />
        </Grid>
        <Grid item>
          <Typography
            variant={isLargeScreen ? "h6" : "body1"}
            align="center"
            fontWeight={600}
            sx={{ mt: isLargeScreen ? 0 : 2, mb: 0 }}
          >
            {grid.header}
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center">{grid.body}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
const WhyAlpsFinance: FC<Props> = (props) => {
  const { isLargeScreen, isMediumScreen } = props;
  const { palette } = useTheme();

  return (
    <Box>
      {/* <Grid
        container
        sx={{
          backgroundColor: "#2D325A",
          pl: 5,
          pr: 5,
          mt: isLargeScreen ? 0 : 0,
        }}
        spacing={3}
      >
        {isLargeScreen ? showLargePhone() : null}
        <Grid item lg={6} xs={12}>
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            style={{
              minHeight: isLargeScreen ? "60vh" : "auto",
              paddingTop: "7rem",
              paddingLeft: isLargeScreen ? "5rem" : "0rem",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ mb: 0, color: "#ffffff" }}
              textAlign="center"
            >
              Multi-Chain, Multi-Platform
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                color: "#ffffff",
                fontSize: "1.5rem",
                paddingTop: "2rem",
              }}
            >
              As we are converging to a multi-chain world, we shall be trying
              our best to support as many (EVM-compatible) chain as possible.
              Furthermore, we shall be making the platform accessible to all
              device, mainly on web and mobile.
            </Typography>
          </Grid>
        </Grid>
        {isLargeScreen ? null : showSmallPhone()}
      </Grid> */}
      <Box
        sx={{
          background: `linear-gradient(to right top, ${palette.primary.main}, ${palette.secondary.main})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        color="white"
        py={5}
      >
        {/* <Grid
          container
          sx={{ pl: isLargeScreen ? 7 : 5, pr: 4, mt: isLargeScreen ? 0 : 0 }}
          spacing={3}
        >
          <Grid
            item
            lg={6}
            xs={12}
            ml={isLargeScreen ? "8rem" : 0}
            mr={isLargeScreen ? 0 : "2rem"}
          >
            <Grid
              container
              spacing={0}
              // direction='column'
              justifyContent="center"
              style={{
                minHeight: isLargeScreen ? "60vh" : "auto",
                paddingTop: "7rem",
                paddingBottom: "4rem",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ mb: 3 }}
                textAlign="center"
              >
                Community
              </Typography>
              <Typography
                textAlign="center"
                justifyContent="center"
                sx={{
                  fontSize: "1.5rem",
                  paddingTop: "2rem",
                }}
              >
                We believe in the power of community, which is why a core
                component of our platform is enabling connection and interaction
                with other users. You are not alone as we are giving you the
                opportunity to connect, follow, engage, learn and compete with
                other users who are investing through our platform.
              </Typography>
            </Grid>
          </Grid>
          {isLargeScreen ? showLargePhone(true) : showSmallPhone()}
        </Grid> */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ ml: isLargeScreen ? 1 : 0 }}
          mb={isLargeScreen ? 0 : 3}
        >
          <Typography variant="h4" fontWeight={600}>
            Why Alps Finance?
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
      </Box>
    </Box>
  );
};

export default WhyAlpsFinance;
