import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoginForm from "../components/loginForm";
import Botao from "../components/Button";
import TextButton from "../components/textButton";

import { useAuth } from "../context/Auth";

const Login = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View className="flex w-full h-screen items-center justify-center bg-color5 ">
      <View className="w-full flex items-center">
        <LoginForm
          title="Olá, bem vindo de volta!"
          subtitle="Entre com seus dados"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={SetPassword}
        />
        <View className="flex flex-col gap-y-4 justify-between">
          <View className="mt-8 flex justify-between items-start">
            <TextButton text="Esqueceu sua senha?" />
          </View>
          <View className="mt-8 flex flex-col gap-y-4">
            <Botao
              onClick={() => signIn(email, password)}
              isPrimary
              text="Login"
            />
          </View>
          <View className="mt-8 flex flex-row gap- justify-center items-start">
            <Text className="font-medium text-xs text-black">
              Ainda não tem uma conta?
            </Text>
            <TextButton
              text="Cadastrar"
              onPress={() => navigation.navigate("Registro")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
