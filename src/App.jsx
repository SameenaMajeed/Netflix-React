import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,Actions,ComedyMovies,HorrorMovies,RomanceMovies} from './Urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url ={originals} title = 'Netflix Original'/>
      <RowPost url= {Actions}  title = 'Action Movies' isSmall/>
      <RowPost url= {ComedyMovies}  title = 'Comedy Movies' isSmall/>
      <RowPost url= {HorrorMovies}  title = 'Horror Movies' isSmall/>
      <RowPost url= {RomanceMovies}  title = 'Romance Movies' isSmall/>
    </div>
  );
}

export default App;
