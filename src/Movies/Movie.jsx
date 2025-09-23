import { Heart } from "lucide-react";
import { useState } from "react";
import Favourites from "../Favourites";
function Movie({films, search,series}){
    //console.log(search)

    const [favourites, setFavourites] = useState([])


    function addToFavourites(film){
        setFavourites(prev => [...prev, {
            movie : film.Title,
            poster: film.Poster,
            year:film.Year
        }])
    }
    

    const filmsSeries = films.filter((film) => film.Type === 'series')
   //  console.log(filmsSeries)
    const filmDisplay = series ? filmsSeries : films

    return(
        <div class="p-[20px] h-[calc(100vh-80px)] overflow-auto">
            <header class='flex justify-center gap-[20px] p-[10px]  mb-[20px]'>
                <button>All Films</button>
                <button>Series</button>
                <button>Favourites</button>
                <button>My Watchlist</button>
            </header>
            <Favourites favourites={favourites} />
            <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>{
                filmDisplay.map((film)=>(<div key={film.Title}>
                    <img src={film.Poster} alt={film.Title} />
                    <h2>{film.Title}</h2>
                    <p>{film.Year}</p>
                    <button onClick={()=>addToFavourites(film)}><Heart /></button>
                </div>))
                }</div>
        </div>
    )
}

export default Movie