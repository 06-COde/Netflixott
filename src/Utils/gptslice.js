import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieName: [],   // Ensure movieName is initialized
        movieResult: [], // Ensure movieResult is initialized
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieName, movieResult } = action.payload;
            state.movieName = movieName || [];
            state.movieResult = movieResult || [];
        },
    },
});

export const { toggleGptSearchView, addGptMovieResult } = gptslice.actions;
export default gptslice.reducer;
