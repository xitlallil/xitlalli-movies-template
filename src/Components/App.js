import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
// import Footer from "./Footer"
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import {useEffect, useState } from "react";
import Footer from "./Footer"

function App() {
  

const movieTitles = ["Up", "Frozen", "Toy Story", "Lion King", "Avatar"]



const [movieData, setMovieData] =useState([]);

const getMoviesApi = async ( ) => {
  let movieCollection = [];
  for (let i=0; i < movieTitles.length; i++) {
    const url= `http://www.omdbapi.com/?apikey=dede5776&t=${movieTitles[i]}`;
    await fetch(url)
    .then((response) => response.json())
    .then((data)=> {
      movieCollection.push(data)
    });
  }
  setMovieData(movieCollection);
};

useEffect(()=> {
  getMoviesApi();
}, []);
//   const getMoviesApi = async (movieTitles) => {
//     await movieTitles.map(async (movie) => {
//     const url = `http://www.omdbapi.com/?apikey=dede5776&t=${movie}`;
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     let movieDataCopy = movieData
//     movieDataCopy.push(responseJson)
//     setMovieData(movieDataCopy)
//   });

  
// };





  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home movies={movieData}/>}/>
      <Route path='/profile' element={<Profile movies={movieTitles}/>}/>
      
    </Routes>
      <Footer/>
    </Router>
    </>

  );
}

export default App;

//http://www.omdbapi.com/?apikey=dede5776&t=up

