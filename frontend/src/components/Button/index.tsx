import React from "react";

interface IButtonProps {
    isPrimary : boolean,
    text: string | null, 
    onClick?:() => void;
}

const Button =  ({isPrimary , text ,onClick} : IButtonProps) =>{
    const buttonClasses = `active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-lg font-bold w-full ${
        isPrimary ? 'bg-violet-500 text-white' : 'bg-white text-violet-500 border-solid border-2 border-violet-500'
      }`;
    return(
        <button className={buttonClasses} onClick={onClick}> 
            {text}
        </button>
    )
}


export default Button;