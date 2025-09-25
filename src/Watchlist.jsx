import { X } from "lucide-react";

function Watchlist({watchList, setWatchList}){

    function removeWatchlist(id){
         setWatchList( watchList.filter((film) => film.id !== id))
    }

  console.log(watchList)
    return(<div>
        {
                watchList.map((film)=>(<div key={film.id}>
                    <img src={film.poster} alt={film.movie} />
                    <h2>{film.Title}</h2>
                    <p>{film.year}</p>
                    <div>
                        <buttonn onClick={()=>removeWatchlist(film.id)}><X/></buttonn>
                    </div>
                </div>))
                }
    </div>)
}

export default Watchlist
