import React, { useState } from "react";
import { TextInput, View , TextInputProps, Text } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";




const Label: React.FC<TextInputProps & { name: string, iconName: string }>=({ name, iconName, ...props }) =>{

    const [ hidePassword , setHidePassword ] = useState(false);

    return(
        <View className="shadow-2xl shadow-black mb-[10px]">
            <Text className="my-[5px] text-sm text-color4">{name}</Text>
            <View className="flex flex-row items-center just h-[55px] px-[15px] bg-color2 rounded-lg gap-x-1">
                <Icon name={iconName} color={'#0e6bc8'} className="text-xl mr-[10px]"/>
                <TextInput  
                    className="flex-1"
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}   
                    secureTextEntry = {props.secureTextEntry}
                    value={props.value}
                    onChangeText={props.onChangeText}
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