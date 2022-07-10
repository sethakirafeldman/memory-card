import React from "react"

export default function Card (props) {
    //Card grabs image, text, and renders it
    return (

        <div 
          id= {`char-${props.index}`}
          className="card-container"
          onClick={() => {props.handleClick(props.index)}}
          >
         <h1>{props.name}</h1>
         <img 
            src={window.location.origin + props.local} 
            alt ={`image of ${props.name}`}
            className="card-image"
          />
         
        </div>
  ) 
}