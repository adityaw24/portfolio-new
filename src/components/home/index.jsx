import React from "react";
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
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../header";
import "../../styles/home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Grid
          container
          //   columnSpacing={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          className="items-center justify-center"
        >
          <Grid item xs={4} sm={5} md={8} lg={7}>
            <Card
              elevation={0}
              className="rounded-xl card--blur"
              sx={{
                borderRadius: "0.8rem",
                // backgroundColor: "rgba(255,255, 255, 0.6)",
              }}
            >
              <CardActionArea>
                <Grid
                  container
                  rowSpacing={{ xs: 5 }}
                  columns={{ xs: 1 }}
                  className="p-2"
                >
                  <Grid item className="w-full">
                    <CardContent>
                      <Typography
                        className="card--no-blur"
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{ marginBottom: "1rem" }}
                      >
                        Hey, I'm Aditya
                      </Typography>
                      <Typography variant="subtitle2" component="div">
                        Frontend Developer
                      </Typography>
                      <Typography variant="caption" component="div">
                        I'm passionate coder who enjoys building intersting
                        things. I've experience with frontend development and
                        enough experience with backend development. You can
                        check the Tech Stack section for technologies I work
                        with. If you want to know more about me, you can visit
                        my LinkedIn profile and my Github for little project
                        I've been building.
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item className="w-full">
                    <CardContent className="flex gap-1">
                      {/* <LinkedInIcon color="primary" />
                      <PublicIcon color="primary" /> */}
                      <IconButton color="primary">
                        <LinkedInIcon color="primary" />
                      </IconButton>
                      <IconButton sx={{ color: "black" }}>
                        <GitHubIcon />
                      </IconButton>
                      <IconButton>
                        <PublicIcon />
                      </IconButton>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={4}
            sm={3}
            md={3}
            lg={2}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {/* <Card
              className="bg-white rounded-xl px-4"
              sx={{
                borderRadius: "0.8rem",
                // backgroundImage: "url(/profile.png)",
              }}
            > */}
            {/* <CardActionArea></CardActionArea> */}
            <CardMedia
              component="img"
              alt="profile"
              image="/profile.png"
              sx={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
            {/* </Card> */}
            {/* <img src="/profile.png" /> */}
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Home;
