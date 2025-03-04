import Moviecard from "./Moviecard";

   const Movielist = ({title,movies}) => {
   // console.log(movies)
     return (
       <div className="px-4">
           <h1 className="font-extrabold text-2xl py-3 text-white">{title}</h1>
           <div className="flex  overflow-x-scroll scrollbar-hide">
                <div className="flex gap-3">
                    {movies.map((movie)=> <Moviecard key={movie.id} posterPath={movie.poster_path}/>)}
                </div>
           </div>
       </div>
     )
   }
   
   export default Movielist;