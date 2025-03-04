import { useSelector } from "react-redux";
import useNowPlyingMovie from "../Utils/useNowplayingMovie";
import useNowPopularMovie from "../Utils/useNowPopularMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
   const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

   useNowPlyingMovie();
   useNowPopularMovie();
   
  return (
    <div>
      <Header />
      {showGptSearch ? ( <GptSearch/> ):( 
      <>
         <Maincontainer/>
         <SecondaryContainer/>
      </> 
      )}
    </div>
  );
};

export default Browse;
