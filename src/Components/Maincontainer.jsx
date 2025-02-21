import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle"; 

const Maincontainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) {
        return <h1>Loading...</h1>; 
    }

    const mainMovie = movies[0];

    // Add a check to ensure mainMovie exists
    if (!mainMovie) {
        return <h1 className="font-extrabold text-2xl flex justify-center">No movies available</h1>;
    }

    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};

export default Maincontainer;
