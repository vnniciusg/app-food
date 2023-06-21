import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import Botao from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';
import FoodModal from './foodModal';

import axios from 'axios';
import config from '../../config';

import { IMealProps } from '../../types/components/IMealProps';
import { useAuth } from '../../context/Auth';

const MealCard: React.FC<IMealProps> = ({ title, foods, id }) => {
	const [showAll, setShowAll] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [foodList, setFoodList] = useState(foods);

	const { onLogout } = useAuth();
	const logout = async () => {
		const result = await onLogout!();
		if (result && result.error) {
			alert(result.msg);
		}
	};

	const handleShowAll = () => {
		setShowAll(!showAll);
	};

	const getVisibleAlimentos = () => {
		if (showAll) {
			return foodList;
		} else {
			return foodList.slice(0, 1);
		}
	};

	const deleteFood = async (id: string) => {
		try {
			const response = await axios.delete(`${config.API_URL}/api/food/${id}`);
			setFoodList(foodList.filter((food) => food.id !== id));
			return response;
		} catch (err) {
			console.error(err);
		}
	};

	const addFood = async (nome: string, quantidade: string, qntdCalorica: string) => {
		try {
			const teste = await axios.get(`${config.API_URL}/api/user/profile`);
			const userId = teste.data.user.id;
			const response = await axios.post(`${config.API_URL}/api/food/${userId}/${id}`, {
				nome,
				quantidade,
				qntdCalorica,
			});
			setFoodList([...foodList, response.data.food]); // Atualizar a lista de alimentos adicionando o novo alimento
			return response;
		} catch (err) {
			logout();
		}
	};

	return (
		<SafeAreaView>
			<View className="bg-color1 border-color3 border shadow-md shadow-black rounded-2xl p-2 mb-4 mx-2">
				<View className="flex flex-row justify-between ml-2 mr-2 items-center text-center">
					<Text className="text-xl font-bold  text-color3">{title}</Text>
					<Text className="text-sm font-semibold text-color3">Calorias Totais : </Text>
				</View>
				<View className="flex flex-col ">
					{getVisibleAlimentos()?.map((foodList, index) => (
						<View key={index} className="flex flex-col m-2 justify-center border-b border-gray-400 py-3 ">
							<View className="flex flex-row justify-between mr-6 ">
								<Text className="text-base font-semibold text-color4">{foodList.nome}</Text>
								<TouchableOpacity onPress={() => deleteFood(foodList.id)}>
									<Icon name="close-circle" color={'red'} size={20} />
								</TouchableOpacity>
							</View>
							<View className="flex flex-row gap-x-2 ">
								<Text className=" text-xs  text-color4 border-r pr-2 border-gray-400">
									Quantidade : {foodList.quantidade}gramas
								</Text>
								<Text className=" text-xs text-color4">Caloria Unitaria : {foodList.qntdCalorica} Kcal</Text>
							</View>
						</View>
					))}
				</View>
				<View className="flex flex-row  justify-between text-center items-center">
					<TouchableOpacity onPress={() => setShowModal(true)}>
						<Text className="text-red-400 p-2 m-2">Adicionar Alimento...</Text>
					</TouchableOpacity>
					<View className="flex flex-row justify-center text-center">
						{foodList.length >= 1 && (
							<Botao text={showAll ? 'Mostrar Menos' : 'Mostrar Mais'} isPrimary onClick={handleShowAll} />
						)}
					</View>
				</View>
				<FoodModal visible={showModal} onClose={() => setShowModal(false)} id={id} addFood={addFood} />
			</View>
		</SafeAreaView>
	);
};

export default MealCard;
