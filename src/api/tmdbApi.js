import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "65d7c8cc5dd609b802ff016ce5577d5b";

//api.themoviedb.org/3/movie/top_rated?api_key=65d7c8cc5dd609b802ff016ce5577d5b&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (build) => ({
    getTopRated: build.query({
      query: () => `/movie/top_rated?api_key=${API_KEY}`, // query callback to construct a URL
    }),
    getNetflixOriginals: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    }),
    getTrending: build.query({
      query: () => `/trending/all/week?api_key=${API_KEY}`,
    }),
    getActionMovies: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    }),
    getComedyMovies: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    }),
    getHorrorMovies: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    }),
    getRomanceMovies: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    }),
    getDocumentaries: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetTopRatedQuery,
  useGetActionMoviesQuery,
  useGetComedyMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery,
  useGetNetflixOriginalsQuery,
} = tmdbApi;
