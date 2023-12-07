import React from "react"


// JSX
const Hello=()=>{
    let a = 10  

    let h1Style ={
        color : "red",
        backgroundColor : "yellow",
        textAlign : "center"
    } 

    let str = "{}"


    return (
        <div className="hello">
            <h1 style={h1Style}>Hello World, How are you </h1>
            <p style={{backgroundColor:"blue", color:"white"}}> {2+3} </p>
            <p>This is a paragraph</p>
            <p>{str}</p>
        </div>
    )
}