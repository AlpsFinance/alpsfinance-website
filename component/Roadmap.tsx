import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/system";
import { styled } from "@mui/material/styles";

interface Props {
  isLargeScreen: Boolean;
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#002400",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  paddingLeft: 0,
  borderRadius: "16px",
  minHeight: "537px",
}));

const Roadmap: FC<Props> = (props) => {
  const { isLargeScreen } = props;

  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        <Grid item>
          <Typography variant='h4' fontWeight={600} align='center'>
            <b>Roadmap</b>
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          color: "white",
          borderRadius: "68px",
          p: 5,
          m: isLargeScreen ? 3 : 0,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant='h5'
                      color='#12D106'
                      fontWeight='bold'
                      sx={{ mb: 1 }}
                    >
                      PHASE 1
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant='subtitle1'>
                      Launch Twitter, Telegram, and Discord communities
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Launch landing page for pre-sale and airdrop
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Smart contract for $ALPS token
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      V1 of dApp for multi-chain token and NFTs storage in FTM
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      First phase of Airdrop
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Publish first whitepaper Open pre-sale
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant='h5'
                      color='#12D106'
                      fontWeight='bold'
                      sx={{ mb: 1 }}
                    >
                      PHASE 2
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant='subtitle1'>Close pre-sale</Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>Start IDO</Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Build Multi-chain support in AVAX, BSC, and ETH
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Integrate with lending and borrowing platform such as
                      Abracadabra
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Social investing platform launch for sharing your
                      investment advice and other activities
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Marketing contents for onboarding new crypto investors
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Open $ALPS staking
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant='h5'
                      color='#12D106'
                      fontWeight='bold'
                      sx={{ mb: 1 }}
                    >
                      PHASE 3
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant='subtitle1'>
                      DAO proposals begin, tokenomics, treasury management, and
                      innovation fund deployment.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Enhance the social investing platform launch further
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Receive audits for all smart contracts
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Integration with more DeFi tools
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Connect with bridges
                    </Typography>
                  </li>
                </ul>
              </Item>
            </Grid>
            <Grid item md={3} xs={12}>
              <Item>
                <Grid
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{ pl: 4 }}
                >
                  <Grid item>
                    <Typography
                      variant='h5'
                      color='#12D106'
                      fontWeight='bold'
                      sx={{ mb: 1 }}
                    >
                      PHASE 4
                    </Typography>
                  </Grid>
                </Grid>
                <ul>
                  <li>
                    <Typography variant='subtitle1'>Yield Optimizer</Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Listing in centralised exchanges
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>More audits</Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      DeFi, DAO, and NFT expansion
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Alps Foundation Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
                      Alps Launchpad Launch
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='subtitle1'>
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
