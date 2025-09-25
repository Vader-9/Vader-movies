import { Film  } from "lucide-react";

function Sidebar({setSeries, setShowWatchList}){

  function allMovies(){
    setSeries(false)
    setShowWatchList(false)
  }

  function allSeries(){
    setSeries(true)
    setShowWatchList(false)
  }

  function allWatch(){
    setSeries(false)
    setShowWatchList(true)
  }

    return(<div class =" h-194 w-[20%] p-[10px] border overflow-hidden">
      <h1>Vader-movies</h1>
      <p>Films</p>
      <button onClick={allMovies}>
       <Film />
         <p>All FIlms</p>
      </button>
      <button onClick={allSeries}>
        <p>Series</p>
      </button>
      <button onClick={allWatch} >
        <p>My Watchlist</p>
      </button>
      
    </div>)
}

export default Sidebar