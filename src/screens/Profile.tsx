import React from 'react';
import { View , Text } from 'react-native';


const UserProfileScreen = () =>{
    return(

    <View className='flex h-screen flex-col items-center justify-center'>
        <Text className='text-2xl font-bold mb-4'>Perfil do Usuário</Text>
        <Text className='text-md mb-2'>Nome: John Doe</Text>
        <Text className='text-md mb-2'>Email: johndoe@example.com</Text>
        <Text className='text-md mb-2'>Idade: 30 anos</Text>
    </View>
  );
};


export default UserProfileScreen;