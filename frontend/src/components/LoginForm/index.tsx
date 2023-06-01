import React from "react";
import Label from "../Label";
import TextButton from "../TextButton";
import Button from "../Button";
import { IForm } from "../../shared/types/IForm";
import { useHistory  } from "react-router-dom";


const LoginForm = ( {title , subtitle} : IForm) =>{
    const history = useHistory();
    const handleClick = () =>{
        history.push('/register')
    }

    return(
        <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-transparent border-3 border-gray-100 ">
            <h1 className="text-4xl font-bold text-center text-primary">{title}</h1>
            <p className="font-medium text-lg text-gray-500 mt-4 text-center">{subtitle}</p>
            <div className="mt-8">
                
                <Label
                    name=""
                    type='text'
                    placeholder="E-mail"
                    required
                />

                <Label
                    name=""
                    type='password'
                    placeholder="Senha"
                    required
                />
                
            </div>
            <div className="mt-8 flex justify-between items-center">
                <button className="font-medium text-base text-gray-500">Esqueceu a senha?</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>

                <Button 
                    isPrimary
                    text="Login"
                />

            </div>
            <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base text-gray-500"> Ainda não tem uma conta?</p>
                <TextButton  
                    text="Fazer Cadastro"
                    onClick={handleClick}
                />
            </div>


        </div>

    )
} 


export default LoginForm;