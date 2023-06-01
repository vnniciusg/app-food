import React from "react";

interface ILabel {
    name?:string,
    type:string,
    placeholder:string,
    required:boolean | undefined,
}

const Label = ({name ,type , placeholder , required} : ILabel) =>{
    return(
        <div className="flex flex-col">
            <label className="text-lg font-medium">{name}</label>
            <input 
                className="w-full border-2 border-gray-200  rounded-xl p-4  mt-2 bg-transparent placeholder:font-normal shadow-lg placeholder-black"
                type = {type}
                placeholder={placeholder}
                required={required}
            />
        </div>

    )
}

export default Label;