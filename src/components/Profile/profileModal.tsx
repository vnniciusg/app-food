import React from 'react';
import { View, Modal, Text, TextInput } from 'react-native';
import Botao from '../Button';
import ButtonIcon from '../ButtonIcon';

interface IProfileModal {
	visible: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	title: string;
	labelValue: string;
}

const ProfileModal: React.FC<IProfileModal> = ({ visible, onClose, title, labelValue }) => {
	return (
		<Modal visible={visible} transparent={true} animationType="slide" presentationStyle="overFullScreen">
			<View className={`absolute bottom-24 w-full p-5 `}>
				<View className="bg-color1 shadow- flex flex-col rounded-3xl  shadow-2xl shadow-gray-900">
					<View className="m-1 p-2">
						<ButtonIcon buttonIconName="close-circle" onPress={onClose} />
						<Text className="text-color3 text-center mb-2 font-bold text-xl">Editar</Text>
						<Text className="text-color4 text-center mb-4 font-medium text-sm">
							Insira sua nova meta e suas novas medidas
						</Text>
						<View className="flex flex-row justify-evenly mb-4 ">
							<View className="flex gap-y-2 m-1 p-1 justify-center items-center  ">
								<Text className="text-black text-base font-semibold">Meta Calorica</Text>
								<Text>Meta Atual</Text>
								<TextInput placeholder="Nova meta"></TextInput>
							</View>
							<View className="flex gap-y-2 m-1 p-1 justify-center items-center  ">
								<Text className="text-black text-base font-semibold">Peso</Text>
								<Text>Peso Atual</Text>
								<TextInput placeholder="Nova meta"></TextInput>
							</View>
							<View className="flex gap-y-2 m-1 p-1 justify-center items-center ">
								<Text className="text-black text-base font-semibold">Altura</Text>
								<Text>Altura Atual</Text>
								<TextInput placeholder="Nova meta"></TextInput>
							</View>
						</View>
						<Botao isPrimary text="Alterar" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ProfileModal;
