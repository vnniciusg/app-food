import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ITextButtonProps extends TouchableOpacityProps {
  text: string;
}

const TextButton = ({ text, ...rest }: ITextButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Text className="ml-2 shadow-2xl shadow-color3  font-medium text-xs text-color4">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
