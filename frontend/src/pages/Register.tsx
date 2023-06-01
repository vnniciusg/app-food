import React from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return(
        <div className="flex w-full h-screen bg-white">
        <div className="w-full flex items-center justify-center h-auto">
            <RegisterForm 
                title="Bem vindo!"
                subtitle="Faça seu cadastro"
             />
        </div>
     </div>
    )
}


export default Register;