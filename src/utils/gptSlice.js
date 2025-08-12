import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptView: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptView: (state, action) => {
      state.gptView = !state.gptView;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
