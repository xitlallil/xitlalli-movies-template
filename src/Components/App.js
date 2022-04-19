import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [allMovies, setAllMovies] =useState();
  const getMoviesApi = async () => {
    const url = `http://www.omdbapi.com/?apikey=dede5776&t=up`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("responseJson", responseJson);
    // city.favCity.weather = responseJson.weather[0].description;
};

useEffect(() => {
  getMoviesApi(allMovies);
}, []);


  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

//http://www.omdbapi.com/?apikey=dede5776&t=up

