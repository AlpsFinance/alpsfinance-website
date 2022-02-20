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

interface SocialMediaObject {
  name: string;
  icon:
    | IconType
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
      });
  color: string;
  link: string;
}

const SocialMediaArray: SocialMediaObject[] = [
  {
    name: "reddit",
    icon: RedditIcon,
    color: "#FF4500",
    link: "https://www.reddit.com/u/alpsfinance/",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    color: "#C13584",
    link: "https://instagram.com/alpsfinance",
  },
  {
    name: "twitter",
    icon: TwitterIcon,
    color: "#00acee",
    link: "https://twitter.com/alpsfinance",
  },
  {
    name: "telegram",
    icon: TelegramIcon,
    color: "#0088CC",
    link: "https://t.me/AlpsFinance",
  },
  {
    name: "github",
    icon: GitHubIcon,
    color: "#333",
    link: "https://github.com/AlpsFinance",
  },
  {
    name: "medium",
    icon: FaMedium,
    color: "black",
    link: "https://alpsfinance.medium.com",
  },
];

const Footer: FC = () => {

  return (
    <Grid
      container
      sx={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: "linear-gradient(91.05deg, #0D7E06 -25.94%, #002400 98.77%)",
        color: "white",
        p: 2,
      }}
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          pb: 1
        }}
      >
        <Grid item>
          <Grid container justifyContent='center' alignItems='center'>
            {SocialMediaArray.map((socialMedia: SocialMediaObject) => {
              const { name, icon: Icon, color, link } = socialMedia;
              return (
                <Grid item key={name}>
                  <IconButton
                    aria-label={name}
                    sx={{
                      "&:hover": { color },
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
        <Grid container justifyContent='center' alignItems='center' sx={{mt: 1}}>
          <Grid item>
            <Typography>&copy; 2021 Alps Labs</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
