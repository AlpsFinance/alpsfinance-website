import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import { FaDiscord } from "react-icons/fa";

interface Props {
  isLargeScreen: Boolean;
}

const Community: FC<Props> = (props) => {
  const { isLargeScreen } = props;
  return (
    <Box sx={{ mb: "3rem" }}>
      <Grid item>
        <Typography variant="h4" fontWeight={600} align="center" my={3}>
          <b>Community</b>
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} md={6}>
          <Typography variant={isLargeScreen ? "h6" : "body1"} align="center">
            Learn more about Alps Finance, chat with the team, others in the
            community, and have your say in shaping the future of decentralized
            social investing.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: 3,
                  color: "white",
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
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <FaDiscord size={30} style={{ marginTop: 7 }} />
                  </Grid>
                  <Grid item>
                    <Typography>Join Our Discord</Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Community;
