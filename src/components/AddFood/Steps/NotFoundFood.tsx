import { View, Text } from 'react-native';

import ButtonIcon from '../../ButtonIcon';
import Label from '../../Label';
import TextButton from '../../textButton';
import Botao from '../../Button';
import React from 'react';

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
	addFood: (nome: string, quantidade: string, qntdCalorica: string) => Promise<any>;
}

const NotFoundFood: React.FC<INotFoundFoodProps> = ({
	nome,
	quantidade,
	qntdCalorica,
	id,
	step,
	setStep,
	addFood,
	...rest
}) => {
	const backStep = () => {
		setStep(step - 1);
	};

	const handleSubmit = async (nome: string, quantidade: string, qntdCalorica: string) => {
		try {
			await addFood(nome, quantidade, qntdCalorica);
			rest.setNome('');
			rest.setQntdCaloria('');
			rest.setQuantidade('');
			rest.handleClose();
		} catch (err) {
			console.error('ERRO AO ENVIAR FORMULARIO DE ALIMENTOS ', err);
		}
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
					<Botao isPrimary text="Cadastrar Alimento" onClick={() => handleSubmit(nome, quantidade, qntdCalorica)} />
				</View>
			</View>
		</View>
	);
};

export default NotFoundFood;
