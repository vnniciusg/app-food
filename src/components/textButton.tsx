import React from "react";
import { TouchableOpacity , Text, View } from "react-native";


interface ITextButtonProps{
    text:string
    onClick?: () => void;
}


const TextButton:React.FC<ITextButtonProps> = ({ text , onClick }) =>{
    return(
        <TouchableOpacity  onPress={onClick}>
            <Text className="ml-2  shadow-2xl shadow-color4 font-medium text-base text-color4">{text}</Text>
        </TouchableOpacity>
    )
}


export default TextButton;