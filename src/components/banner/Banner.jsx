import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./banner.css";

const Banner = () => {
  // creating the truncate function
  const truncate = (string, maxLength) => {
    return string?.length > maxLength
      ? string.substr(0, maxLength - 1) + " ..."
      : string;
  };

  return (
    // <header
    //   className="banner"
    //   style={{
    //     backgroundSize: "cover",
    //     backgroundImage: `url("https://cdn.mediaincanada.com/wp/wp-content/uploads/2020/09/netflix-banner.png?8766fc")`,
    //     backgroundPosition: "conter center",
    //   }}
    // ></header>
    <Paper
      className="banner"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container>
        <Grid container className="banner__content" spacing={3}>
          <Grid item xs={12} className="banner__text__main">
            <Typography variant="h1" sx={{ fontWeight: "700" }}>
              Movie Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className="banner__button"
              variant="contained"
              //   sx={{ margin: "5px" }}
            >
              Play
            </Button>
            <Button className="banner__button" variant="contained">
              My List
            </Button>
          </Grid>
          <Grid item md={6} xs={8}>
            {truncate(
              `This is a test description. This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description`,
              150
            )}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Banner;
