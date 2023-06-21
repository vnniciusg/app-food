import React, { useState } from 'react';
import { Modal } from 'react-native';

import CameraStep from './Steps/cameraStep';
import NotFoundFood from './Steps/NotFoundFood';

import { IFoodModalProps } from '../../types/components/IFoodModalProps';

const FoodModal: React.FC<IFoodModalProps> = ({ visible, onClose, id, addFood }) => {
	const [step, setSteps] = useState(1);

	const [nome, setNome] = useState('');
	const [quantidade, setQuantidade] = useState('');
	const [qntdCalorica, setQntdCaloria] = useState('');

	//fechar modal
	const handleClose = () => {
		onClose();
		setSteps(1);
	};

	let currentStepComponent: any;

	if (step === 1) {
		currentStepComponent = <CameraStep handleClose={handleClose} step={step} setSteps={setSteps} />;
	} else if (step === 2) {
		currentStepComponent = (
			<NotFoundFood
				handleClose={handleClose}
				id={id}
				nome={nome}
				quantidade={quantidade}
				qntdCalorica={qntdCalorica}
				setNome={setNome}
				setQuantidade={setQuantidade}
				setQntdCaloria={setQntdCaloria}
				step={step}
				setStep={setSteps}
				addFood={addFood}
			/>
		);
	} else {
		setSteps(1);
	}

	return (
		<Modal visible={visible} transparent={true} animationType="slide" presentationStyle="overFullScreen">
			{currentStepComponent}
		</Modal>
	);
};

export default FoodModal;
