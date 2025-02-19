import useNowPlyingMovie from "../Utils/useNowplayingMovie";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  
   useNowPlyingMovie();
   
  return (
    <div>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
