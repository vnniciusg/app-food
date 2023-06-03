import React from "react";
import { View, Text } from "react-native";
import Label from "./Label";
import Botao from "./Button";
import TextButton from "./textButton";
import { IForm } from "../shared/types/IForm";


const LoginForm:React.FC <IForm> = ({ title , subtitle }) =>{
    return(
        <View className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-transparent border-3 border-[#d4e8fc]">
        <Text className="text-4xl font-bold text-center text-color3">{title}</Text>
        <Text className="font-medium text-lg text-color2 mt-4 text-center">{subtitle}</Text>
        <View className="mt-8 mb-4">
            <Label 
                name="E-mail"
                iconName="email-outline"
                type="default"
                placeholder="E-mail"
            />
            <Label 
                name="Password"
                iconName="email-outline"
                type="default"
                placeholder="Senha"
                secureTextEntry
            />
        </View>
        <View className="flex flex-col gap-y-4 justify-between">
            <View className="mt-8 flex justify-between items-start">
                <TextButton text="Esqueceu sua senha?" />
            </View>
            <View  className='mt-8 flex flex-col gap-y-4'>
                <Botao isPrimary text="Login"/>
            </View>
            <View className="mt-8 flex flex-row gap- justify-center items-start">
                <Text className="font-medium text-base text-black"> Ainda não tem uma conta?</Text>
                <TextButton text="Cadastrar"/>
            </View>
        </View>

    </View>
    )
}


export default LoginForm;