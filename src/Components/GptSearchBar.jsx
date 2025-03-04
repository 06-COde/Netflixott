import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import { useRef } from "react";
import openai  from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResult } from "../Utils/gptslice";


const GptSearchBar = () => {
    const SearchText = useRef(null);
    const dispatch =  useDispatch();



    const searchMovieTMDB = async (movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query= "+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptClickSubmit = async () => {
        console.log(SearchText.current.value);
 
        const gptQuery =
            "Act as a recommendation system and suggest some movies for the query " +
            SearchText.current.value +
            " and only give me the name of five movies, just separated like this example result given ahead: Gadar,Golmaal,Dhamaal,KGF,Pushpa";

        const gptResult = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant."},
                {
                    role: "user",
                    content: gptQuery,
                },
            ],
        });

        console.log(gptResult?.choices[0]?.message);
        const gptRes = gptResult?.choices[0]?.message?.content.split(",") || [];

        console.log(gptRes);

        // Fetch TMDB data for the recommended movies
        const promiseArray = gptRes.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults); 

        dispatch(addGptMovieResult({movieName : gptRes, movieResult :tmdbResults}));
    };

        const langKey = useSelector(store => store.config.lang);

  return (
   <div className="pt-[20%] flex justify-center p-8">
     <form className=" bg-black md:w-1/2 w-full grid grid-cols-12 "onSubmit={(e)=>e.preventDefault()}>
       <input ref={SearchText} type ="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-4 m-4 pr-12 border border-white text-black col-span-8"/>
       <button className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white font-bold hover:font-extrabold rounded-lg" onClick={handleGptClickSubmit}>
        {lang[langKey].search}
       </button>
    </form>
   </div>
  ) 
}

export default GptSearchBar;


