import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { IAuthProps } from "../types/IAuthProps";
import { IAuthState } from "../types/IAuthState";
import { IRegisterProps } from "../types/IRegisterProps";
import { ILoginProps } from "../types/ILoginProps";
import secret from "../../secret";

const TOKEN_KEY = secret.TOKEN_KEY;
export const API_URL = secret.API_URL;

const AuthContext = createContext<IAuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<IAuthState>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      setAuthState({
        token: token,
        authenticated: true,
      });
    };
    loadToken();
  }, []);

  const register = async ({
    name,
    email,
    password,
    altura,
    peso,
  }: IRegisterProps) => {
    try {
      return await axios.post(`${API_URL}/api/user/register`, {
        name,
        email,
        password,
        altura,
        peso,
      });
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const login = async ({ email, password }: ILoginProps) => {
    try {
      const result = await axios.post(`${API_URL}/api/user/login`, {
        email,
        password,
      });
      console.log("");
      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    axios.defaults.headers.common["Authorization"] = "";

    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
