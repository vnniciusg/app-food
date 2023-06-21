import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Button, Alert } from 'react-native';
import * as fs from 'react-native-fs';

import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import axios, { AxiosResponse } from 'axios';
import config from '../../../config';

import ButtonIcon from '../../ButtonIcon';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ICameraStepProps {
	handleClose: () => void;
	step: number;
	setSteps: (step: number) => void;
}

const CameraStep: React.FC<ICameraStepProps> = ({ handleClose, step, setSteps }) => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [image, setImage] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [photo, setPhoto] = useState<string>('');

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
			const response = await axios.post(`${config.API_URL}/api/food/upload/`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (response.data.error) {
				console.error('Nao foi possivel enviar');
			} else {
				console.log('Image uploaded successfully');
			}
		} catch (err) {
			console.error('ERROR : ', err);
		}
	};

	if (hasCameraPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const nextStep = () => {
		setSteps(step + 1);
	};

	return (
		<View className={`absolute bottom-24 w-full h-[550px] p-5`}>
			<Camera style={{ borderRadius: 10, flex: 1 }} type={type} flashMode={flash} ref={cameraRef}>
				<View className="mx-3 mt-3">
					<ButtonIcon buttonIconName="close-circle" onPress={handleClose} />
				</View>
			</Camera>
			<View>
				<View className="bg-color4 rounded-b-3xl text-center justify-center items-center">
					{image ? (
						<TouchableOpacity className=" flex flex-row justify-center items-center" onPress={() => uploadImage(image)}>
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
		</View>
	);
};

export default CameraStep;
