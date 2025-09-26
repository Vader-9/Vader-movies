import { useEffect, useState } from "react"
import Movie from "./Movies/Movie"
import Nav from "./Nav/Nav"
import Sidebar from "./Sidebar/Sidebar"
import Favourites from "./Favourites"
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
 // const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [series, setSeries] = useState(false)
  const [showWatchList, setShowWatchList] = useState(false)
  // set favourites state here and pass it to Movie component
  const [favourites, setFavourites] = useState([])




  const fetchFilm = async () => {
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
        setError("No films found");
      }
    } catch (error) {
      console.error(error);
      setFilms([]);
      setError("No internet connection, check your network.");
    }
  };

  //console.log(error)
  useEffect(() => {
    fetchFilm(search)
  }, [search])
  //console.log(films)

  return (
    <div className="App">
      <Sidebar setSeries={setSeries} setShowWatchList={setShowWatchList} />
      <div class="w-[80%]">
        <Nav search={search} setSearch={setSearch} />
        <Favourites favourites={favourites} />
        { error ? <p class='text-red-500 text-center mt-4'>{error}</p> : <Movie films={films} series={series} showWatchList={showWatchList} favourites={favourites} setFavourites={setFavourites} />}
      </div>
    </div>
  )
}

export default App



//`http://www.omdbapi.com/?s=${search}&apikey=`