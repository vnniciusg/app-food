import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StatusBar, SafeAreaView, FlatList } from 'react-native';

import MealCard from '../components/AddFood/MealCard';
import ButtonIcon from '../components/ButtonIcon';

const MealHistory = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	const updateDate = (days: number) => {
		const newDate = new Date(currentDate);
		newDate.setDate(newDate.getDate() + days);
		setCurrentDate(newDate);
	};
	const data = [
		{
			title: 'Café da Manhã',
			alimentos: [
				{ nome: 'Pão', qntd: '2', quantidadeCalorica: '200' },
				{ nome: 'Ovos', qntd: '2', quantidadeCalorica: '150' },
				{ nome: 'Frutas', qntd: '1 ', quantidadeCalorica: '80' },
			],
		},
		{
			title: 'sadasd',
			alimentos: [
				{ nome: 'Arroz', qntd: '1', quantidadeCalorica: '200' },
				{ nome: 'Feijão', qntd: '1', quantidadeCalorica: '150' },
				{ nome: 'Carne', qntd: '100g', quantidadeCalorica: '250' },
				{ nome: 'Salada', qntd: '1', quantidadeCalorica: '50' },
			],
		},
		{
			title: 'Almoço',
			alimentos: [
				{ nome: 'Arroz', qntd: '1', quantidadeCalorica: '200' },
				{ nome: 'Feijão', qntd: '1', quantidadeCalorica: '150' },
				{ nome: 'Carne', qntd: '123', quantidadeCalorica: '250' },
				{ nome: 'Salada', qntd: '1', quantidadeCalorica: '50' },
			],
		},
		{
			title: 'Almoço',
			alimentos: [
				{ nome: 'Arroz', qntd: '1', quantidadeCalorica: '200' },
				{ nome: 'Feijão', qntd: '1', quantidadeCalorica: '150' },
				{ nome: 'Carne', qntd: '100g', quantidadeCalorica: '250' },
				{ nome: 'Salada', qntd: '1', quantidadeCalorica: '50' },
			],
		},
	];

	return (
		<SafeAreaView>
			<StatusBar />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View className="mt-3 h-screen flex flex-col justify-center bg-color5">
					<View className="flex justify-center flex-col text-center my-2 mx-4 p-1">
						<View className="flex justify-center flex-col items-center text-center ">
							<Text className="font-bold text-2xl uppercase  text-color3">Refeições</Text>
							<View className="bg-transparent flex flex-row gap-x-2  mt-1 text-center items-center">
								<ButtonIcon buttonIconName="arrow-back" onPress={() => updateDate(-1)} />
								<Text className="font-bold text-sm text-color3">{currentDate.toLocaleDateString('pt-Br')}</Text>
								<ButtonIcon buttonIconName="arrow-forward" onPress={() => updateDate(+1)} />
							</View>
						</View>
						<View className="p-1.5 mt-1 text-start">
							<Text className="font-bold text-color4">Calorias Totais : </Text>
						</View>
					</View>

					<FlatList
						data={data.map((refeicao, index) => ({
							key: index.toString(),
							title: refeicao.title,
							alimentos: refeicao.alimentos,
						}))}
						renderItem={({ item }) => <MealCard key={item.key} title={item.title} alimentos={item.alimentos} />}
					/>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

export default MealHistory;
