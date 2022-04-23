import { FC, useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AlpsLogo from "./AlpsLogo";
import { Drawer, Grid, Link } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Menu } from "@mui/icons-material";

const CustomAppBar: FC = () => {
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
    if (position >= 100 !== isYOffsetMoreThan100) {
      setIsYOffsetMoreThan100(position >= 100);
    }
  }, [isYOffsetMoreThan100]);

  const menus = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Whitepaper",
      url: "https://storageapi.fleek.co/yosephks-team-bucket/AlpsFinanceWhitepaper.pdf",
    },
    {
      name: "Documentation",
      url: "https://docs.alps.finance/",
    },
    {
      name: "FAQs",
      url: "",
    },
  ];
  const list = (anchor: String) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{}}>
        {menus.map((menu, index) => (
          <ListItem button key={index}>
            <ListItemText
              primary={menu.name}
              onClick={() => {
                const AlpsFinanceAppURL = menu.url;
                window.open(AlpsFinanceAppURL, "_blank") ||
                  window.location.replace(AlpsFinanceAppURL);
              }}
            />
          </ListItem>
        ))}
      </List>
      <List>
        <Button
          color="inherit"
          variant="contained"
          sx={{
            borderRadius: 30,
            color: "backgroundColor='#25284B'",
            background: "white",
            ml: 1,
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
        pl: 3.5,
        backgroundColor: isYOffsetMoreThan100 ? "white" : "transparent",
        transition: "0.3s",
        ...(isYOffsetMoreThan100 && {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }),
        "@media (min-width: 780px)": {
          pr: 3.5,
        },
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 3 }}>
          <AlpsLogo fillColor={isYOffsetMoreThan100 ? "#20264d" : "white"} />
        </Box>
        {menus
          .filter((menu) => menu.name !== "Home")
          .map((menu, index) => (
            <Link
              key={index}
              underline={"none"}
              color={isYOffsetMoreThan100 ? "#20264d" : "white"}
              href={menu.url}
              sx={{
                pr: 3,
                flexGrow: 1,
                fontWeight: "bold",

                "@media (max-width: 780px)": {
                  display: "none",
                },
              }}
            >
              {menu.name}
            </Link>
          ))}
        <Button
          color="inherit"
          variant="contained"
          sx={{
            borderRadius: 30,
            color: "#25284B",
            backgroundColor: "white",
            py: 1,
            px: 8,
            fontWeight: "bold",
            "@media (max-width: 780px)": {
              display: "none",
            },
          }}
          onClick={() => {
            const AlpsFinanceAppURL = "https://app.alps.finance";
            window.open(AlpsFinanceAppURL, "_blank") ||
              window.location.replace(AlpsFinanceAppURL);
          }}
        >
          Launch App
        </Button>
        <Grid
          container
          justifyContent="right"
          alignItems="right"
          sx={{
            "@media (min-width: 780px)": {
              display: "none",
            },
          }}
        >
          <Grid item>
            <Button
              onClick={toggleDrawer("right", true)}
              sx={{ color: "white" }}
            >
              <Menu />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer("right", false)}
        PaperProps={{
          sx: {
            backgroundColor: "#C8CACB",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </AppBar>
  );
};

export default CustomAppBar;
