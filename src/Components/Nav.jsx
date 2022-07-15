import React, {useState, useEffect} from 'react';

export default function Nav (props) {

    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    const updateScore = () => {
        // sets tempScore arr to highScore val
        let tempScore = [highScore]; 
        tempScore.push(props.score);
        //sorts scores from lowest to highest
        tempScore.sort((a,b) => a - b);
        // get highest score in array.
        let highest = tempScore[tempScore.length -1];
        setHighScore(highest);
    }

    useEffect(()=>{
        if (props.gameStatus) {
            updateScore();
            setCurrentScore(props.score);
        }
    },[props.score]);
    
    return (

    <nav>
        <h1>Pixar Memory Game</h1>
   
        
        <h1>Score: {currentScore}</h1> 
        <h1>High Score: {highScore} </h1>

        {props.gameStatus ? 
            null
            :
            <>
            <h1 className='game-over'>Game over! You scored {currentScore} points</h1>
            <p>Click a charcter to start over.</p>
            </>
        }

        {currentScore == props.data.characters.length ? 
            <h1 className='winner'>Wow, nice memorizing, you got all {props.data.characters.length}!</h1>
            :
            null
        }
        
    </nav>
    )
}