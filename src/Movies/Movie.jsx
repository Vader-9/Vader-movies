import { Heart, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Watchlist from "../Watchlist";
function Movie({ films, series, showWatchList, favourites, setFavourites }) {
    //console.log(search)


    const [watchList, setWatchList] = useState([])
    const [movieGerne, setMovieGenre] = useState('All')
    


    function addToFavourites(film) {

        const exists = watchList.find(item => item.id === film.imdbID);
        const alreadyInFavourites = favourites.find((item) => item.id === film.imdbID);

        if (alreadyInFavourites) {
            alert("This film is already in your favourites");
            return;
        }

        if (exists) {
            alert("This film is already in your watchlist");
            return;
        } else {
            setFavourites(prev => [...prev, {
                id: film.imdbID,
                movie: film.Title,
                poster: film.Poster,
                year: film.Year
            }])
        }


    }

    function addToWatchList(film) {

        const exist = favourites.find((item) => item.id === film.imdbID);
        const alreadyInWatchlist = watchList.find((item) => item.id === film.imdbID);

        if (alreadyInWatchlist) {
            alert("This film is already in your watchlist");
            return;
        }

        if (exist) {
            alert("This film is already in your favourites");
            return;
        } 
            setWatchList(prev => [...prev, {
                id: film.imdbID,
                movie: film.Title,
                poster: film.Poster,
                year: film.Year
            }])
        



    }
    console.log(watchList)

    const filmsSeries = films.filter((film) => film.Type === 'series')
    //  console.log(filmsSeries)
    const filmDisplay = series ? filmsSeries : films

   useEffect(() => {
    setMovieGenre(series ? 'Series' : 'All')
   }   , [series])
  
    return (
        <div class="p-[20px] h-[calc(100vh-80px)] overflow-auto">
            <header class='flex justify-center gap-[20px] p-[10px]  mb-[20px]'>
                <p>{movieGerne}</p>

            </header>

            <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>{
                showWatchList ? <Watchlist watchList={watchList} setWatchList={setWatchList} /> : filmDisplay.map((film) => (<div key={film.imdbID}>
                    <img src={film.Poster} alt={film.Title} />
                    <h2>{film.Title}</h2>
                    <p>{film.Year}</p>
                    <div>
                        <button onClick={() => addToFavourites(film)}><Heart /></button>
                        <button onClick={() => addToWatchList(film)}><Plus /></button>
                    </div>
                </div>))
            }</div>
        </div>
    )
}

export default Movie