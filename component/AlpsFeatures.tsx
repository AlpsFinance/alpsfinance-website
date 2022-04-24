import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const featuresList = [
  {
    title: "Cross-Chain, Cross-Platform",
    description: "Cross Chain Features",
    image: "/features/multichain.png",
  },
  {
    title: "Gamified Social Media",
    description: "Social media",
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
      px={isLargeScreen ? 5 : 3}
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
        <Grid container spacing={3} direction="column">
          {featuresList.map((feature, index) => {
            const { title, description, image } = feature;
            return (
              <Grid item key={title}>
                <Grid
                  container
                  direction={index % 2 === 0 ? "row-reverse" : "row"}
                >
                  <Grid item xs={12} lg={6}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant={isLargeScreen ? "h5" : "h6"}>
                          <b>{title}</b>
                        </Typography>
                      </Grid>
                      <Grid item>{description}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Image
                      src={image}
                      alt={title}
                      width={isLargeScreen ? 800 : 350}
                      height={isLargeScreen ? 600 : 200}
                    />
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
