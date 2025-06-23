import { IMG_CDN } from "../Utils/constant";

const Moviecard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[150px] transform hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={IMG_CDN + posterPath}
        alt="Movie Poster"
        className="rounded-lg shadow-lg hover:shadow-2xl"
      />
    </div>
  );
};

export default Moviecard;
