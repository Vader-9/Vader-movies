/* import { X } from "lucide-react"
function Favourites({favourites,setFavourites}){
 console.log(favourites)

   function removeFavourites(id){
      setFavourites( favourites.filter((film) => film.id !== id))
   }

   

    return(
        <div class='flex gap-4 p-4 h-[150px] mb-[20px] border-b-[1px] border-gray-300 pb-[20px]'>
            {favourites.map((film)=>(<div key={film.id}>
                    <img src={film.poster} alt={film.movie} class='h-[80%]' />
                    <h2>{film.movie}</h2>
                    <p>{film.year}</p>
                    <button onClick={()=>removeFavourites(film.id)}><X /></button>
                </div>))}
        </div>
    )
}

export default Favourites */

import { useEffect } from "react";
import { X } from "lucide-react"

function Favourites({ favourites, setFavourites }) {
  console.log(favourites);

  function removeFavourites(id) {
    setFavourites(favourites.filter((film) => film.id !== id));
  }

  // ✅ Save favourites to localStorage every time they update
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="flex gap-4 p-4 h-[150px] mb-[20px] border-b-[1px] border-gray-300 pb-[20px] overflow-auto">
      {favourites.map((film) => (
        <div key={film.id} className="flex flex-col items-center">
          <img src={film.poster} alt={film.movie} className="h-[80%]" />
          <h2>{film.movie}</h2>
          <p>{film.year}</p>
          <button onClick={() => removeFavourites(film.id)}>
            <X />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
