import React from "react";
import { useState, useEffect } from 'react';

var movieURLs = ["https://swapi.dev/api/films/4", 
    "https://swapi.dev/api/films/5", 
    "https://swapi.dev/api/films/6", 
    "https://swapi.dev/api/films/1", 
    "https://swapi.dev/api/films/2", 
    "https://swapi.dev/api/films/3"];

/*const moviesInfo = [
    {
       "title": "Movie #1",
       "episode_id": 1,
       "release_date": "1980-01-01"
    },
    {
       "title": "Movie #2",
       "episode_id": 2,
       "release_date": "1980-01-01"
    },
    {
       "title": "Movie #3",
       "episode_id": 3,
       "release_date": "1980-03-03"
    },
    {
       "title": "Movie #4",
       "episode_id": 4,
       "release_date": "1980-04-04"
    },
    {
       "title": "Movie #5",
       "episode_id": 5,
       "release_date": "1980-05-05"
    },
    {
       "title": "Movie #6",
       "episode_id": 6,
       "release_date": "1980-06-06"
    },
   ]*/


export default function Movie_list(props) {
    const [fetched, setFetched] = useState(false);
    const [moviesInfo, setMoviesInfo] = useState([]);
    useEffect(() =>{
        console.log("in use effect...");
        fetchMoviesInfo();
    }, []);
    async function fetchMoviesInfo(){
        for(let i = 0; i < 6; i++){
            let response = await fetch(movieURLs[i]);
            let jsonInfo = await response.json();
            console.log(i, jsonInfo.title);
            var movie = {
                title : jsonInfo.title,
                episodeID : jsonInfo.episode_id,
                releaseDate : jsonInfo.release_date,
                starships : jsonInfo.starships,
            };
            //const tempArr = moviesInfo.concat([movie]);
            moviesInfo.push(movie);
            setMoviesInfo(moviesInfo);
        }
        setFetched(true)
    }
    if(fetched){
        for(var i = 0; i < 6; i++){
            console.log(i, moviesInfo[i].title);
        }
        return (
            <div class='container'>
                <h1>Movies</h1>
                <div id='movieList'>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[0].title}</div>
                            <div class='movieID'>{moviesInfo[0].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[0].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {
                                props.set("starshipsList");
                                props.setList(moviesInfo[0].starships);}
                                }>starships</button>
                        </div>
                    </div>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[1].title}</div>
                            <div class='movieID'>{moviesInfo[1].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[1].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {props.set("starshipsList");
                            props.setList(moviesInfo[1].starships);}
                            }>starships</button>
                        </div>
                    </div>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[2].title}</div>
                            <div class='movieID'>{moviesInfo[2].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[2].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {props.set("starshipsList");
                            props.setList(moviesInfo[2].starships);}}>starships</button>
                        </div>
                    </div>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[3].title}</div>
                            <div class='movieID'>{moviesInfo[3].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[3].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {props.set("starshipsList");
                                props.setList(moviesInfo[3].starships);}}>starships</button>
                        </div>
                    </div>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[4].title}</div>
                            <div class='movieID'>{moviesInfo[4].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[4].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {props.set("starshipsList");
                            props.setList(moviesInfo[4].starships);}}>starships</button>
                        </div>
                    </div>
                    <div class='movie'>
                        <div class='movieinfo'>
                            <div class='movieName'>{moviesInfo[5].title}</div>
                            <div class='movieID'>{moviesInfo[5].episodeID}</div>
                            <div class='movieRelease'>{moviesInfo[5].releaseDate}</div>
                        </div>
                        <div class='moviebtndiv'>
                            <button class='btn' onClick={() => {props.set("starshipsList");
                            props.setList(moviesInfo[5].starships);}}>starships</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div class='container'>
                <h1>Movies</h1>
                <p>Loading...</p>
            </div>
        )
    }
}

async function FetchMoviesInfo(props){
    for(let i = 0; i < 6; i++){
        let response = await fetch(movieURLs[i]);
        let jsonInfo = await response.json();
        let tempArr = [jsonInfo];
        console.log(jsonInfo.title);
        if(props.fetched == 0){
            props.setMoviesInfo(tempArr);
        }
        else{
            props.setMoviesInfo([...props.moviesInfo, jsonInfo]);
        }
        props.setFetched(props.fetched + 1);
    }
}