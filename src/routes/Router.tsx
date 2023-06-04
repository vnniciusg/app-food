import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../context/Auth";


export function Router(){
   
    const { authData } = useAuth()
    return(
        
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack/>}
        </NavigationContainer>
    )
}