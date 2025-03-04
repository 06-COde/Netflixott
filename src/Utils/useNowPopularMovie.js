import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addPopularMovies} from "./moviesSlice";

const useNowPopularMovie = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useCallback(async () => { 
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await response.json();
   // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }, [dispatch]); 

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]); 
};

export default useNowPopularMovie ;
