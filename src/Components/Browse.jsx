import useNowPlyingMovie from "../Utils/useNowplayingMovie";
import useNowPopularMovie from "../Utils/useNowPopularMovie";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
   useNowPlyingMovie();
   useNowPopularMovie();
   
  return (
    <div>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
