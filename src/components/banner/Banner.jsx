import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./banner.css";
import { useGetTrendingQuery } from "../../api/tmdbApi";

const Banner = () => {
  // creating the truncate function
  const truncate = (string, maxLength) => {
    return string?.length > maxLength
      ? string.substr(0, maxLength - 1) + " ..."
      : string;
  };

  const { data, isFetching } = useGetTrendingQuery();
  if (isFetching) {
    console.log("fetching the data");
  }
  console.log(data);

  return (
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
              sx={{ margin: "5px" }}
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
