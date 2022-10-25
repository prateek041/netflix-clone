import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./banner.css";
import {
  useGetComedyMoviesQuery,
  useGetDocumentariesQuery,
  useGetHorrorMoviesQuery,
  useGetNetflixOriginalsQuery,
  useGetRomanceMoviesQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../../api/tmdbApi";

const Banner = () => {
  // creating the truncate function
  const truncate = (string, maxLength) => {
    return string?.length > maxLength
      ? string.substr(0, maxLength - 1) + " ..."
      : string;
  };

  const [movie, setMovie] = useState([]);

  const { data: topMovies } = useGetTopRatedQuery(); // top movies
  // const { data: trendingMovies } = useGetTrendingQuery(); // trending movies
  // const { data: comedyMovies } = useGetComedyMoviesQuery(); // comedy movies
  // const { data: horrorMovies } = useGetHorrorMoviesQuery(); // horror movies
  // const { data: romanceMovies } = useGetRomanceMoviesQuery(); // romance movies
  // const { data: documentaryMovies } = useGetDocumentariesQuery(); // documentary movies
  // const { data: netflixOriginals } = useGetNetflixOriginalsQuery(); // netflix originals

  function randomMovie(movieList) {
    if (movieList) {
      return movieList?.results[
        Math.floor(Math.random() * movieList?.results?.length - 1)
      ];
    }
  }

  console.log(randomMovie(topMovies));

  // console.log("Top movies", topMovies);
  // console.log("Trending moveis", trendingMovies);
  // console.log("Comedy movies", comedyMovies);
  // console.log("Horror movies", horrorMovies);
  // console.log("Romance movies", romanceMovies);
  // console.log("Documentary movies", documentaryMovies);

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
      <Container className="banner__container">
        <Grid container className="banner__content" spacing={3}>
          <Grid item xs={12} className="banner__text__main">
            <Typography variant="h2" sx={{ fontWeight: "700" }}>
              Movie Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button className="banner__button" variant="contained">
              Play
            </Button>
            <Button
              className="banner__button"
              variant="contained"
              sx={{ margin: "5px" }}
            >
              My List
            </Button>
          </Grid>
          <Grid item md={6} xs={8}>
            {truncate(
              `This is a test description. This is a test description. This is a test description.This is a test description. This is a test description.This is a test description.This is a test description.This is a test description.This is a test description`,
              150
            )}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Banner;
