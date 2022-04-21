import {useEffect, useState } from "react";


function Home() {


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

}

export default Home;