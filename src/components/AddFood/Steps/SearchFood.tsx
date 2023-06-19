import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import ButtonIcon from '../../ButtonIcon';
import Label from '../../Label';
import TextButton from '../../textButton';
import Botao from '../../Button';

interface ISerchFoodProps {
	handleClose: () => void;
	handleNextStep: () => void;
}

const SearchFood: React.FC<ISerchFoodProps> = ({ handleClose, handleNextStep }) => {
	return (
		<View className={`absolute bottom-24 w-full p-5 `}>
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
		</View>
	);
};

export default SearchFood;
