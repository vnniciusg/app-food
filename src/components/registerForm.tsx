import React from "react";
import { View, Text , ScrollView } from "react-native";

import Label from "./Label";
import Botao from "./Button";
import TextButton from "./textButton";
import { IForm } from "../shared/types/IForm";


const RegisterForm:React.FC <IForm> = ({ title , subtitle }) =>{
    return(
        <View className="w-full h-screen px-10 py-20 mt-4 rounded-3xl border-3 ">
            <Text className="text-4xl mb-1 font-bold text-center text-color3">{title}</Text>
            <Text className="font-medium text-lg text-color2 mt-4 text-center ">{subtitle}</Text>
                <View className="mt-2 flex flex-col">
                    <Label name="Nome" iconName='' type="default" placeholder="Digite seu Nome: "/>
                    <Label name="Email" iconName='' type="email-address" placeholder="Digite seu E-mail: " />
                    <Label name="Senha" iconName='' type="default" placeholder="Digite sua senha: "/>
                    <Label name="Confirmar Senha" iconName='' type="default" placeholder="Confirme sua senha: "/> 
                    <View className="flex flex-row gap-x-6 mb-5">
                        <View className="flex-1">
                            <Label name="Altura" iconName='' type="default" placeholder="Informe sua altura"/>
                        </View>
                        <View className="flex-1">
                            <Label name="Peso" iconName='' type="default" placeholder="Informe seu Peso" />
                        </View>
                    </View>
                <View>
                    

            </View>
                    <View className='mt-6 flex flex-col gap-y-4'>
                        <Botao isPrimary text="Cadastrar" />
                    </View>
                    <View className="mt-4 flex flex-row gap- justify-center items-start">
                        <Text className="shadow-2xl shadow-black font-medium text-base text-black">Ja possui cadastro?</Text>
                        <TextButton text="Fazer Login" />
                    </View>
        </View>
  

    </View>
    )
}


export default RegisterForm;