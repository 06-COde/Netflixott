import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : [] ,
        PopularMovies : [],
        trailerVideo : null ,
    },
    reducers: {
        getPlaymovies: (state, action) => {
          //  console.log("Updating movies in store:", action.payload); // ✅ Debugging log
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
          //  console.log("Updating popular movies in store:", action.payload); // ✅ Debugging log
            state.PopularMovies = action.payload; 
        },
         
        addTrailerVideo: (state, action)=>{
          state.trailerVideo = action.payload; 
        }
    }
    
});

export const {getPlaymovies, addPopularMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;