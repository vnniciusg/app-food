import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";

import RegisterForm from "../components/registerForm";

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
      <KeyboardAvoidingView
        className="flex w-full h-screen items-center justify-center bg-color5"
        behavior="padding"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="w-full flex items-center">
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
