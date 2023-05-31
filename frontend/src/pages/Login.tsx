import React from "react";
import Form from "../components/Form";

const Login: React.FC =  ()  => {
    return(
     <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center h-auto">
            <Form 
                title="Bem vindo!"
                subtitle="Subtitulo"
             />
        </div>
     </div>
    )
} 


export default Login;