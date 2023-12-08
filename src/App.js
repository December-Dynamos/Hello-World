import React from "react"  // 17.2
import Button  from "./Components/Button"


// JSX

const App=()=>{

    return(
        <div>
            <h1>Abhishek</h1>
            <p>I am fruit Lover</p>

            <Button 
              fruitName="Bananna"
              price = "20"
              description = "This is a yellow fruit"
            /> 

            <Button
                fruitName="Mango"
                price = "50"
                description = "This is a yellow fruit" />

            <Button
                fruitName="Apple"
                price = "100"
                description = "This is a red fruit" />

            

        </div>
    )
     
}


export default App








// let a = 10  

//     // let h1Style ={
//     //     color : "red",
//     //     backgroundColor : "yellow",
//     //     textAlign : "center"
//     // } 

//     let str = "{}"


//     return (
//         <div className="hello">
//             <h1> Hello World, How are you </h1>
//             <p> {2+3} </p>
//             <p>This is a paragraph</p>
//             <p>{str}</p>
//         </div>
//     )