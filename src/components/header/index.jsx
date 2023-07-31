import React from "react";
// import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  List,
} from "@mui/material";

const Header = () => {
  const navItems = ["Home", "About", "Projects"];
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const Navigation = () => {
    return (
      <>
        {/* <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item>
              <Button variant="text">Portfolio</Button>
            </Grid>
            <Grid item>
              <ButtonGroup variant="text" aria-label="text button group">
                {navItems.map((nav, index) => (
                  <Button key={nav}>{nav}</Button>
                ))}
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Button variant="contained">Download CV</Button>
            </Grid>
          </Grid> */}
        <Toolbar
          //   sx={{ display: { xs: "none", sm: "flex" } }}
          className="justify-between flex"
        >
          {/* <div className="justify-between sm:flex hidden"> */}
          <Button
            variant="text"
            className="flex-none"
            sx={{ display: { xs: "block", sm: "none" }, color: "black" }}
          >
            Portfolio
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="text"
            // color="#000"
            className="flex-none"
            sx={{ display: { xs: "none", sm: "block" }, color: "black" }}
          >
            Portfolio
          </Button>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                borderColor: "black",
              },
            }}
            // className="flex-auto"
          >
            {navItems.map((nav, index) => (
              <Button key={nav} sx={{ color: "black" }}>
                {nav}
              </Button>
            ))}
          </ButtonGroup>
          <Button
            variant="contained"
            className="flex-none"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "white",
              backgroundColor: "black",
            }}
          >
            Download CV
          </Button>
          {/* </div> */}
        </Toolbar>
      </>
    );
  };

  const MobileNavigation = () => {
    return (
      <>
        {/* <div className="flex justify-between sm:hidden">
          <Button variant="text" className="flex-none">
            Portfolio
          </Button>
          <Button variant="contained" className="flex-none">
            btnMobile
          </Button>
        </div> */}

        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <List>
            {navItems.map((item, index) => (
              <>
                {index !== 0 && <Divider />}
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </>
    );
  };
  return (
    <>
      {/* <div className="sticky top-0">
      <Navigation />
      <MobileNavigation />
            </div> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          //   enableColorOnDark
          position="sticky"
          //   color="transparent"
          //   className="bg-[#f6f5f3]"
          sx={{ backgroundColor: "#f6f5f3" }}
        >
          {/* <Toolbar> */}
          <Navigation />
          {/* </Toolbar> */}
        </AppBar>
        <Box component="nav">
          <Drawer
            // container={container}
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#e7e7e7",
              },
            }}
          >
            <MobileNavigation />
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
