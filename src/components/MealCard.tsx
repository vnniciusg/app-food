import React, { useState } from "react";
import Botao from "./Button";
import { View ,Text , TouchableOpacity , SafeAreaView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

interface IMeal {
  title: string;
  alimentos: { nome: string; qntd: string; quantidadeCalorica: string }[];
}

const MealCard: React.FC<IMeal> = ({ title, alimentos }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const getVisibleAlimentos = () => {
    if (showAll) {
      return alimentos;
    } else {
      return alimentos.slice(0, 1);
    }
  };


  return (
    <SafeAreaView>
    <View className="bg-color2 shadow-2xl	 shadow-black rounded-lg p-3 m-4 ">
        <View className="flex flex-row justify-between ml-2 mr-14 items-center text-center">
            <Text className="text-xl font-bold  text-color3">{title}</Text>
            <Text className="text-sm font-semibold text-color3">Calorias Totais : </Text>
        </View>
        <View className="flex flex-col ">
        {getVisibleAlimentos()?.map((alimento, index) => (
          <View key={index} className="flex flex-col m-2 justify-center">   
              <View className="flex flex-row gap-x-2" >
                <Text className=" text-xs text-color3">Quantidade : {alimento.qntd}gramas  |</Text>
                <Text className=" text-xs text-color3">Caloria Unitaria : {alimento.quantidadeCalorica}Kcal</Text>
              </View>
              <View className="flex flex-row justify-between mr-6">
                <Text className="text-md text-color4">{alimento.nome}</Text>
                <TouchableOpacity>
                  <Icon name="close-circle" color={"red"} size={20}/>
                </TouchableOpacity>
    
             
            </View>
          </View>
        ))}
        </View>
        <View className="flex flex-row  justify-between text-center items-center">
          <TouchableOpacity>
              <Text className="text-color4 p-2 m-2">Adicionar Alimento...</Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center text-center">
              {alimentos.length > 1 && (
                  <Botao text={showAll ? "Mostrar Menos" : "Mostrar Mais"} isPrimary onClick={handleShowAll}/>
              )}
          </View>
        </View>
    </View>
    </SafeAreaView>
  );
};

export default MealCard;