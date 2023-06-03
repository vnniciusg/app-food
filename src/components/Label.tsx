import React, { useState } from "react";
import { TextInput, View , KeyboardTypeOptions, Text } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

interface ILabelProps{
    name? : string,
    type: KeyboardTypeOptions,
    placeholder: string,
    iconName : string,
    required?: boolean 
    secureTextEntry? :boolean
}


const Label:React.FC <ILabelProps> = ({ name , type , iconName, placeholder , required , secureTextEntry}) =>{

    const [ hidePassword , setHidePassword ] = useState(false);

    return(
        <View className="shadow-2xl shadow-black mb-[10px]">
            <Text className="my-[5px] text-sm text-color4">{name}</Text>
            <View className="flex flex-row items-center just h-[55px] px-[15px] bg-color2 rounded-lg gap-x-1">
                <Icon name={iconName} color={'#0e6bc8'} className="text-xl mr-[10px]"/>
                <TextInput  
                    className="flex-1"
                    placeholder={placeholder}
                    keyboardType={type}   
                    secureTextEntry = {secureTextEntry}
                />
                {name === 'Password' &&(
                    <Icon 
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? "eye-outline":"eye-off-outline"}
                        color={'#0e6bc8'}
                        className="text-xl mr-[10px]"
                    />
                )

                }
            </View>
        </View>
    )
}


export default Label;