import React from 'react';
import { View, Text } from 'react-native';

import Label from '../Label';

import { ILoginFormProps } from '../../types/components/ILoginFormProps';

const LoginForm: React.FC<ILoginFormProps> = ({ title, subtitle, email, password, setEmail, setPassword }) => {
	return (
		<View className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-transparent border-3 border-[#d4e8fc]">
			<Text className="text-4xl font-bold text-center text-color3">{title}</Text>
			<Text className="font-medium text-lg text-color2 mt-4 text-center">{subtitle}</Text>
			<View className="mt-8 mb-4">
				<Label name="E-mail" iconName="email-outline" placeholder="E-mail" value={email} onChangeText={setEmail} />
				<Label
					name="Password"
					iconName="key-outline"
					placeholder="Senha"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>
		</View>
	);
};

export default LoginForm;
