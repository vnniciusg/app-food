import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Label: React.FC<TextInputProps & { name: string; iconName: string; search?: boolean; required?: boolean }> = ({
	name,
	iconName,
	search,
	required,
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(false);

	return (
		<View className="shadow-2xl  shadow-black mb-[10px]">
			<Text className="my-[5px] text-sm text-color4">{name}</Text>
			<View className="flex flex-row items-center just h-[55px] px-[15px] bg-color2 rounded-lg gap-x-1">
				<Icon name={iconName} color={'#0e6bc8'} className="text-xl mr-[10px]" size={13} />
				<TextInput
					className="flex-1"
					placeholder={props.placeholder}
					keyboardType={props.keyboardType}
					secureTextEntry={!hidePassword ? props.secureTextEntry : false}
					value={props.value}
					onChangeText={props.onChangeText}
				/>
				{props.secureTextEntry === true && (
					<Icon
						onPress={() => setHidePassword(!hidePassword)}
						name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
						color={'#0e6bc8'}
						size={19}
						className="text-xl mr-[10px]"
					/>
				)}
				{search === true && <Ionicons name="search" color={'#0e6bc8'} size={18} className="text-xl mr-[10px]" />}
			</View>
		</View>
	);
};

export default Label;
