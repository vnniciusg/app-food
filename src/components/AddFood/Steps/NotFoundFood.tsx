import { View, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

import config from '../../../config';

import ButtonIcon from '../../ButtonIcon';
import Label from '../../Label';
import TextButton from '../../textButton';
import Botao from '../../Button';
import React from 'react';

const API_URL = config.API_URL;

interface INotFoundFoodProps {
	handleClose: () => void;
	nome: string;
	quantidade: string;
	qntdCalorica: string;
	id: string;
	setNome: (nome: string) => void;
	setQuantidade: (quantidade: string) => void;
	setQntdCaloria: (qntdCalorica: string) => void;
	step: number;
	setStep: (step: number) => void;
}

const NotFoundFood: React.FC<INotFoundFoodProps> = ({ nome, quantidade, qntdCalorica, id, step, setStep, ...rest }) => {
	const createNewFood = async () => {
		try {
			const teste = await axios.get(`${API_URL}/api/user/profile`);
			const userId = teste.data.user.id;
			const response = await axios.post(`${API_URL}/api/food/${userId}/${id}`, {
				nome,
				quantidade,
				qntdCalorica,
			});

			return response;
		} catch (error) {
			console.error('Erro: ', error);
		}
	};

	const backStep = () => {
		setStep(step - 1);
	};

	return (
		<View className={`absolute bottom-24 w-full p-5 `}>
			<View className={`bg-color1 flex  rounded-3xl  shadow-2xl shadow-gray-900 `}>
				<View className="mx-3 mt-3">
					<ButtonIcon buttonIconName="close-circle" onPress={rest.handleClose} />
				</View>
				<Text className="font-bold text-2xl text-color3  text-center">Adicionar Alimento</Text>

				<View className="flex flex-col justify-center  w-full px-5 m-1">
					<View className="flex flex-col ">
						<Label
							name="Nomeclatura"
							placeholder="Digite o nome do alimento"
							iconName=""
							value={nome}
							onChangeText={rest.setNome}
						/>
						<Label
							name="Quantidade"
							placeholder="Digite a quantidade do alimento"
							iconName=""
							value={quantidade}
							onChangeText={rest.setQuantidade}
						/>
						<Label
							name="Quantidadade de Caloria"
							placeholder="Digite a quantidade de calorias"
							iconName=""
							value={qntdCalorica}
							onChangeText={rest.setQntdCaloria}
						/>
					</View>
				</View>
				<View className="flex flex-col justify-between mb-4 items-center">
					<TextButton text="Descubra qual alimento é através da imagem" onPress={backStep} />
					<Botao isPrimary text="Cadastrar Alimento" onClick={createNewFood} />
				</View>
			</View>
		</View>
	);
};

export default NotFoundFood;
