// src/components/Movielist.jsx
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return (
      <div className="px-4">
        <h1 className="font-extrabold text-2xl py-3 text-white">{title}</h1>
        <p className="text-gray-400">No movies to display.</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <h1 className="font-extrabold text-2xl py-3 text-white">{title}</h1>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <Moviecard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
