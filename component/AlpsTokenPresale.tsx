import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { calculateTimeLeft } from "../utility/helper";

interface Props {
  isLargeScreen: Boolean;
}

const AlpsTokenPresale: FC<Props> = (props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { isLargeScreen } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Box
      sx={{
        color: "white",
        borderRadius: "68px",
        background: "linear-gradient(132.36deg, #0D7E06 3.18%, #002400 74.97%)",
        p: 5,
        m: isLargeScreen ? 3 : 0,
      }}
    >
      <Grid
        container
        sx={{
          py: isLargeScreen ? 8 : 3,
          pb: isLargeScreen ? 10 : 0,
        }}
        spacing={3}
      >
        <Grid item xs={12} md={7}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            py={isLargeScreen ? 3 : 0}
            pr={isLargeScreen ? 10 : 0}
          >
            <Typography
              variant='h4'
              fontWeight={600}
              sx={{ mb: 1 }}
              textAlign='center'
            >
              $ALPS Token
            </Typography>
            <Typography>
              $Alps Token is the native utility token of the Alps Finance
              platform which gives you the opportunity to stake in order to earn
              more of the token; get reduced fees for holding our token; earn
              rewards for participating in our member area, gain special access
              to features and exclusive services, aswell as use to participate
              in token sales on our (future) launchpad platform
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid
            container
            justifyContent='center'
            alignItems='start'
            sx={{ ml: isLargeScreen ? 1 : 0 }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(109.06deg, rgba(18, 209, 6, 0.3) 2.72%, rgba(255, 255, 255, 0) 98.2%)",
                boxShadow: "0px 4px 5px 3px rgba(18, 209, 6, 0.1)",
                borderRadius: "10px",
                p: isLargeScreen ? 5 : 3,
              }}
            >
              <Box
                sx={{
                  background: "rgba(0, 36, 0, 0.5)",
                }}
              >
                <Grid
                  container
                  justifyContent='center'
                  alignItems='center'
                  pt={1}
                >
                  TOKEN PRESALE STARTS IN:
                </Grid>

                <Grid container spacing={2}>
                  <Grid item md={6} xs={12} container>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "fit-content",
                        color: "white",
                        textTransform: "uppercase",
                      }}
                    >
                      <Box
                        textAlign='center'
                        sx={{
                          p: 1,
                          m: isLargeScreen ? 1 : 0,
                          fontWeight: "600",
                        }}
                      >
                        <p>{timeLeft.days}</p>
                        <p>days</p>
                      </Box>

                      <Box
                        textAlign='center'
                        sx={{
                          p: 1,
                          m: isLargeScreen ? 1 : 0,
                          fontWeight: "600",
                        }}
                      >
                        <p>{timeLeft.hours}</p>
                        <p>hours</p>
                      </Box>

                      <Box
                        textAlign='center'
                        sx={{
                          p: 1,
                          m: isLargeScreen ? 1 : 0,
                          fontWeight: "600",
                        }}
                      >
                        <p>{timeLeft.minutes}</p>
                        <p>minutes</p>
                      </Box>
                      <Box
                        textAlign='center'
                        sx={{
                          p: 1,
                          m: isLargeScreen ? 1 : 0,
                          fontWeight: "600",
                        }}
                      >
                        <p>{timeLeft.seconds}</p>
                        <p>seconds</p>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={3}
                sx={{ mt: 2 }}
              >
                <Button
                  color='inherit'
                  variant='contained'
                  sx={{
                    borderRadius: 30,
                    color: "#0D7E06",
                    backgroundColor: "white",
                    p: isLargeScreen ? 2 : 1,
                    px: isLargeScreen ? 4 : 3,
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    const AlpsFinanceAppURL = "https://presale.alps.finance";
                    window.open(AlpsFinanceAppURL, "_blank") ||
                      window.location.replace(AlpsFinanceAppURL);
                  }}
                >
                  <Typography
                    variant={isLargeScreen ? "h6" : "body1"}
                    fontWeight={600}
                  >
                    Join Presale
                  </Typography>
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AlpsTokenPresale;
