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
        <Grid item xs={10} md={6}>
          <Typography variant={isLargeScreen ? 'h6' : 'body1'} align='center'>
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
                    "#2D325A",
                  mt: 4,
                  py: 1,
                  px: 3,
                  fontWeight: "bold",
                  width: "fit-content",
                  textTransform: "none",
                }}
                onClick={() => {
                  const AlpsFinanceAppURL = "https://discord.gg/zXbpgZSzCD";
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
