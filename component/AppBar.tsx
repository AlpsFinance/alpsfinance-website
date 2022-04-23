import { FC, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AlpsLogo from "./AlpsLogo";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

export enum AppBarMode {
  HOME,
  DEFAULT,
}

export interface CustomAppBarProps {
  mode?: AppBarMode;
}

const CustomAppBar: FC<CustomAppBarProps> = (props) => {
  const { mode = AppBarMode.DEFAULT } = props;
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isYOffsetMoreThan100, setIsYOffsetMoreThan100] =
    useState<boolean>(false);

  const toggleDrawer =
    (_: String, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  /**
   * @name handleScroll
   * @description Handle scrolling logic to give app bar box shadow
   */
  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    // eslint-disable-next-line no-mixed-operators
    if (position >= 50 !== isYOffsetMoreThan100) {
      setIsYOffsetMoreThan100(position >= 50);
    }
  }, [isYOffsetMoreThan100]);

  const menus = [
    {
      name: "Whitepaper",
      url: "https://storageapi.fleek.co/yosephks-team-bucket/AlpsFinanceWhitepaper.pdf",
      newTab: true,
    },
    {
      name: "Documentation",
      url: "https://docs.alps.finance/",
      newTab: true,
    },
    {
      name: "FAQs",
      url: "/faq",
    },
  ];
  const list = (anchor: String) => (
    <Box
      sx={{ maxWidth: 250, width: "100vw", p: 3 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ flexGrow: 8 }}>
        <AlpsLogo fillColor="#20264d" />
      </Box>
      <List>
        {menus.map((menu, index) => {
          const { name, url, newTab } = menu;
          return (
            <ListItem
              button
              key={index}
              sx={{
                pl: 0,
                ...(index !== menus.length - 1 && {
                  borderBottom: "1px solid #c7c9c8",
                }),
              }}
            >
              <ListItemText
                primary={name}
                onClick={() => {
                  if (newTab) {
                    window.open(url, "_blank") || window.location.replace(url);
                  } else {
                    router.push(url);
                  }
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <List>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          sx={{
            borderRadius: 3,
            color: "white",
            backgroundColor: "#25284B",
            fontWeight: "bold",
          }}
          onClick={() => {
            const AlpsFinanceAppURL = "https://app.alps.finance";
            window.open(AlpsFinanceAppURL, "_blank") ||
              window.location.replace(AlpsFinanceAppURL);
          }}
        >
          Launch App
        </Button>
      </List>
    </Box>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        pt: 1.5,
        pb: 1.5,
        px: isLargeScreen ? 3.5 : 1,
        backgroundColor:
          mode === AppBarMode.DEFAULT ||
          (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
            ? "white"
            : "transparent",
        transition: "0.3s",
        ...((mode === AppBarMode.DEFAULT ||
          (isYOffsetMoreThan100 && mode === AppBarMode.HOME)) && {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }),
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 8 }} onClick={() => router.push("/")}>
          <div style={{ cursor: "pointer", width: "38px" }}>
            <AlpsLogo
              fillColor={
                mode === AppBarMode.DEFAULT ||
                (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                  ? "#20264d"
                  : "white"
              }
            />
          </div>
        </Box>
        {menus
          .filter((menu) => menu.name !== "Home")
          .map(
            (menu, index) =>
              isLargeScreen && (
                <Link
                  key={index}
                  underline={"none"}
                  color={
                    mode === AppBarMode.DEFAULT ||
                    (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                      ? "#20264d"
                      : "white"
                  }
                  href={menu.url}
                  sx={{
                    flexGrow: 1,
                    fontWeight: "bold",
                  }}
                >
                  {menu.name}
                </Link>
              )
          )}
        {isLargeScreen ? (
          <Button
            color={
              mode === AppBarMode.DEFAULT ||
              (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                ? "primary"
                : "inherit"
            }
            variant="contained"
            sx={{
              borderRadius: 3,
              color:
                mode === AppBarMode.DEFAULT ||
                (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                  ? "white"
                  : "#25284B",
              backgroundColor:
                mode === AppBarMode.DEFAULT ||
                (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                  ? "#25284B"
                  : "white",
              py: 1,
              px: 5,
              fontWeight: "bold",
            }}
            onClick={() => {
              const AlpsFinanceAppURL = "https://app.alps.finance";
              window.open(AlpsFinanceAppURL, "_blank") ||
                window.location.replace(AlpsFinanceAppURL);
            }}
          >
            Launch App
          </Button>
        ) : (
          <Grid container justifyContent="right" alignItems="right">
            <Grid item>
              <IconButton
                onClick={toggleDrawer("right", true)}
                sx={{
                  color:
                    mode === AppBarMode.DEFAULT ||
                    (isYOffsetMoreThan100 && mode === AppBarMode.HOME)
                      ? "#25284B"
                      : "white",
                }}
                size="large"
              >
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer("left", false)}
        PaperProps={{ sx: { borderTopRightRadius: 15 } }}
      >
        {list("left")}
      </Drawer>
    </AppBar>
  );
};

export default CustomAppBar;
