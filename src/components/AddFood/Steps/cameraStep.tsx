import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';

import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import axios, { AxiosResponse } from 'axios';

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
	const [type, setType] = useState(Camera.Constants.Type.front);
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
	const [photoUri, setPhotoUri] = useState<string>('');

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

	const uploadToCloudinary = async (imageUri: string) => {
		const formData = new FormData();
		formData.append(
			'file',
			JSON.stringify({
				uri: imageUri,
				type: 'image/jpeg',
				name: 'myImage.jpg',
			}),
		);
		formData.append('upload_preset', 'yqy46hiz');

		try {
			const response: AxiosResponse = await axios.post(
				'https://api.cloudinary.com/v1_1/dw2mjwfrm/image/upload',
				formData,
			);

			console.log('Image uploaded successfully:', response.data.url);
		} catch (error) {
			console.error('Error uploading image:', error);
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
						<Button title="Upload Image" onPress={() => uploadToCloudinary(image)} />
					) : (
						<Button title="Take Picture" onPress={takePicture} />
					)}
					<TouchableOpacity className=" flex flex-row justify-center items-center" onPress={takePicture}>
						<Icon name="camera" size={20} />
						<Text className="font-bold text-base text-color2 ml-[10px] my-3 ">Enviar Foto</Text>
					</TouchableOpacity>
					<TouchableOpacity className=" flex flex-row justify-center items-center" onPress={nextStep}>
						<Text className="font-bold text-xs text-color3 ml-[10px] mb-3 ">Deseja adicionar manualmente?</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default CameraStep;
