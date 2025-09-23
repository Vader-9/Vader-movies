import { X } from "lucide-react"
function Favourites({favourites}){
    console.log(favourites)
    return(
        <div class='flex gap-4 p-4 mb-[20px] border-b-[1px] border-gray-300 pb-[20px]'>
            {favourites.map((film)=>(<div key={film.movie}>
                    <img src={film.poster} alt={film.movie} />
                    <h2>{film.movie}</h2>
                    <p>{film.year}</p>
                    <button><X /></button>
                </div>))}
        </div>
    )
}

export default Favourites