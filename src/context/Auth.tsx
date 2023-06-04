import React , { createContext, useState , ReactNode, useContext } from "react";
import { Alert } from 'react-native'


import { authService } from "../services/authService";



export interface IAuthData {
    token: string
    nome : string
    email : string
}

interface IAuthContextContex {
    authData? : IAuthData
    signIn : (email: string , password : string ) => Promise<IAuthData>
    signOut : () => Promise<void>
}

interface IAuthProvider{
    children : ReactNode
}


export const AuthContext = createContext<IAuthContextContex>({} as IAuthContextContex);


const AuthProvider : React.FC<IAuthProvider> = ({children}) =>{

    const [authData , setAuthData ] = useState<IAuthData>();

    async function signIn( email : string , password : string ):Promise<IAuthData>{
        try{
            const auth = await authService.signIn(email,password)
            setAuthData(auth)
            return auth;
        }catch(error){
            Alert.alert(error.message , 'Tente novamente')
        }

    }

    async function signOut():Promise<void>{
        setAuthData(undefined)

        return
    }

    return(
        <AuthContext.Provider value={{authData , signIn , signOut}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}