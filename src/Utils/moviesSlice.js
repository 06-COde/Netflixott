import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : null ,
        trailerVideo : null ,
    },
    reducers: {
        getPlaymovies: (state, action) => {
            console.log("Updating movies in store:", action.payload); // ✅ Debugging log
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action)=>{
          state.trailerVideo = action.payload; 
        }
    }
    
});

export const {getPlaymovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;