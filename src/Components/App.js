import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
// import Footer from "./Footer"
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import {useEffect, useState } from "react";

function App() {
  

const movieTitles = ["Up", "Frozen"]



// const [allMovies, setAllMovies] =useState();
  const getMoviesApi = async (movieTitles) => {
    await movieTitles.map(async (movie) => {
    const url = `http://www.omdbapi.com/?apikey=dede5776&t=${movie}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log("responseJson", responseJson);
    // city.favCity.weather = responseJson.weather[0].description;
});
  };


  getMoviesApi(movieTitles);



  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home movies={movieTitles}/>}/>
      <Route path='/profile' element={<Profile movies={movieTitles}/>}/>
      
    </Routes>
    </Router>
    </>
 
  );
}

export default App;

//http://www.omdbapi.com/?apikey=dede5776&t=up

