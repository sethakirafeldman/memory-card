import React from "react"

export default function Card (props) {
    //Card grabs image, text, and renders it
    console.log(props.src)
    // console.log(characters)
    return (

        <div id= {`char-${props.index}`}>
         <h1>{props.name}</h1>
         <img src={props.src} alt ={`image of ${props.name}`}/>
         
        </div>
  ) 
}