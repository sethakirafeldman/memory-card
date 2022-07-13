import React, {useState, useEffect} from 'react';

export default function Nav (props) {

    const [highScore, setHighScore] = useState(0);

    const updateScore = () => {
        // sets tempScore arr to highScore val
        let tempScore = [highScore]; 
        tempScore.push(props.score);
        //sorts scores from lowest to highest
        tempScore.sort();
        // get highest score in array.
        let highest = tempScore[tempScore.length -1];
        setHighScore(highest);
    }

    useEffect(()=>{
        if (props.gameStatus) {
            updateScore();
        }
    },[props.score]);
    
    return (

    <nav>
        <h1>Pixar Memory Game</h1>
        {props.gameStatus ? 
            <h1>Score: {props.score}</h1> 
            :
            <h1 className='game-over'>Game over!</h1>
        }
    
        <h1>High Score: {highScore} </h1>
 
        </nav>
    )
}