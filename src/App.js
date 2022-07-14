import Nav from './Components/Nav';
import Card from './Components/Card';
import data from "./data.json";
import React, { useState, useEffect } from 'react';

function App() {

const [charIndex, setCharIndex] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
// const [charIndex, setCharIndex] = useState([]);

const [charArr, setCharArr] = useState([]);
const [clickedChars, setClickedChars] = useState([]);
const [gameStatus, setGameStatus] = useState(true);


// set index to number of characters
// issue with render order
// const setIndex = ()=> {
//     let newArr = [];
//     data.characters.forEach((char)=>{
//         newArr.push(char.index);
//     })
//     setCharIndex(newArr);
// };

// useEffect( () => setIndex(), [0]);

// map cards in random order
const randomizer = () => {
        // console.log(charIndex)
        // setIndex();
        let temp = charIndex;
        temp.sort( () => Math.random() - 0.5);
        setCharIndex(temp);   
    //when random nums in array, apply sequentially with loop to character index
    for (let i = 0; i < data.characters.length; i++) {
        let randomChar = data.characters[charIndex[i]];
        // console.log(randomChar);
        // this creates double the length I want
        setCharArr(prevState => (
            [...prevState,
            randomChar]
        ));  
    }
};

// useEffect( () => randomizer(), [charIndex])


// use state to track whether cards have been clicked
const handleClick = (index) => {
    // update clickedChars array to track clicked chars.
    setClickedChars(prevState=>
        [...prevState,
          index  
        ])

    setGameStatus(true);
    
    // take length of clickedChars and create score
     // check if clickedArr contains duplicates 
    if (clickedChars.includes(index)) {
        // reset clickedChars + score
        setClickedChars([]);
        setGameStatus(false);
    }
    // reset charArr state to run randomizer        
    setCharArr([]); 
    randomizer();
};

 return(
    <>
        <Nav
            score = {clickedChars.length}
            gameStatus = {gameStatus}
        />
        <main id="main-container"> 
            {useEffect( () => randomizer(),[0])}

            {charIndex.length > 0 ? 
            charArr.map((char)=> {
                return (
                    <Card 
                    name = {char.name}
                    src = {char.src}
                    index = {char.index}
                    local = {char.local}
                    key ={`${char.name}${char.index}`}
                    handleClick = {handleClick}
                />
                )
            })
            :
            null
            }
        </main>
    </>
 )
}

export default App;
