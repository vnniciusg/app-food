import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ITextButtonProps extends TouchableOpacityProps {
  text: string;
}

const TextButton = ({ text, ...rest }: ITextButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity {...rest}>
      <Text className="ml-2  shadow-2xl shadow-color4 font-medium text-xs text-color4">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
