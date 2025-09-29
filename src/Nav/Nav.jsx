import { Search } from "lucide-react";


function Nav({ search, setSearch, setLogin}){

    

    return(
        <div class='flex justify-center gap-[50%]  h-[60px] p-[10px]'>
            <div class = 'flex justify-center gap-[15px]  border-b'>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="outline-0 w-[300px] p-[10px]"/>
                <button ><Search /></button>
            </div>
            <div class = 'flex justify-center gap-[15px]'>
                <button onClick={()=>setLogin(true)}>Sign-up</button>
                <button>Dark mode</button>
            </div>
        </div>
    )
}

export default Nav