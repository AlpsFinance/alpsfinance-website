import { FC, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { useTheme } from "@mui/system";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  labels: [
    "Team",
    "Presale",
    "Airdrop",
    "Liquidity",
    "Marketing",
    "Early backers",
    "Staking Reward",
    "Foundation Reserve",
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    dropShadow: {
      enabled: true,
    },
  },
  fill: {
    type: "gradient",
  },
  legend: {
    fontSize: "20px",
    labels: {
      colors: "white",
    },
    formatter: function (val: any, opts: any) {
      return (
        val +
        " : " +
        opts.w.globals.series[opts.seriesIndex] +
        "% (" +
        ((5 * opts.w.globals.series[opts.seriesIndex]) / 100 >= 1
          ? (5 * opts.w.globals.series[opts.seriesIndex]) / 100 +
            " Billion tokens)"
          : 5 * opts.w.globals.series[opts.seriesIndex] * 10 +
            " Million tokens)")
      );
    },
    offsetX: -40,
    offsetY: -25,
    markers: {
      offsetX: -4,
      radius: 2,
    },
    itemMargin: {
      vertical: 5,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
    dashArray: 0,
    colors: undefined,
    lineCap: "square",
  },
  responsive: [
    {
      breakpoint: 900,
      options: {
        chart: {
          width: "100%",
          height: "100%",
        },
        legend: {
          height: 400,
          horizontalAlign: "left",
          position: "bottom",
          fontSize: "15px",
          offsetX: 5,
          offsetY: 20,
        },
      },
    },
  ],
};

interface Props {
  isLargeScreen: Boolean;
}

const Tokenomics: FC<Props> = ({ isLargeScreen }) => {
  const { palette } = useTheme();
  const [series] = useState<number[]>([15, 5, 5, 10, 10, 5, 25, 25]);

  return (
    <Box
      pt={3}
      py={isLargeScreen ? 3 : 0}
      sx={{
        background: `linear-gradient(to right top, ${palette.primary.main}, ${palette.secondary.main})`,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ color: "#fff" }}
      >
        <Grid item sm={12}>
          <Typography variant="h4" fontWeight={600} align="center">
            <b>Tokenomics</b>
          </Typography>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb={3}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
          sx={{
            width: "100%",
            color: "#ffffff",
            maxWidth: "768px",
            padding: "1rem",
          }}
        >
          <Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#fff" width="150px">
                Ticker
              </Typography>
              <Typography variant="subtitle1" color="#fff" fontWeight={600}>
                <b>ALPS</b>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#fff" width="150px">
                Total supply
              </Typography>
              <Typography variant="subtitle1">
                <b>5,000,000,000 (Five Billion)</b>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#fff" width="150px">
                Platform
              </Typography>
              <Typography variant="subtitle1">
                <b>Avalanche C-Chain</b>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#fff" width="150px">
                Token type
              </Typography>
              <Typography variant="subtitle1">
                <b>ERC20</b>
              </Typography>
            </Box>
          </Box>
          <Box
            width="40%"
            height="260px"
            position="relative"
            style={{ transform: "scale(1.5)" }}
            display={isLargeScreen ? "block" : "none"}
          >
            <Image
              src="/tokenomicsBg.svg"
              alt="Picture of Tokenomics"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "768px",
            color: "#fff",
            height: isLargeScreen ? "fit-content" : "700px",
            pl: isLargeScreen ? 0 : "1rem",
            pr: isLargeScreen ? 0 : "2rem",
          }}
        >
          {/* @ts-ignore */}
          <ReactApexChart options={options} series={series} type="donut" />
        </Box>
      </Box>
    </Box>
  );
};

export default Tokenomics;
