import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FaDiscord } from "react-icons/fa";

interface Props {
  isLargeScreen: Boolean;
}

const Community: FC<Props> = (props) => {
  const { isLargeScreen } = props;
  return (
    <Box sx={{mb: "3rem"}}>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={6}>
          <Typography variant={isLargeScreen ? 'h6' : 'body2'} align='center'>
            Learn more about Alps Finance, chat with the team, others in the
            community, and have your say in shaping the future of decentralized
            social investing.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item>
              <Button
                color='inherit'
                variant='contained'
                sx={{
                  borderRadius: 30,
                  color: "white",
                  background:
                    "linear-gradient(274.61deg, #0D7E06 18.06%, #00BB89 125.98%)",
                  mt: 4,
                  py: 1,
                  px: 3,
                  fontWeight: "bold",
                  width: "fit-content",
                  textTransform: "none",
                }}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://app.alps.finance";
                  window.open(AlpsFinanceAppURL, "_blank") ||
                    window.location.replace(AlpsFinanceAppURL);
                }}
              >
                <IconButton sx={{ color: "white" }}>
                  <FaDiscord />
                </IconButton>
                Join Our Discord
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Community;
