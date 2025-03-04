import { BODY_LOGO } from "../Utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img src={BODY_LOGO} alt="background-img"/>
        </div>
        <div className="pt-[30%] md:p-0">
           <GptSearchBar/>
            <GptMovieSuggestion/>
        </div> 
    </div>
  )
}

export default GptSearch;