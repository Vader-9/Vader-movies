import { useEffect, useState } from "react"
import Movie from "./Movies/Movie"
import Nav from "./Nav/Nav"
import Sidebar from "./Sidebar/Sidebar"
import Favourites from "./Favourites"
import Login from "./Login"
import axios from "axios"
function App() {

  const url = import.meta.env.VITE_API_URL
  const keys = import.meta.env.VITE_API_KEY

  //console.log("API URL:", url)
  //console.log("API Key:", keys)

  // console.log(url)
  //console.log(keys)

  const [films, setFilms] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [series, setSeries] = useState(false)
  const [showWatchList, setShowWatchList] = useState(false)
  // set favourites state here and pass it to Movie component
  const [favourites, setFavourites] = useState(() => {
  const stored = localStorage.getItem("favourites");
  return stored ? JSON.parse(stored) : [];
});
// the login page
const [login, setLogin] = useState(false)





  const fetchFilm = async () => {
    setLoading(true);
    
    try {
      const response = await axios.get(`${url}?s=${search}&apikey=${keys}`);
      console.log(response.data.Response);

      if (response.data.Response === "True" && response.data.Search) {
        // Movies found
        setFilms(response.data.Search);
        setError(""); // clear any previous error
      } else {
        // No movies found
        setFilms([]);
        setError("No movies found. Please try a different search term.");
      }
    } catch (error) {
      console.error(error);
      setFilms([]);
      setError("No internet connection, check your network.");
    } finally {
      setLoading(false);
    }
  };


  //console.log(error)
  useEffect(() => {
    fetchFilm(search)
  }, [search])
  //console.log(films)

  return  (
  <div className="App">
    {login ? (
      <Login />
    ) : (
      <>
        <Sidebar setSeries={setSeries} setShowWatchList={setShowWatchList} />
        <div className="w-[80%]">
          <Nav search={search} setSearch={setSearch} setLogin={setLogin} />
          <Favourites favourites={favourites} setFavourites={setFavourites} />

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center mt-4">{error}</p>
          ) : search ? (
            <Movie
              films={films}
              series={series}
              showWatchList={showWatchList}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ) : (
            <p>pls select movie</p>
          )}
        </div>
      </>
    )}
  </div>
);

}

export default App  // hello pls i want to add loading and an intial message of s=find movie how do i go about it  