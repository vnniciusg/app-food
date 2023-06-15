import React, { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import axios from 'axios';

import Label from '../Label';
import TextButton from '../textButton';
import Botao from '../Button';
import ButtonIcon from '../ButtonIcon';

import { IFoodModalProps } from '../../types/components/IFoodModalProps';

import config from '../../config';

const API_URL = config.API_URL;

const FoodModal: React.FC<IFoodModalProps> = ({ visible, onClose, id }) => {
	const [nome, setNome] = useState('');
	const [quantidade, setQuantidade] = useState('');
	const [qntdCalorica, setQntdCaloria] = useState('');

	const createNewFood = async () => {
		try {
			const teste = await axios.get(`${API_URL}/api/user/profile`);
			const userId = teste.data.user.id;
			const response = await axios.post(`${API_URL}api/food/${userId}/${id}`, {
				nome,
				quantidade,
				qntdCalorica,
			});

			return response;
		} catch (error) {
			console.error('Erro: ', error);
		}
	};

	const [step, setSteps] = useState(1);

	const handleNextStep = () => {
		setSteps(step + 1);
	};
	const handleBackStep = () => {
		setSteps(step + 1);
	};

	const handleClose = () => {
		onClose();
		setSteps(1);
	};

	const NotFoundFood = () => {
		return (
			<View className={`bg-color1 flex  rounded-3xl  shadow-2xl shadow-gray-900 `}>
				<View className="mx-3 mt-3">
					<ButtonIcon buttonIconName="close-circle" onPress={handleClose} />
				</View>
				<Text className="font-bold text-2xl text-color3  text-center">Procurar Alimento</Text>

				<View className="flex flex-col justify-center  w-full px-5 m-1">
					<View className="flex flex-col ">
						<Label
							name="Nomeclatura"
							placeholder="Digite o nome do alimento"
							iconName=""
							value={nome}
							onChangeText={setNome}
						/>
						<Label
							name="Quantidade"
							placeholder="Digite a quantidade do alimento"
							iconName=""
							value={quantidade}
							onChangeText={setQuantidade}
						/>
						<Label
							name="Quantidadade de Caloria"
							placeholder="Digite a quantidade de calorias"
							iconName=""
							value={qntdCalorica}
							onChangeText={setQntdCaloria}
						/>
					</View>
				</View>
				<View className="flex flex-col justify-between mb-4 items-center">
					<TextButton text="Descubra qual alimento é através da imagem" />
					<Botao isPrimary text="Cadastrar Alimento" onClick={createNewFood} />
				</View>
			</View>
		);
	};

	const SearchFood = () => {
		return (
			<View className={`bg-color1 flex  rounded-3xl  shadow-2xl shadow-gray-900 `}>
				<View className="mx-3 mt-3">
					<ButtonIcon buttonIconName="close-circle" onPress={handleClose} />
				</View>
				<Text className="font-bold text-2xl text-color3 mt-2 text-center">Procurar Alimento</Text>
				<View className="flex flex-col justify-center item-center w-full px-4 m-2">
					<View className="flex flex-col ">
						<Label name="Nome" placeholder="Digite o nome do alimento" iconName="food-apple-outline" search />
						<Label name="Quantidade" placeholder="Digite a quantidade consumida" iconName="weight-kilogram" />
					</View>
				</View>
				<View className="flex flex-col justify-between items-center mb-4 w-full px-4 ">
					<TextButton text=" Nao encontrou o alimento? clique aqui para cadastrar ele" onPress={handleNextStep} />
					<View className="my-2 ">
						<Botao isPrimary text="Registrar Refeição" />
					</View>
				</View>
			</View>
		);
	};

	let currentStepComponent;
	if (step === 1) {
		currentStepComponent = SearchFood();
	} else if (step === 2) {
		currentStepComponent = NotFoundFood();
	} else {
		setSteps(1);
	}

	return (
		<Modal visible={visible} transparent={true} animationType="slide" presentationStyle="overFullScreen">
			<View className={`absolute bottom-24 w-full p-5 `}>{currentStepComponent}</View>
		</Modal>
	);
};

export default FoodModal;
