import React from "react";
import Label from "./Label";
import Button from "../Button";

interface IForm {
    title : string,
    subtitle :string
}

const Form = ( {title , subtitle} : IForm) =>{
    return(
        <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 shadow-xl">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="font-medium text-lg text-gra-500 mt-4">{subtitle}</p>
            <div className="mt-8">
                
                <Label
                    name="E-mail"
                    type=''
                    placeholder=""
                    required
                />

                <Label
                    name="Senha"
                    type=''
                    placeholder=""
                    required
                />
            </div>
            <div className="mt-8 flex justify-between items-center">
                <button className="font-medium text-base text-violet-500">Esqueceu a senha?</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>
            </div>
            <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base"> Ainda nao tem uma conta?</p>
                <Button  
                    text="Fazer Cadastro"
                />
            </div>


        </div>

    )
} 


export default Form;