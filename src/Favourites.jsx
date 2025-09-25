import { X } from "lucide-react"
function Favourites({favourites,setFavourites}){
   // console.log(favourites)

   function removeFavourites(id){
      setFavourites( favourites.filter((film) => film.id !== id))
   }

    return(
        <div class='flex gap-4 p-4 mb-[20px] border-b-[1px] border-gray-300 pb-[20px]'>
            {favourites.map((film)=>(<div key={film.id}>
                    <img src={film.poster} alt={film.movie} />
                    <h2>{film.movie}</h2>
                    <p>{film.year}</p>
                    <button onClick={()=>removeFavourites(film.id)}><X /></button>
                </div>))}
        </div>
    )
}

export default Favourites