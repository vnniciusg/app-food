import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../context/Auth";

export function Router() {
  const { authState } = useAuth();
  return (
    <NavigationContainer>
      {authState?.authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
