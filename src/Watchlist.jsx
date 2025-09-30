import { X } from "lucide-react";

function Watchlist({ watchList, setWatchList }) {
  console.log(watchList)
    function removeWatchlist(id) {
        setWatchList(watchList.filter((film) => film.id !== id))
    }

    console.log(watchList)
    return (
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2  w-[1150px]">
                {
                    watchList.map((film) => (<div key={film.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out p-2">
                        <img src={film.poster} alt={film.movie} className="w-full h-72 object-cover" />
                        <h2>{film.movie}</h2>
                        <p>{film.year}</p>
                        <div>
                            <buttonn onClick={() => removeWatchlist(film.id)} ><X className="w-5 h-5"/></buttonn>
                        </div>
                    </div>))
                }
            </div>
        
    )
}

export default Watchlist
