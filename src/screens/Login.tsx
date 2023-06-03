import React from "react";
import LoginForm from "../components/loginForm";
import { View } from "react-native";


const Login: React.FC = () =>{
    return(
        <View className="flex w-full h-screen items-center justify-center bg-color5 ">
            <View className="w-full flex items-center">
                <LoginForm 
                    title="Olá, bem vindo de volta!"
                    subtitle="Entre com seus dados"
                />
            </View>
        </View>
    )
}


export default Login;