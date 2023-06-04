import React , { useState } from "react";
import { View , SafeAreaView , Text} from "react-native";

import { useAuth } from "../context/Auth";

import RegisterForm from "../components/registerForm";
import Botao from "../components/Button";

const Register = () =>{

    const [ email , setEmail ] = useState('')
    const [ nome , setNome ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ confirmPassword , setConfirmPassword ] = useState('')
    const [ altura , setAltura ] = useState('')
    const [ peso , setPeso ] = useState('')

    const { signUp } = useAuth();


    return(
        <SafeAreaView>
            <View className="flex w-full h-screen items-center justify-center bg-color5" >
                <View className="w-full flex items-center mt-6">
                    <RegisterForm  
                        title="Bem vindo!" 
                        subtitle="Faça seu cadastro"
                        email={email}
                        nome={nome}
                        password={password}
                        confirmPassword={confirmPassword}
                        altura={altura}
                        peso={peso}
                        setEmail={setEmail}
                        setNome={setNome}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                        setAltura={setAltura}
                        setPeso={setPeso}
                    />
                </View>
                <View className='mt-2 flex flex-col gap-y-4'>
                        <Botao isPrimary text="Cadastrar" onClick={() => signUp(nome , email , password , altura , peso)}/>
                </View>
            </View>
        </SafeAreaView>

    )
}


export default Register;