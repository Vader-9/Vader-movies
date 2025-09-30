import { Search } from "lucide-react";


function Nav({ search, setSearch, setLogin}){

    

    return(
       <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900 text-white h-auto sm:h-[60px] p-4 shadow-md">
  {/* Search Bar */}
  <div className="flex items-center gap-2 border-b border-gray-600 w-full sm:w-auto mb-3 sm:mb-0">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search movies..."
      className="outline-0 bg-transparent w-full sm:w-[300px] p-2 text-sm"
    />
    <button className="p-2 rounded-md hover:bg-gray-800 transition">
      <Search className="w-5 h-5" />
    </button>
  </div>

  {/* Actions */}
  <div className="flex items-center gap-4">
    <button
      onClick={() => setLogin(true)}
      className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
    >
      Sign Up
    </button>
    <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
      Dark Mode
    </button>
  </div>
</div>

    )
}

export default Nav