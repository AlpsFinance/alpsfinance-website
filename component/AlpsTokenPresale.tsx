import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { calculateTimeLeft } from "../utility/helper";

const AlpsTokenPresale: FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <Box
      sx={{
        color: "white",
        borderRadius: "",
        background: "#2D325A",
        p: 5,
      }}
    >
      <Grid
        container
        sx={{
          py: isLargeScreen ? 8 : 3,
          px: isLargeScreen ? 25 : 3,
        }}
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ mb: 1, pb: 3 }}
              align="center"
            >
              $ALPS Token
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: "1.5rem",
              }}
            >
              $Alps Token is the native utility token of the Alps Finance
              platform which gives you the opportunity to stake in order to earn
              more of the token; get reduced fees for holding our token; earn
              rewards for participating in our member area, gain special access
              to features and exclusive services, aswell as use to participate
              in token sales on our (future) launchpad platform
            </Typography>
          </Grid>
        </Grid>
        {/* Will be uncommentetd later when needed */}
        {/* <Grid item xs={12} md={5}>
          <Grid
            container
            justifyContent='center'
            alignItems='start'
            sx={{ ml: isLargeScreen ? 1 : 0,  "@media (max-width: 780px)": {
              display:'none'
            }}}
          >
            <Box
              sx={{
                background:
                  "#333A64",
                borderRadius: "10px",
                p: isLargeScreen ? 5 : 3,
              }}
            >
              <Box
                sx={{
                  background: "#333A64",
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
                        <Box sx={{
                           backgroundColor:'#20264d',
                           p:2,
                           width:'4.7rem',
                           borderRadius:'10px',
                           fontSize:'20px',
                           fontWeight:"bold"
                        }}>
                        <p>{timeLeft.days}</p>
                        </Box>
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
                        <Box sx={{
                           backgroundColor:'#20264d',
                           p:2,
                           width:'4.7rem',
                           borderRadius:'10px',
                           fontSize:'20px',
                           fontWeight:"bold"
                        }}>
                        <p>{timeLeft.hours}</p>
                        </Box>
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
                        <Box sx={{
                          backgroundColor:'#20264d',
                          p:2,
                          width:'4.7rem',
                          borderRadius:'10px',
                          fontSize:'20px',
                          fontWeight:"bold"

                        }}>
                        <p>{timeLeft.minutes}</p>
                        </Box>
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
                        <Box sx={{
                           backgroundColor:'#20264d',
                           p:2,
                           width:'4.7rem',
                           borderRadius:'10px',
                           fontSize:'20px',
                           fontWeight:"bold"
                        }}>
                        <p>{timeLeft.seconds}</p>
                        </Box>
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
                    color: "#2D325A",
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
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default AlpsTokenPresale;
