import React, { useState } from 'react';
import { Text, View, StatusBar, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoginForm from '../components/Login/loginForm';
import Botao from '../components/Button';
import TextButton from '../components/textButton';

import { useAuth } from '../context/Auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, SetPassword] = useState('');

	const { onLogin } = useAuth();

	const navigation = useNavigation();

	const login = async () => {
		const result = await onLogin!({ email, password });
		if (result && result.error) {
			if (result.status === 404) ToastAndroid.show(result.msg, ToastAndroid.SHORT);
			else if (result.status === 401) {
				ToastAndroid.show(result.msg, ToastAndroid.SHORT);
			} else {
				ToastAndroid.show(result.msg, ToastAndroid.SHORT);
			}
		} else {
			ToastAndroid.show('Login Realizado com sucesso', ToastAndroid.SHORT);
		}
	};

	return (
		<SafeAreaView>
			<StatusBar />
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
						<View className="mt-8 flex justify-between items-center">
							<TextButton text="Esqueceu sua senha?" />
						</View>
						<View className="mt-8 flex flex-col gap-y-4">
							<Botao onClick={login} isPrimary text="Login" />
						</View>
						<View className="mt-8 flex flex-row gap- justify-center items-start">
							<Text className="font-medium text-xs text-black">Ainda não tem uma conta?</Text>
							<TextButton text="Cadastrar" onPress={() => navigation.navigate('Registro')} />
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;
