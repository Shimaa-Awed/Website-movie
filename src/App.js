import { Fragment, useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MoviePage from "./Pages/Movie/MoviePage";
import FilmDetails from "./Pages/FilmDetails/FilmDetails";



function App() {

  useEffect(()=>{
    fetchmoviesHandler()
  },[])
  
  const [movieslist , setmovieslist] = useState([]); 
  const [error , seterror] = useState(null);
  
  async function fetchmoviesHandler(){
    seterror(null);
    try {
        const response = await fetch('http://www.omdbapi.com/?s=starwars&apikey=d7d275b8');
        if(! response.ok){
          throw new Error ("some thing is wrong");
        }
        const data = await response.json();
        const moviesData = data.Search.map((Movie)=>{
          return{
            id : Movie.imdbID ,
            title : Movie.Title ,
            year : Movie.Year ,
            type : Movie.Type ,
            poster : Movie.Poster
          }
        })
        setmovieslist(moviesData)
      }
      catch(error){
        seterror(error.message)
    }
  }

  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index='true' element={<Home listfilms={movieslist}/>} />
        <Route path="/movie" element={<MoviePage listfilms={movieslist} />} />
        <Route path="/films/:filmid" element={<FilmDetails listfilms={movieslist}/>} />
      </Route>
    )
  )

    return (
        <Fragment>
            {/* <p>{error}</p> */}
            <RouterProvider router={routers}/>
        </Fragment>
    );
}

export default App;
