import { useEffect, useState } from "react"
import Movie from "./Movies/Movie"
import Nav from "./Nav/Nav"
import Sidebar from "./Sidebar/Sidebar"
import axios from "axios"
function App() {

const url = import.meta.env.VITE_API_URL
const keys = import.meta.env.VITE_API_KEY

//console.log("API URL:", url)
//console.log("API Key:", keys)

 // console.log(url)
  //console.log(keys)

  const [films, setFilms] = useState([])
 // const [error, setError] = useState()
  //const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [series, setSeries] = useState(false)
  const [showWatchList, setShowWatchList] = useState(false)
  

 

  const fetchFilm = async() => {
      try{
        const response = await axios.get(`${url}?s=${search}&apikey=${keys}`)
       // console.log(response.data.Search)
        if(response.data.Search){
          setFilms(response.data.Search)
        }
        
      } catch (error){
        console.error(error)
       // setError('Error fetching data' + error.message)
      }
    }


//console.log(error)
  useEffect(()=>{
    fetchFilm(search)
  },[search])
//console.log(films)

  return (
    <div className="App">
      <Sidebar setSeries={setSeries} setShowWatchList={setShowWatchList} />
      <div class="w-[80%]">
        <Nav  search={search} setSearch= {setSearch} />
        <Movie films={films} search={search} series={series} showWatchList={showWatchList}/>
      </div>
    </div>
  )
}

export default App



//`http://www.omdbapi.com/?s=${search}&apikey=`