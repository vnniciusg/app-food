import React from 'react';

interface IDropDown {
    onChange : (valor:string) => void
    required: boolean
    value : string
    itens: string[]
}

const Dropdown = (props : IDropDown) => {
    return (
      <div className="flex flex-col">
        <select
          onChange={(event) => props.onChange(event.target.value)}
          required={props.required}
          value={props.value}
          className='bg-transparent border-2 border-gray-200 shadow-lg w-full font-normal p-4 rounded-xl mt-1 appearance-none focus:outline-none focus:ring-0 selection-none text-black'
        >
          <option value="">Qual seu objetivo?</option>
          {props.itens.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;