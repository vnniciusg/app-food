import React, { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import { SearchBar } from 'react-native-screens';

import Label from '../Label';
import TextButton from '../textButton';
import Botao from '../Button';
import ButtonIcon from '../ButtonIcon';

interface IFoodModalProps {
	visible: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	foodName?: string;
	foodCal?: number;
	foodProt?: number;
	foodCarbo?: number;
	foodGordu?: number;
}

const FoodModal: React.FC<IFoodModalProps> = ({ visible, onClose }) => {
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
						<Label name="Nomeclatura" placeholder="Digite o nome do alimento" iconName="" />
						<Label name="Quantidade" placeholder="Digite a quantidade do alimento" iconName="" />
						<Label name="Quantidadade de Caloria" placeholder="Digite a quantidade de calorias" iconName="" />
						<Label name="Quantidadade de Carboidrato" placeholder="Digite a quantidade de carboidrato" iconName="" />
						<View className="flex flex-row gap-x-4 mb-1">
							<View className="flex-1">
								<Label name="Proteina" iconName="" placeholder="Qntd. Proteina" />
							</View>
							<View className="flex-1">
								<Label name="Gordura" iconName="" placeholder="Qntd. Gordura" />
							</View>
						</View>
					</View>
				</View>
				<View className="flex flex-col justify-between mb-4 items-center">
					<TextButton text="Descubra qual alimento é através da imagem" />
					<Botao isPrimary text="Cadastrar Alimento" onClick={handleBackStep} />
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
