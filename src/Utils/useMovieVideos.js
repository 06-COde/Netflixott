import { useEffect } from "react";
import { API_OPTIONS } from "./constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./moviesSlice";

const useMovieVideo = ({ movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await response.json();

        if (!json.results || json.results.length === 0) return;

        const trailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideo();
  }, [movieId, dispatch]); // ✅ Include dependencies
};

export default useMovieVideo;
