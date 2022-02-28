import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Grid, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Team",
    "Presale",
    "Airdrop",
    "Liquidity",
    "Marketing",
    "Early backers",
    "ALPS Stakers",
    "Foundation Reserve",
  ],
  datasets: [
    {
      label: "Percentage",
      data: [15, 5, 5, 10, 10, 5, 25, 25],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(84, 65, 78, 0.2)",
        "rgba(227, 178, 60, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(84, 65, 78, 1)",
        "rgba(227, 178, 60, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

interface Props {
  isLargeScreen: Boolean;
}

const Tokenomics: FC<Props> = (props) => {
  const { isLargeScreen } = props;
  return (
    <Box mb={2}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={3}
        sx={{mb: 2}}
      >
        <Grid item sm={12}>
          <Typography variant='h4' fontWeight={600} align='center'>
            <b>Tokenomics</b>
          </Typography>
        </Grid>
      </Grid>
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
        <Box
          sx={{
            width: isLargeScreen ? "40vw" : "100%",
          }}
        >
          <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  onClick: (e) => null
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tokenomics;
