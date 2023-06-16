import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import jwt from 'jsonwebtoken';

import { IAuthProps } from '../types/IAuthProps';
import { IAuthState } from '../types/IAuthState';
import { IRegisterProps } from '../types/IRegisterProps';
import { ILoginProps } from '../types/ILoginProps';

import config from '../config';

const TOKEN_KEY = config.TOKEN_KEY;
export const API_URL = config.API_URL;

const AuthContext = createContext<IAuthProps>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const [authState, setAuthState] = useState<IAuthState>({
		token: null,
		authenticated: false,
	});

	useEffect(() => {
		const loadToken = async () => {
			const token = await SecureStore.getItemAsync(TOKEN_KEY);
			if (token) {
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			}

			setAuthState({
				token: token,
				authenticated: true,
			});
		};
		loadToken();
	}, []);

	const register = async ({ email, name, password, altura, peso }: IRegisterProps) => {
		try {
			return await axios.post(`${config.API_URL}/api/user/register`, {
				email,
				name,
				password,
				altura,
				peso,
			});
		} catch (e: any) {
			return { error: true, msg: e.response.data.message };
		}
	};

	const login = async ({ email, password }: ILoginProps) => {
		try {
			const result = await axios.post(`${config.API_URL}/api/user/login`, {
				email,
				password,
			});
			setAuthState({
				token: result.data.token,
				authenticated: true,
			});

			axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

			await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

			return result;
		} catch (e: any) {
			return { error: true, status: e.response.data.status, msg: e.response.data.message };
		}
	};

	const logout = async () => {
		await SecureStore.deleteItemAsync(TOKEN_KEY);

		axios.defaults.headers.common['Authorization'] = '';

		setAuthState({
			token: null,
			authenticated: false,
		});
	};

	const value = {
		authState,
		onRegister: register,
		onLogin: login,
		onLogout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
