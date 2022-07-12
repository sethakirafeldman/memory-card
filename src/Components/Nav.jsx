import React from 'react';

export default function Nav (props) {
    return(

    <nav>
        <h1>Pixar Memory Game</h1>
        {props.gameStatus ? 
            <h1>Score: {props.score}</h1> 
            :
            <h1 className='game-over'>Game over!</h1>
        }
        <h1>High Score: </h1>
        </nav>
    )
}