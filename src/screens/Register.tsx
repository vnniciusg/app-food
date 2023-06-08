import React, { useState } from "react";
import { View, SafeAreaView, Text, StatusBar } from "react-native";

import RegisterForm from "../components/registerForm";
import TextButton from "../components/textButton";
import Botao from "../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  return (
    <SafeAreaView>
      <StatusBar />
      <View className="w-full flex items-center justify-center my-8">
        <RegisterForm
          title="Ola, bem vindo!"
          subtitle="Insira seus dados para seu cadastro"
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
    </SafeAreaView>
  );
};

export default Register;
