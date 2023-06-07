import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Label from "./Label";
import Botao from "./Button";
import TextButton from "./textButton";

import { useAuth } from "../context/Auth";

export interface IRegisterForm {
  title: string;
  subtitle?: string;
  email: string;
  password: string;
  nome: string;
  confirmPassword: string;
  altura: string;
  peso: string;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setNome: (name: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setAltura: (altura: string) => void;
  setPeso: (peso: string) => void;
}

const RegisterForm: React.FC<IRegisterForm> = ({
  title,
  subtitle,
  email,
  nome,
  password,
  confirmPassword,
  altura,
  peso,
  ...rest
}) => {
  const { onRegister } = useAuth();

  const navigation = useNavigation();

  const register = async () => {
    const result = await onRegister!({
      name: nome,
      email,
      password,
      peso,
      altura,
    });
    console.log(result);
    if (result && result.error) {
      alert(result.msg);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View className="w-full h-screen px-10 py-20 mt-4 rounded-3xl border-3 ">
      <Text className="text-4xl mb-1 font-bold text-center text-color3">
        {title}
      </Text>
      <Text className="font-medium text-lg text-color2 mt-4 text-center ">
        {subtitle}
      </Text>
      <View className="mt-2 flex flex-col">
        <Label
          name="Nome"
          iconName=""
          placeholder="Digite seu Nome: "
          value={nome}
          onChangeText={rest.setNome}
        />
        <Label
          name="Email"
          iconName=""
          placeholder="Digite seu E-mail: "
          value={email}
          onChangeText={rest.setEmail}
        />
        <Label
          name="Senha"
          iconName=""
          placeholder="Digite sua senha: "
          value={password}
          onChangeText={rest.setPassword}
        />
        <Label
          name="Confirmar Senha"
          iconName=""
          placeholder="Confirme sua senha: "
          value={confirmPassword}
          onChangeText={rest.setConfirmPassword}
        />
        <View className="flex flex-row gap-x-4 mb-5">
          <View className="flex-1">
            <Label
              name="Altura"
              iconName=""
              placeholder="Altura"
              value={altura}
              onChangeText={rest.setAltura}
            />
          </View>
          <View className="flex-1">
            <Label
              name="Peso"
              iconName=""
              placeholder="Peso"
              value={peso}
              onChangeText={rest.setPeso}
            />
          </View>
        </View>
        <View></View>
        <View className="flex flex-col gap-y-1">
          <View className="mt-2 flex flex-row gap- justify-center items-start">
            <Text className="shadow-2xl shadow-black font-medium text-xs text-black">
              Ja possui cadastro?
            </Text>
            <TextButton
              text="Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View className="mt-2 flex flex-col gap-y-4">
            <Botao isPrimary text="Cadastrar" onClick={register} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;
