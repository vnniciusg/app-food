import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StatusBar, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';

import MealCard from '../components/AddFood/MealCard';
import ButtonIcon from '../components/ButtonIcon';
import secret from '../../secret';

const API_URL = secret.API_URL;

interface Meal {
	id: string;
	nome: string;
	day: string;
	foods: string[];
}

const MealHistory = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [meals, setMeals] = useState<Meal[]>([]);

	const formatDate = (date: Date): string => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
	};

	useEffect(() => {
		fetchMealsByDay();
	}, []);

	const fetchMealsByDay = async () => {
		try {
			const response = await axios.post<{ meals: Meal[] }>(`${API_URL}/api/meal/`);
			const data = response.data;
			setMeals(data.meals);
		} catch (error) {
			console.error('Erro: ', error);
		}
	};

	const updateDate = (days: number) => {
		const newDate = new Date(currentDate);
		newDate.setDate(newDate.getDate() + days);
		setCurrentDate(newDate);
	};

	return (
		<SafeAreaView>
			<StatusBar />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View className="mt-1 h-screen flex flex-col justify-center bg-color5">
					<View className="flex justify-center flex-col text-center my-2 mx-4 p-1">
						<View className="flex justify-center flex-col items-center text-center ">
							<Text className="font-bold text-2xl uppercase  text-color3">Refeições</Text>
							<View className="bg-transparent flex flex-row gap-x-2  mt-1 text-center items-center">
								<ButtonIcon buttonIconName="arrow-back" onPress={() => updateDate(-1)} />
								<Text className="font-bold text-sm text-color3">{currentDate.toLocaleDateString('pt-Br')}</Text>
								<ButtonIcon buttonIconName="arrow-forward" onPress={() => updateDate(+1)} />
							</View>
						</View>
					</View>

					<View
						style={{ flex: 1, marginBottom: 80, backgroundColor: '#F6F1F1', borderWidth: 0 }}
						className="border-none justify-between"
					>
						<Text className="font-bold text-color4 text-start px-6 py-2 ">Calorias Totais : </Text>
						<FlatList
							data={meals
								.filter((refeicao) => refeicao.day === formatDate(currentDate))
								.map((refeicao) => ({
									key: refeicao.id,
									title: refeicao.nome,
									alimentos: refeicao.foods,
								}))}
							renderItem={({ item }) => (
								<MealCard key={item.key} title={item.title} alimentos={item.alimentos} id={item.key} />
							)}
							contentContainerStyle={{ flexGrow: 1 }}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

export default MealHistory;
