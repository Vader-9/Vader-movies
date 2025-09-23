import { Search } from "lucide-react";


function Nav({ search, setSearch}){

    

    return(
        <div class='flex justify-center gap-[50%] border h-[60px] p-[10px]'>
            <div class = 'flex justify-center gap-[15px]'>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button ><Search /></button>
            </div>
            <div class = 'flex justify-center gap-[15px]'>
                <button>Login</button>
                <button>Sign-up</button>
                <button>Dark mode</button>
            </div>
        </div>
    )
}

export default Nav