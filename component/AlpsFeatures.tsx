import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const featuresList = [
  {
    title: "Cross-Chain DeFi Dashboard",
    description: `
      As we are converging to a cross-chain world, our platform will 
      be offering multiple blockchain support by default. Furthermore, 
      we shall be making the platform accessible to all device,
      mainly on web and mobile.
    `,
    image: "/features/multichain.png",
  },
  {
    title: "Gamified Social Media",
    description: `
      We believe in the power of community, which is why a core
      component of our platform is an in-app gamified social media that
      enables users interaction. You are not alone as you will be able
      to connect, follow, engage, learn and compete with
      other users investing on our platform.
    `,
    image: "/features/community.png",
  },
];

const AlpsFeatures: FC = () => {
  const { breakpoints } = useTheme();
  const isLargeScreen = useMediaQuery(breakpoints.up("md"));

  return (
    <Grid
      container
      direction="column"
      py={3}
      px={isLargeScreen ? 10 : 3}
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h4" fontWeight={600} color="primary">
          Features
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={5} direction="column">
          {featuresList.map((feature, index) => {
            const { title, description, image } = feature;
            return (
              <Grid item key={title}>
                <Grid
                  container
                  direction={index % 2 === 0 ? "row-reverse" : "row"}
                  spacing={5}
                  mb={5}
                >
                  <Grid item xs={12} md={6}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      spacing={1}
                      sx={isLargeScreen ? { height: "100%" } : {}}
                    >
                      <Grid item>
                        <Typography variant={isLargeScreen ? "h5" : "h6"}>
                          <b>{title}</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontFamily: "'Quicksand', sans-serif" }}
                        >
                          {description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Image
                        src={image}
                        alt={title}
                        width={isLargeScreen ? 550 : 350}
                        height={isLargeScreen ? 400 : 270}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AlpsFeatures;
