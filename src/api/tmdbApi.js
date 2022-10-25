import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "65d7c8cc5dd609b802ff016ce5577d5b";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => `/trending/all/week?api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetTrendingQuery } = tmdbApi;
