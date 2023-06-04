import React , { useState } from "react";
import { View, Text , ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'

import Label from "./Label";
import Botao from "./Button";
import TextButton from "./textButton";


export interface IRegisterForm {
    title : string
    subtitle? : string
    email: string
    password : string
    nome : string
    confirmPassword : string,
    altura : string,
    peso : string
    setPassword : ( password : string ) => void
    setEmail : ( email: string ) => void
    setNome: ( nome : string ) => void
    setConfirmPassword : ( confirmPassword : string)  => void
    setAltura : ( altura : string,) => void
    setPeso : ( peso : string) => void
}



const RegisterForm:React.FC <IRegisterForm> = ({ title , subtitle ,...rest}) =>{

    const navigation = useNavigation();

    return(
        <View className="w-full h-screen px-10 py-20 mt-4 rounded-3xl border-3 ">
            <Text className="text-4xl mb-1 font-bold text-center text-color3">{title}</Text>
            <Text className="font-medium text-lg text-color2 mt-4 text-center ">{subtitle}</Text>
                <View className="mt-2 flex flex-col">
                    <Label name="Nome" iconName=''  placeholder="Digite seu Nome: " value={rest.nome} onChangeText={rest.setNome}/>
                    <Label name="Email" iconName='' placeholder="Digite seu E-mail: " value={rest.email} onChangeText={rest.setEmail}/>
                    <Label name="Senha" iconName=''  placeholder="Digite sua senha: " value={rest.password} onChangeText={rest.setPassword}/>
                    <Label name="Confirmar Senha" iconName=''  placeholder="Confirme sua senha: " value={rest.confirmPassword} onChangeText={rest.setConfirmPassword}/> 
                    <View className="flex flex-row gap-x-6 mb-5">
                        <View className="flex-1">
                            <Label name="Altura" iconName='' placeholder="Informe sua altura" value={rest.altura} onChangeText={rest.setAltura}/>
                        </View>
                        <View className="flex-1">
                            <Label name="Peso" iconName='' placeholder="Informe seu Peso" value={rest.peso} onChangeText={rest.setPeso} />
                        </View>
                    </View>
                <View>
                    

            </View>
                    <View className="mt-4 flex flex-row gap- justify-center items-start">
                        <Text className="shadow-2xl shadow-black font-medium text-base text-black">Ja possui cadastro?</Text>
                        <TextButton text="Fazer Login" onPress={() => navigation.navigate('Login')} />
                    </View>
        </View>
  

    </View>
    )
}


export default RegisterForm;