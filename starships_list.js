import React from "react";
import {useEffect, useState } from 'react';

/*const starships = [{
    "name": "StarShip #1",
    "model": "Model #1",
    "manufacturer": "Manufacturer #1",
    "crew": "Crew #1",
    "passengers": "Passengers #1"
     },
     {
    "name": "StarShip #2",
    "model": "Model #2",
    "manufacturer": "Manufacturer #2",
    "crew": "Crew #2",
    "passengers": "Passengers #2"
     },
     {
    "name": "StarShip #3",
    "model": "Model #3",
    "manufacturer": "Manufacturer #3",
    "crew": "Crew #3",
    "passengers": "Passengers #3"
     },
     {
    "name": "StarShip #4",
    "model": "Model #4",
    "manufacturer": "Manufacturer #4",
    "crew": "Crew #4",
    "passengers": "Passengers #4"
     },
     {
    "name": "StarShip #5",
    "model": "Model #5",
    "manufacturer": "Manufacturer #5",
    "crew": "Crew #5",
    "passengers": "Passengers #5"
     },
     {
    "name": "StarShip #6",
    "model": "Model #6",
    "manufacturer": "Manufacturer #6",
    "crew": "Crew #6",
    "passengers": "Passengers #6"
     },
     {
    "name": "StarShip #7",
    "model": "Model #7",
    "manufacturer": "Manufacturer #7",
    "crew": "Crew #7",
    "passengers": "Passengers #7"
     },
    ]*/
    


export default function Starships_list(props) {
    const [selectedStarship, selectStraship] = useState("notSelected")
    const [fetched, setFetched] = useState(false);
    const [starshipsInfo, setStarshipsInfo] = useState([]);
    useEffect(() =>{
        console.log("in use effect...");
        fetchStarshipsInfo();
    }, []);
    async function fetchStarshipsInfo(){
        for(let i = 0; i < props.starshipsURLs.length; i++){
            console.log(props.starshipsURLs[i])
            let response = await fetch(props.starshipsURLs[i]);
            let jsonInfo = await response.json();
            //console.log(i, jsonInfo.title);
            var starship = {
                name : jsonInfo.name,
                model : jsonInfo.model,
                manufacturer : jsonInfo.manufacturer,
                crew : jsonInfo.crew,
                passengers : jsonInfo.passengers,
            };
            //const tempArr = moviesInfo.concat([movie]);
            starshipsInfo.push(starship);
            setStarshipsInfo(starshipsInfo);
        }
        setFetched(true)
    }
    if(fetched){
        /*for (let i = 0; i < starshipsInfo.length; i++){
            console.log(starshipsInfo[i].name);
        }*/
        return (
            <div class='container'>
                <h1>Starships</h1>
                <span id='starshipsSpan'>
                    <div class='starships'>
                        {starshipsInfo.map((item) => <Starship item={item} selectStraship={selectStraship}/>)}
                    </div>
                    <StarshipInfo info={selectedStarship}/>
                </span>
                <br></br>
                <div class='backToMovie'>
                    <button class='btn' onClick={() =>props.set("moviesList")}>back to movies</button>
                </div>
            </div>
        );
    }
    else{
        return(
        <div class='container'>
            <h1>Starships</h1>
            <p>Loading...</p>
        </div>); 
    }
}

function StarshipInfo(props){
    if(props == "notSelected"){
        return
    }
    else{
        return(
            <div id='starshipInfoContainer'>
                <h2>{props.info.name}</h2>
                <div class='starshipInfo'>
                    <div class='starshipModel'>{props.info.model}</div>
                    <div class='starshipManufacturer'>{props.info.manufacturer}</div>
                    <div class='starshipCrew'>{props.info.crew}</div>
                    <div class='starshipPassengers'>{props.info.passengers}</div>
                </div>
            </div>
        );
    }
}

function Starship(props){
    {console.log(props.item)};
    return(
        <div class='starship'>
            <button class='btn' onClick={() => props.selectStraship(props.item)}>
                {props.item.name}
            </button>
        </div>
    );
}