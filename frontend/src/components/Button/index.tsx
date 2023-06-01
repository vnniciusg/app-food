import React from "react";

interface IButton {
    isPrimary : boolean,
    text: string | null, 
    onClick?:() => void;
}

const Button =  ({isPrimary , text ,onClick} : IButton) =>{
    const buttonClasses = `active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-lg font-bold w-full ${
        isPrimary ? 'bg-black text-white' : 'bg-transparent text-black border-solid border-2 border-black'
      }`;
    return(
        <button className={buttonClasses} onClick={onClick}> 
            {text}
        </button>
    )
}


export default Button;