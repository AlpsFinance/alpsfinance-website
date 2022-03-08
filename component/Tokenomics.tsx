import { FC, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import { Box, Grid, Typography } from "@mui/material";
// import ReactApexChart from "react-apexcharts";
import dynamic from 'next/dynamic'
import { ApexOptions } from "apexcharts";
import Image from "next/image";

const ReactApexChart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

ChartJS.register(ArcElement, Tooltip, Legend);

const options:ApexOptions = {
  chart: {
    type: 'donut',
    height: 400,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
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
      return val + "%"
    },
    dropShadow: {
      enabled: true
    },
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    fontSize: '20px',
    formatter: function(val:any, opts:any) {
      return val + " : " + opts.w.globals.series[opts.seriesIndex] + "% (" + (5 * opts.w.globals.series[opts.seriesIndex] / 100>=1?(5 * opts.w.globals.series[opts.seriesIndex] / 100) + " Billion tokens)": (5 * opts.w.globals.series[opts.seriesIndex] * 10) + " Million tokens)") 
    },
    offsetX: -40,
    offsetY: -25,
    markers: {
      offsetX: -4,
      radius: 2
    },
    itemMargin: {
      vertical: 4,
    }
  },
  stroke: {
    width: 2,
    curve: 'smooth',
    dashArray: 0,
    colors: undefined,
    lineCap: "square"
  },
  responsive: [{
    breakpoint: 767,
    options: {
      chart: {
        height: 750,
      },
      legend: {
        // show: false,
        position: 'bottom',
        offsetY: 10,
        offsetX: 0,
        horizontalAlign: 'left', 
        itemMargin: {
          vertical: 2,
        }
      }
    }
  }]
}

interface Props {
  isLargeScreen: Boolean;
}

const Tokenomics: FC<Props> = ({ isLargeScreen }) => {
  const [series, setSeries] = useState<number[]>([15, 5, 5, 10, 10, 5, 25, 25]);

  return (
    <Box mb={2} pb={5}>
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
        flexDirection="column"
        mb={5}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
          sx={{
            width: '100%',
            maxWidth: '748px',
          }}
        >
          <Box px="10px">
            <Typography variant="h6" fontWeight={600} align="left" mb={2}>
              <b>Token Data:</b>
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#666" width="150px">
                Token Ticker:
              </Typography>
              <Typography variant="subtitle1" color="orange" fontWeight={600}>
                <b>Alps Token</b>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#666" width="150px">
                Total supply:
              </Typography>
              <Typography variant="subtitle1">
                5,000,000,000 (Five Billion)
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#666" width="150px">
                Platform:
              </Typography>
              <Typography variant="subtitle1">
                Fantom
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#666" width="150px">
                Token type:
              </Typography>
              <Typography variant="subtitle1">
                ERC20
              </Typography>
            </Box>
            <Grid display="flex" alignItems="center" mb={1}>
              <Typography variant="subtitle1" color="#666" width="150px">
                Explorer:
              </Typography>
              <Typography variant="subtitle1" color="orange">
                https://ftmscan.com/
              </Typography>
            </Grid>

          </Box>
          <Box width="40%" px="10px" height="260px" position="relative" sx={{transform: "scale(1.5)", display : isLargeScreen?'block':'none'}}>
            <Image
              src="/tokenomicsBg.svg"
              alt='Picture of Tokenomics'
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: '748px',
            padding: '0 10px',
          }}
        >
          <Typography variant='h6' fontWeight={600} align='left' mb={2}>
            <b>Token Distribution:</b>
          </Typography>
          <ReactApexChart options={options} series={series} type="donut" />
        </Box>
      </Box>
    </Box>
  );
};

export default Tokenomics;
