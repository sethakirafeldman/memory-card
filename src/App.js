import Nav from './Components/Nav';
import Card from './Components/Card';
import data from "./data.json";
import React, { useState, useEffect } from 'react';

function App() {

const [charIndex, setCharIndex] = useState([0,1,2,3,4,5,6]);
const [charArr, setCharArr] = useState([]);

// start with grid of 12 initially.
//store card data in JSON or name gen API
// images stored in dir or API.



// create card component to gen each card
// map cards in random order
// use state to track whether cards have been clicked
// scoreboard component that tracks current score (state)
// and best score (state + localstorage)

const randomizer = () => {
    // loop should use charIndex array length
    // store random nums in a set of unique values within charIndex state.
        // charIndex has vals 0-6 in arr
        // rearrange values
        let temp = charIndex;
        temp.sort( () => Math.random() - 0.5);
        setCharIndex(temp);   
        console.log(charIndex)
    //when random nums in array, apply sequentially with loop to character index
    for (let i = 0; i < data.characters.length; i++) {
        let randomChar = data.characters[charIndex[i]];
        console.log(randomChar);
        // this creates double the length I want
        setCharArr(prevState => (
            [...prevState,
            randomChar]
        ));  
    }

}

 return(
    <>
    <Nav />
    <main id="main-container"> 
    {useEffect( () => randomizer(), [])}  </main>

    {charIndex ? 
    charArr.map((char)=> {
        return (
            <Card 
            name = {char.name}
            src = {char.src}
            index = {char.index}
            local = {char.local}
            key ={`${char.name}${char.index}`}
        />
        )
    })
    :
    null
    }

    </>
 )
}

export default App;
