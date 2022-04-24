import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#2D325A",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  paddingLeft: 0,
  borderRadius: "16px",
  minHeight: "520px",
}));

const Roadmap: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ paddingTop: 24, paddingBottom: 24 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography
            variant="h4"
            fontWeight={600}
            align="center"
            color="secondary"
          >
            <b>Roadmap</b>
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          color: "white",
          borderRadius: "68px",
          p: 3,
          m: isLargeScreen ? 3 : 0,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      color="#ffffff"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      PHASE 1
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant="subtitle1">
                      Twitter, Telegram, and Discord communities Launch
                    </Typography>
                  </li>
                  {/* <li>
                    <Typography variant="subtitle1">
                      Launch landing page for pre-sale and airdrop
                    </Typography>
                  </li> */}
                  <li>
                    <Typography variant="subtitle1">
                      $ALPS ERC20 Token
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      $ALPS ERC721 NFT Avatar
                    </Typography>
                  </li>
                  {/* <li>
                    <Typography variant="subtitle1">
                      First phase of Airdrop
                    </Typography>
                  </li> */}
                  <li>
                    <Typography variant="subtitle1">
                      Li.Fi Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Liquidity Pools Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Publish Whitepaper V1
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      MVP Launch !!!🚀
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      color="#fff"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      PHASE 2
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  {/* <li>
                    <Typography variant="subtitle1">Close pre-sale</Typography>
                  </li> */}
                  <li>
                    <Typography variant="subtitle1">Start IDO</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Build Multi-chain support in AVAX, BSC, and ETH
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Fiat On-Ramp and Off-Ramp Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Web3Auth Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Lending and Borrowing Protocol Integration, e.g.
                      Abracadabra
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Metaverse Marketplace Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Marketing contents for onboarding new crypto investors
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      $ALPS Staking Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      $ALPS ERC721 Name Service (.alps)
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      color="#fff"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      PHASE 3
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant="subtitle1">
                      DAO proposals begin, tokenomics, treasury management, and
                      innovation fund deployment.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Enhance the social investing platform launch further
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Receive audits for all smart contracts
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Integration with more DeFi tools
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Metaverse Marketplace Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      DAO Investment Fund Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Gamified Social Media Feature Launch
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      color="#fff"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      PHASE 4
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant="subtitle1">Yield Optimizer</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Listing in centralised exchanges
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">More audits</Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      DeFi, DAO, and NFT expansion
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Incentivised in-app user social media interaction
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Alps Foundation Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Alps Launchpad Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1">
                      Mobile App Launch
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Roadmap;
