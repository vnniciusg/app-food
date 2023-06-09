import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface IButtonHeader {
	focused: boolean;
	iconFocused: string;
	iconNotFocused: string;
	name: string;
}

const ButtonHeader: React.FC<IButtonHeader> = ({ focused, iconFocused, iconNotFocused, name }) => {
	const navigation = useNavigation();

	return (
		<View className="flex justify-center items-center">
			<TouchableOpacity onPress={() => navigation.navigate(`${name}`)}>
				<Icon name={focused ? iconFocused : iconNotFocused} size={25} color={focused ? '#19A7CE' : '#AFD3E2'} />
				<Text className={focused ? 'text-white text-xs' : 'text-color2 text-ts'}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonHeader;
