import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constant";
import { getPlaymovies } from "./moviesSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const fetchPlayMovies = useCallback(async () => { // ✅ Wrap in useCallback
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await response.json();
    console.log(json.results);
    dispatch(getPlaymovies(json.results));
  }, [dispatch]); 

  useEffect(() => {
    fetchPlayMovies();
  }, [fetchPlayMovies]); 
};

export default useNowPlayingMovie;
