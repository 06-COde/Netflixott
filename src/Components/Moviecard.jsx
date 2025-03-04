import { IMG_CDN } from "../Utils/constant";

const Moviecard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-44">
        <img src={IMG_CDN + posterPath} alt="moviecard" />
    </div>
  )
};

export default Moviecard;