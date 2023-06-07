import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
