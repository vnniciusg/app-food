import React from "react";
import RegisterForm from "../components/registerForm";
import { View , SafeAreaView} from "react-native";

const Register = () =>{
    return(
        <SafeAreaView>
            <View className="flex w-full h-screen items-center justify-center bg-color5" >
                <View className="w-full flex items-center mt-6">
                    <RegisterForm  title="Bem vindo!" subtitle="Faça seu cadastro" />
                </View>
            </View>
        </SafeAreaView>

    )
}


export default Register;