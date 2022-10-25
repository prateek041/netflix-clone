import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice";
import { tmdbApi } from "../api/tmdbApi";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
