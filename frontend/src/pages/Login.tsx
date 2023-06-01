import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC =  ()  => {
    return(
     <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center h-auto">
            <LoginForm 
                title="Olá, bem vindo de volta!"
                subtitle="Entre com seus dados"
             />
        </div>
     </div>
    )
} 


export default Login;