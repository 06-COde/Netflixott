import { useEffect } from "react";
import { API_OPTIONS } from "./constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./moviesSlice";

const useMovieVideo = ({ movieId }) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
                API_OPTIONS
            );
            const json = await response.json();
           // console.log("Movie Videos:", json);

            if (!json.results) {
                console.error("No results found in API response");
                return;
            }

            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
           // console.log("Selected Trailer:", trailer);
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    useEffect(() => {
        if (movieId) getMovieVideo();
    }, []); // Added dependencies

    // Return the fetched trailer if needed
    return;
};

export default useMovieVideo;
