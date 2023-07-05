import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Button, KeyboardAvoidingView } from 'react-native';
import * as fs from 'react-native-fs';

import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';

import ButtonIcon from '../../ButtonIcon';
import NotFoundFood from './NotFoundFood';
import Botao from '../../Button';
import TextButton from '../../textButton';
import Label from '../../Label';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ICameraStepProps {
	handleClose: () => void;
	step: number;
	setSteps: (step: number) => void;
	nome: string;
	quantidade: string;
	qntdCalorica: string;
	setNome: (nome: string) => void;
	setQuantidade: (quantidade: string) => void;
	setQntdCaloria: (qntdCalorica: string) => void;
	addFood: (nome: string, quantidade: string, qntdCalorica: string) => Promise<any>;
}

const CameraStep: React.FC<ICameraStepProps> = ({
	handleClose,
	addFood,
	step,
	setSteps,
	nome,
	quantidade,
	qntdCalorica,
	setNome,
	setQuantidade,
	setQntdCaloria,
}) => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [image, setImage] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [photo, setPhoto] = useState<string>('');

	const [lowerModalVisible, setLowerModalVisible] = useState(false);

	const cameraRef = useRef(null);

	useEffect(() => {
		(async () => {
			MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setHasCameraPermission(cameraStatus.status === 'granted');
		})();
	}, []);

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const data = await cameraRef.current.takePictureAsync();

				setImage(data.uri);
			} catch (error: any) {
				console.error('ERROR', error.message);
			}
		}
	};

	const uploadImage = async (imageUri: string) => {
		console.log(imageUri);
		const data = new FormData();

		data.append('file', { uri: imageUri, name: 'image.jpg', type: 'image/jpg' } as unknown as Blob);
		try {
			const response = await axios.post(`https://food-recognition-api.onrender.com/predict`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (response.data.error) {
				console.error('Nao foi possivel enviar');
			} else {
				setNome(response.data.Nome);
				setQntdCaloria(response.data.Calorias);
				setLowerModalVisible(true);
			}
		} catch (err) {
			console.error('ERROR : ', err);
		}
	};

	const handleSubmit = async (nome: string, quantidade: string, qntdCalorica: string) => {
		try {
			await addFood(nome, quantidade, qntdCalorica);
			setNome('');
			setQntdCaloria('');
			setQuantidade('');
			setLowerModalVisible(false);
			handleClose();
		} catch (err) {
			console.error('ERRO AO ENVIAR FORMULARIO DE ALIMENTOS ', err);
		}
	};

	if (hasCameraPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const nextStep = () => {
		setSteps(step + 1);
	};

	return (
		<View className={`absolute bottom-20 w-full h-[550px] p-5`}>
			{lowerModalVisible ? (
				<KeyboardAvoidingView>
					<View className={`bg-color1 flex  rounded-3xl  shadow-2xl shadow-gray-900 `}>
						<View className="mx-3 mt-3">
							<ButtonIcon buttonIconName="close-circle" onPress={() => setLowerModalVisible(false)} />
						</View>
						<Text className="font-bold text-2xl text-color3  text-center">Adicionar Alimento</Text>

						<View className="flex flex-col justify-center  w-full px-5 m-1">
							<View className="flex flex-row gap-2 justify-between mx-2 p-2">
								<Text className="font-bold">Nome : {nome}</Text>
								<Text className="font-bold">Qntd de calorias: {qntdCalorica}</Text>
							</View>
							<Label name="Quantidadade " iconName="" value={quantidade} onChangeText={setQuantidade} />
						</View>
						<View className="flex flex-col justify-between mb-4 items-center">
							<Botao
								isPrimary
								text="Cadastrar Alimento"
								onClick={() => handleSubmit(nome, quantidade.toString(), qntdCalorica.toString())}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			) : (
				<>
					<Camera style={{ borderRadius: 10, flex: 1 }} type={type} flashMode={flash} ref={cameraRef}>
						<View className="mx-3 mt-3">
							<ButtonIcon buttonIconName="close-circle" onPress={handleClose} />
						</View>
					</Camera>
					<View>
						<View className="bg-color4 rounded-b-3xl text-center justify-center items-center">
							{image ? (
								<TouchableOpacity
									className=" flex flex-row justify-center items-center"
									onPress={() => uploadImage(image)}
								>
									<Icon name="camera" size={20} />
									<Text className="font-bold text-base text-color2 ml-[10px] my-4 ">Enviar Foto</Text>
								</TouchableOpacity>
							) : (
								<>
									<TouchableOpacity className=" flex flex-row justify-center items-center" onPress={takePicture}>
										<Icon name="camera" size={20} />
										<Text className="font-bold text-base text-color2 ml-[10px] my-2 ">Tirar Foto</Text>
									</TouchableOpacity>
									<TouchableOpacity className=" flex flex-row justify-center items-center" onPress={nextStep}>
										<Text className="font-bold text-xs text-color3 ml-[10px] mb-2 ">Deseja adicionar manualmente?</Text>
									</TouchableOpacity>
								</>
							)}
						</View>
					</View>
				</>
			)}
		</View>
	);
};

export default CameraStep;
