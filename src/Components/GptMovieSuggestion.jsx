import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestion = () => {
  const { movieName, movieResult } = useSelector((store) => store.gpt);

  // Ensure movieName and movieResult are valid before rendering
  if (!movieName || !movieResult) return null;

  return (
    <div className="absolute  flex justify-center gap-3 bg-black bg-opacity-80 text-white">
      <div>
        {movieName.map((movieName,index) => (
          <Movielist 
             key = {movieName}
             title = {movieName}
             movies = {movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
