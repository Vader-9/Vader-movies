import { Film } from "lucide-react";

function Sidebar({ setSeries, setShowWatchList }) {

  function allMovies() {
    setSeries(false)
    setShowWatchList(false)
  }

  function allSeries() {
    setSeries(true)
    setShowWatchList(false)
  }

  function allWatch() {
    setSeries(false)
    setShowWatchList(true)
  }

  return (
    <div class="  h-194 w-[20%] p-[10px]  overflow-hidden">
      <h1>Vader-movies</h1>
      <p>Films</p>
      <div>
        <div onClick={allMovies} className="flex mb-[20px]">
          <Film />
          <p>All FIlms</p>
        </div>
        <div onClick={allSeries} className="flex mb-[20px]">
          <p>Series</p>
        </div>
        <div onClick={allWatch} className="flex mb-[20px]" >
          <p>My Watchlist</p>
        </div>
      </div>

    </div>)
}

export default Sidebar