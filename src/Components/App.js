import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
// import Footer from "./Footer"
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
// import {useEffect, useState } from "react";

function App() {
  
  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </Router>
    </>
 
  );
}

export default App;

//http://www.omdbapi.com/?apikey=dede5776&t=up

