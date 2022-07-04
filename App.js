import logo from './logo.svg';
import './App.css';
import Movie_list from './Movie_list';
import Starships_list from './starships_list';
import React, { useState } from 'react';

const starships = [
  "https://swapi.dev/api/starships/21/",
  "https://swapi.dev/api/starships/32/",
  "https://swapi.dev/api/starships/49/",
  "https://swapi.dev/api/starships/48/"
];

function App() {
  const [page, setPage] = useState("moviesList");
  const [starshipsList, setStarshipsList] = useState(null);
  if(page == "moviesList"){
    return (
      <div className="App">
        <Movie_list state={page} set={setPage} setList={setStarshipsList} />
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Starships_list state={page} set={setPage} starshipsURLs={starshipsList}/>
      
      </div>
    );
  }
}

export default App;
