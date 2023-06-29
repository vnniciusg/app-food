import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, StatusBar, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';

import MealCard from '../components/AddFood/MealCard';
import ButtonIcon from '../components/ButtonIcon';

import { formatDate, updateDate } from '../utils/dateUtils';

import { useAuth } from '../context/Auth';

interface Meal {
	id: string;
	nome: string;
	day: string;
	userId: string;
	foods: { id: string; nome: string; quantidade: string; qntdCalorica: string }[];
}

const MealHistory = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [meals, setMeals] = useState<Meal[]>([]);
	const [userId, setUserId] = useState('');

	const { onLogout } = useAuth();

	const logout = async () => {
		const result = await onLogout!();
		if (result && result.error) {
			alert(result.msg);
		}
	};

	useEffect(() => {
		fetchMealsByDay();
		getUserId();
	}, []);

	const fetchMealsByDay = async () => {
		try {
			const response = await axios.post<{ meals: Meal[] }>(`https://srv-app-food.onrender.com/api/meal/`);
			const data = response.data;
			const ultimoDia = data.meals[data.meals.length - 1].day;
			const dataString = formatDate(currentDate);

			if (ultimoDia <= dataString) {
				const id = userId;
				const create = await axios.post(`https://srv-app-food.onrender.com/api/meal/${id}`);
				const createData = create.data;
				setMeals([...data.meals, createData]);
			} else {
				setMeals(data.meals);
			}
		} catch (error) {
			console.error('Erro: ', error);
			logout();
		}
	};

	const getUserId = async (): Promise<string | null> => {
		try {
			const response = await axios.get(`https://srv-app-food.onrender.com/api/user/profile`);
			const userId: string = response.data.user.id;
			setUserId(userId);
			return userId;
		} catch (error) {
			console.error('Erro: ', error);
			return null;
		}
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
								<ButtonIcon
									buttonIconName="arrow-back"
									onPress={() => updateDate({ days: -1, currentDate, setCurrentDate })}
								/>
								<Text className="font-bold text-sm text-color3">{currentDate.toLocaleDateString('pt-Br')}</Text>
								<ButtonIcon
									buttonIconName="arrow-forward"
									onPress={() => updateDate({ days: +1, currentDate, setCurrentDate })}
								/>
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
								.filter((refeicao) => refeicao.day === formatDate(currentDate) && refeicao.userId === userId)
								.map((refeicao) => ({
									key: refeicao.id,
									title: refeicao.nome,
									alimentos: refeicao.foods,
									userId: refeicao.userId,
								}))}
							renderItem={({ item }) => (
								<MealCard key={item.key} title={item.title} foods={item.alimentos} id={item.key} />
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
