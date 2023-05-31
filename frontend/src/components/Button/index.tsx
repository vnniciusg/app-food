import React from "react";

interface IButton {
    text:string
}

const Button  = ({text}:IButton) =>{
    return(
        <button 
            className="ml-2 font-medium text-base text-violet-500"
        >
            {text}
        </button>
    )
}


export default Button;