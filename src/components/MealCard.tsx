import React, { useState } from 'react';
import Botao from './Button';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FoodModal from './foodModal';

interface IMeal {
	title: string;
	alimentos: { nome: string; qntd: string; quantidadeCalorica: string }[];
}

const MealCard: React.FC<IMeal> = ({ title, alimentos }) => {
	const [showAll, setShowAll] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleShowAll = () => {
		setShowAll(!showAll);
	};

	const getVisibleAlimentos = () => {
		if (showAll) {
			return alimentos;
		} else {
			return alimentos.slice(0, 1);
		}
	};

	return (
		<SafeAreaView>
			<View className="bg-color1 border-color3 border shadow-md	 shadow-black rounded-2xl p-3 mb-4 mx-4">
				<View className="flex flex-row justify-between ml-2 mr-2 items-center text-center">
					<Text className="text-xl font-bold  text-color3">{title}</Text>
					<Text className="text-sm font-semibold text-color3">Calorias Totais : </Text>
				</View>
				<View className="flex flex-col ">
					{getVisibleAlimentos()?.map((alimento, index) => (
						<View key={index} className="flex flex-col m-2 justify-center border-b border-gray-400 py-3 ">
							<View className="flex flex-row justify-between mr-6 ">
								<Text className="text-base font-semibold text-color4">{alimento.nome}</Text>
								<TouchableOpacity>
									<Icon name="close-circle" color={'red'} size={20} />
								</TouchableOpacity>
							</View>
							<View className="flex flex-row gap-x-2 ">
								<Text className=" text-xs  text-color4 border-r pr-2 border-gray-400">
									Quantidade : {alimento.qntd}gramas
								</Text>
								<Text className=" text-xs text-color4">Caloria Unitaria : {alimento.quantidadeCalorica}Kcal</Text>
							</View>
						</View>
					))}
				</View>
				<View className="flex flex-row  justify-between text-center items-center">
					<TouchableOpacity onPress={() => setShowModal(true)}>
						<Text className="text-red-400 p-2 m-2">Adicionar Alimento...</Text>
					</TouchableOpacity>
					<View className="flex flex-row justify-center text-center">
						{alimentos.length > 1 && (
							<Botao text={showAll ? 'Mostrar Menos' : 'Mostrar Mais'} isPrimary onClick={handleShowAll} />
						)}
					</View>
				</View>
				<FoodModal visible={showModal} onClose={() => setShowModal(false)} />
			</View>
		</SafeAreaView>
	);
};

export default MealCard;
