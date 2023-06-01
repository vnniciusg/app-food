import React from "react";

interface ITextButton {
    text:string
    onClick?: () => void;
}

const TextButton  = ({text, onClick}:ITextButton) =>{
    return(
        <button 
            className="ml-2 font-medium text-base text-violet-500"
            onClick={onClick}
        >
            {text}
        </button>
    )
}


export default TextButton;