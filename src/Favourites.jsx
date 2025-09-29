
import { useEffect, useState } from "react";
import { X } from "lucide-react"

function Favourites({ favourites, setFavourites }) {
  //console.log(favourites);

  
 function removeFavourites(id) {
    const updatedFavourites = favourites.filter((film) => film.id !== id);
    setFavourites(updatedFavourites);
   // localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    //console.log("Removed film with ID:", id);
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
          <button onClick={()=>removeFavourites(film.id)}>
            <X />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
