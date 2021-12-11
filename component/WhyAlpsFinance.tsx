import { FC, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";

interface FeatureObject {
  title: string;
  description: string;
}

interface Props {
  isLargeScreen: Boolean;
}

const showLargePhone = () => {
  return (
    <Grid item p={0} ml={"8rem"} mt={"-5rem"} lg={4}>
      <Image src={"/phone.png"} alt='Phone sample' width={418} height={850} />
    </Grid>
  );
};
const showSmallPhone = () => {
  return (
    <Grid item xs={12}>
      <Image src={"/phone.png"} alt='Phone sample' width={271} height={552} />
    </Grid>
  );
};

const WhyAlpsFinance: FC<Props> = (props) => {
  const { isLargeScreen } = props;
  return (
    <Fragment>
      <Grid
        container
        sx={{ pl: 5, pr: 5, mt: isLargeScreen ? 1 : 0 }}
        spacing={3}
      >
        {isLargeScreen ? showLargePhone() : null}
        <Grid item lg={6} xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            justifyContent='center'
            style={{ minHeight: isLargeScreen ? "60vh" : "auto" }}
          >
            <Typography variant='h4' fontWeight={600} sx={{ mb: 3 }}>
              Multi-Chain, Multi-Platform
            </Typography>
            <Typography>
              As we are converging to a multi-chain world, we shall be trying
              our best to support as many (EVM-compatible) chain as possible.
              Furthermore, we shall be making the platform accessible to all
              device, mainly on web and mobile.
            </Typography>
          </Grid>
        </Grid>
        {isLargeScreen ? null : showSmallPhone()}
      </Grid>
      <Grid
        container
        sx={{ pl: 10, pr: 4, mt: isLargeScreen ? 1 : 0 }}
        spacing={3}
      >
        <Grid item lg={6} xs={12}>
          <Grid
            container
            spacing={0}
            direction='column'
            justifyContent='center'
            style={{ minHeight: isLargeScreen ? "60vh" : "auto" }}
          >
            <Typography variant='h4' fontWeight={600} sx={{ mb: 3 }}>
              Community
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nec
              risus eu, lacus. Curabitur vel tortor et vivamus a dolor integer
              tellus neque. Risus, augue nisl, diam diam, dui. At urna feugiat
              proin pellentesque ut sagittis purus viverra felis.
            </Typography>
            <Button
              color='inherit'
              variant='contained'
              sx={{
                borderRadius: 30,
                color: "#0D7E06",
                backgroundColor: "white",
                py: 2,
                px: 4,
                fontWeight: "bold",
                width: "fit-content",
                mt: 2,
                textTransform: "none",
              }}
              onClick={() => {
                const AlpsFinanceAppURL = "https://app.alps.finance";
                window.open(AlpsFinanceAppURL, "_blank") ||
                  window.location.replace(AlpsFinanceAppURL);
              }}
            >
              Launch The dApp
            </Button>
          </Grid>
        </Grid>
        {isLargeScreen ? showLargePhone() : showSmallPhone()}
      </Grid>
    </Fragment>
  );
};

export default WhyAlpsFinance;
