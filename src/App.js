import Nav from './Components/Nav';
import Card from './Components/Card';
import data from "./data.json";
import React, { useState, useEffect } from 'react';

function App() {

const [charIndex, setCharIndex] = useState();

// start with grid of 12 initially.
//store card data in JSON or name gen API
// images stored in dir or API.



// create card component to gen each card
// map cards in random order
// use state to track whether cards have been clicked
// scoreboard component that tracks current score (state)
// and best score (state + localstorage)

const randomizer = () => {
    // use state instead
   for (let i=0; i < data.characters.length; i++) {
        // this could just be a random number
        let randomNum = Math.floor(Math.random() * data.characters.length);
        // console.log(randomNum);
        setCharIndex(randomNum);

        if (charIndex) {
            // console.log(charIndex)
            // need to take random index and find corresponding character
            // console.log(data.characters[charIndex]);
            let randomChar = data.characters[charIndex];
            console.log(randomChar)
            // return (
   
            // <Card 
            //      name = {randomChar.name}
            //      src = {randomChar.src}
            //      index = {randomChar.index}
            //      local = {randomChar.local}
            //      key ={`${randomChar.name}${randomChar.index}`}
            // />)
        }
        
   }


}

 return(
    <>
    <Nav />
    <main id="main-container"> 
    {useEffect( () => randomizer(), [charIndex])}  </main>
    {/* {data.characters.map((card) => 
        <Card 
            name = {card.name}
            src = {card.src}
            index = {card.index}
            local = {card.local}
            key ={`${card.name}${card.index}`}
        />)
    } */}
  
 </>
 )
}

export default App;
