import React from "react";

interface ITextButton {
    text:string
}

const TextButton  = ({text}:ITextButton) =>{
    return(
        <button 
            className="ml-2 font-medium text-base text-violet-500"
        >
            {text}
        </button>
    )
}


export default TextButton;