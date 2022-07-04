import React from "react";


const starships = [{
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
    ]
    


export default function starships_list() {
    return (
        <div class='container'>
            <h1>Starships</h1>
            <div class='starships'>
                <div class='starship'>
                    <button class='btn'>{starships[0].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[1].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[2].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[3].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[4].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[5].name}</button>
                </div>
                <div class='starship'>
                    <button class='btn'>{starships[6].name}</button>
                </div>
            </div>
            <div>
                <button class='btn'>back to movies</button>
            </div>
        </div>
    );
}