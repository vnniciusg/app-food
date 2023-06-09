import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Label from '../Label';
import Botao from '../Button';
import TextButton from '../textButton';

export interface IRegisterForm {
	title: string;
	subtitle?: string;
	email: string;
	password: string;
	nome: string;
	confirmPassword: string;
	altura: string;
	peso: string;
	setPassword: (password: string) => void;
	setEmail: (email: string) => void;
	setNome: (name: string) => void;
	setConfirmPassword: (confirmPassword: string) => void;
	setAltura: (altura: string) => void;
	setPeso: (peso: string) => void;
	register: () => void;
}

const RegisterForm: React.FC<IRegisterForm> = ({
	title,
	subtitle,
	email,
	nome,
	password,
	confirmPassword,
	altura,
	peso,
	register,
	...rest
}) => {
	const [currentStep, setCurrentStep] = useState(1);
	const navigation = useNavigation();

	const handleNextStep = () => {
		setCurrentStep(currentStep + 1);
	};
	const handleBackStep = () => {
		setCurrentStep(currentStep - 1);
	};

	const renderStepOne = () => {
		return (
			<View className="flex flex-col mt-2">
				<Label
					name="Nome"
					iconName="account-outline"
					placeholder="Digite seu Nome: "
					value={nome}
					onChangeText={rest.setNome}
				/>
				<Label
					name="Email"
					iconName="email-outline"
					placeholder="Digite seu E-mail: "
					value={email}
					onChangeText={rest.setEmail}
				/>
				<Label
					name="Senha"
					iconName="key-outline"
					placeholder="Digite sua senha: "
					value={password}
					secureTextEntry
					onChangeText={rest.setPassword}
				/>
				<Label
					name="Confirmar Senha"
					iconName="key-outline"
					placeholder="Confirme sua senha: "
					value={confirmPassword}
					secureTextEntry
					onChangeText={rest.setConfirmPassword}
				/>
				<View className="flex flex-col my-2 ">
					<View className="mt-2 flex flex-row gap- justify-center items-start">
						<Text className="shadow-2xl shadow-black font-medium text-xs text-black">Ja possui cadastro?</Text>
						<TextButton text="Login" onPress={() => navigation.navigate('Login')} />
					</View>
				</View>
				<View className="flex w-full self-center justify-center">
					<Botao onClick={handleNextStep} text="Avançar" isPrimary />
				</View>
			</View>
		);
	};

	const renderStepTwo = () => {
		return (
			<View className="flex flex-col mt-2">
				<Label
					name="Altura"
					iconName="human-male-height-variant"
					placeholder="Digite sua altura"
					value={altura}
					onChangeText={rest.setAltura}
				/>
				<Label
					name="Peso"
					iconName="weight-kilogram"
					placeholder="Digite o seu Peso"
					value={peso}
					onChangeText={rest.setPeso}
				/>
				<View className="flex flex-col my-2 ">
					<View className="mt-2 flex flex-row gap- justify-center items-start">
						<Text className="shadow-2xl shadow-black font-medium text-xs text-black">Ja possui cadastro?</Text>
						<TextButton text="Login" onPress={() => navigation.navigate('Login')} />
					</View>
				</View>
				<View className="flex flex-row self-stretch justify-evenly ">
					<Botao onClick={handleBackStep} text="Voltar" isPrimary={false} />
					<Botao onClick={register} text="Cadastrar" isPrimary />
				</View>
			</View>
		);
	};

	let currentStepComponent;
	if (currentStep === 1) {
		currentStepComponent = renderStepOne();
	} else if (currentStep === 2) {
		currentStepComponent = renderStepTwo();
	}

	return (
		<View className="w-full h-screen px-10 py-20 mt-4 rounded-3xl border-3 ">
			<Text className="text-4xl mb-1 font-bold text-center text-color3">{title}</Text>
			<Text className="font-medium text-lg text-color2 mt-4 text-center ">{subtitle}</Text>
			{currentStepComponent}
		</View>
	);
};

export default RegisterForm;
