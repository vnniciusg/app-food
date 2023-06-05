import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface IBotao {
  isPrimary: boolean;
  text: string;
  onClick?: () => void;
}

const Botao: React.FC<IBotao> = ({ isPrimary, text, onClick }) => {
  const buttonClasses = `active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl px-4 ${
    isPrimary
      ? "bg-color3 shadow-2xl shadow-black "
      : "bg-transparent shadow-2xl shadow-gray-400 border-solid border-2 border-color4"
  }`;

  const textClasses = `text-lg font-bold w-full text-center ${
    isPrimary ? "text-color1" : "text-color4"
  }`;

  return (
    /// <reference types="nativewind/types" />

    <TouchableOpacity onPress={onClick} className={buttonClasses}>
      <Text className={textClasses}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Botao;
