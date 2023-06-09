import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RegisterForm from '../components/registerForm';
import { useAuth } from '../context/Auth';

const Register = () => {
	const { onRegister } = useAuth();

	const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [altura, setAltura] = useState('');
	const [peso, setPeso] = useState('');

	const navigation = useNavigation();

	const register = async () => {
		const result = await onRegister!({
			name: nome,
			email,
			password,
			peso,
			altura,
		});
		if (result && result.error) {
			ToastAndroid.show(result.msg, ToastAndroid.SHORT);
		} else {
			navigation.navigate('Login');
		}
	};

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
					register={register}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Register;
