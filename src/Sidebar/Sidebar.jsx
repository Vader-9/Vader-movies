import { Film  } from "lucide-react";

function Sidebar({setSeries, setShowWatchList}){

    return(<div class =" h-194 w-[20%] p-[10px] border overflow-hidden">
      <h1>Vader-movies</h1>
      <p>Films</p>
      <button onClick={()=>setSeries(false)}>
       <Film />
         <p>All FIlms</p>
      </button>
      <button onClick={()=>setSeries(true)}>
        <p>Series</p>
      </button>
      <button onClick={()=>setShowWatchList(true)} >
        <p>My Watchlist</p>
      </button>
      
    </div>)
}

export default Sidebar