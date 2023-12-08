// import React from "react";


 // Js object but read only


const Button = ({fruitName,price,description})=>{
    

    return(
        <div>
            <button>{fruitName}</button>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Button;




// props.fruitName = "Mango"

// console.log(props) 
    //props =  {fruitName : "Bananna",price : "20",description : "This is a yellow fruit"}

    // let {fruitName,price,description} = props



