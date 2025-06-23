import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-30 relative z-20 translate-x-5">
      <Movielist title={"Now Playing"} movies = { movies.nowPlayingMovies}/>
      <Movielist title={"Popular Movies"} movies = { movies.PopularMovies}/>
      <Movielist title={"Upcoming Movies"} movies = { movies.nowPlayingMovies}/>
      <Movielist title={"Top 10 thriller"} movies = { movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;