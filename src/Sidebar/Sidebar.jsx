import { Film  } from "lucide-react";

function Sidebar({setSeries}){

    return(<div class =" h-194 w-[20%] p-[10px] border overflow-hidden">
      <h1>Vader-movies</h1>
      <p>Films</p>
      <div onClick={()=>setSeries(false)}>
       <Film />
         <p>All FIlms</p>
      </div>
      <button onClick={()=>setSeries(true)}>
        <p>Series</p>
      </button>
    </div>)
}

export default Sidebar