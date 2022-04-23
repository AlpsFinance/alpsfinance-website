import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaDiscord, FaMedium, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import { useTheme } from "@mui/system";

interface SocialMediaObject {
  name: string;
  icon:
    | IconType
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
      });
  link: string;
}

const SocialMediaArray: SocialMediaObject[] = [
  {
    name: "reddit",
    icon: RedditIcon,
    link: "https://www.reddit.com/u/alpsfinance/",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    link: "https://instagram.com/alpsfinance",
  },
  {
    name: "twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/alpsfinance",
  },
  {
    name: "telegram",
    icon: TelegramIcon,
    link: "https://t.me/AlpsFinance",
  },
  {
    name: "github",
    icon: GitHubIcon,
    link: "https://github.com/AlpsFinance",
  },
  {
    name: "medium",
    icon: FaMedium,
    link: "https://alpsfinance.medium.com",
  },
];

const Footer: FC = () => {
  const { palette } = useTheme();
  return (
    <Grid
      container
      sx={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: `linear-gradient(to right top, ${palette.primary.main}, ${palette.secondary.main})`,
        color: "white",
        p: 2,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          pb: 1,
        }}
      >
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            {SocialMediaArray.map((socialMedia: SocialMediaObject) => {
              const { name, icon: Icon, link } = socialMedia;
              return (
                <Grid item key={name}>
                  <IconButton
                    aria-label={name}
                    sx={{
                      "&:hover": { color: "#c7c9c8" },
                      transition: "0.3s",
                      color: "white",
                    }}
                    onClick={() =>
                      window.open(link, "_blank") ||
                      window.location.replace(link)
                    }
                  >
                    <Icon />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Grid item>
            <Typography variant="body2">&copy; 2021 Alps Labs</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
