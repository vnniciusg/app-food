import React from 'react'
import { SafeAreaView, View , Text} from 'react-native';
import Label from '../components/Label';
import Botao from '../components/Button';
import TextButton from '../components/textButton';

const AddFood = () =>{
    return(
        <SafeAreaView>
            <View className='h-screen w-full bg-color5 flex justify-center items-center p-4'>
                <View className='flex flex-col justify-center p-4 gap-x-1'>
                    <View className='p-4 my-8'>
                        <Text className='font-bold text-3xl text-color3'>Cadastro de Alimentos</Text>
                    </View>
                    <View className='flex flex-col '>
                        <Label 
                            name='Nomeclatura'
                            type='default'
                            placeholder='Digite o nome do alimento'
                            iconName=''
                        />
                        <Label 
                                name='Quantidadade de Caloria'
                                type='default'
                                placeholder='Digite a quantidade de calorias'
                                iconName=''
                        />
                        <Label 
                                name='Quantidadade de Carboidrato'
                                type='default'
                                placeholder='Digite a quantidade de carboidrato'
                                iconName=''
                        />
                        <View className="flex flex-row gap-x-4 mb-1">
                            <View className="flex-1">
                                <Label name="Proteina" iconName='' type="default" placeholder="Qntd. Proteina"/>
                            </View>
                            <View className="flex-1">
                                <Label name="Gordura" iconName='' type="default" placeholder="Qntd. Gordura" />
                            </View>
                        </View>
                    </View>
                </View>
                <View className='flex flex-col justify-center items-center pb-4 mt-1'>
                    <TextButton text='Descubra qual alimento é através da imagem'/>
                </View>
                <Botao isPrimary text='Cadastrar Alimento'/>
                

            </View>
        </SafeAreaView>
    )

}


export default AddFood;