import React, { useState } from "react";
import Button from "../Button";
import { IonIcon } from "@ionic/react";
import { closeCircle } from 'ionicons/icons'

interface IMeal {
  title: string;
  alimentos: { nome: string; qntd: string; quantidadeCalorica: string }[];
}

const MealCard: React.FC<IMeal> = ({ title, alimentos }) => {
  const [showAll, setShowAll] = useState(false);
  const [ filtrarAlimentos , setfiltrarAlimentos ] = useState(alimentos)

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
    <div className="bg-transparent shadow-md rounded-lg p-4 mb-4 ">
      <h3 className="text-xl font-bold mb-4 bg-transparent text-black text-center">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {getVisibleAlimentos()?.map((alimento, index) => (
          <div key={index} className="flex flex-col gap-1">
            {index === 0 && (
              <div className="flex text-center justify-between gap-1">
                <h4 className="w-1/3 text-lg font-bold bg-transparent text-primary">Nome</h4>
                <h4 className="w-1/3 text-lg font-bold bg-transparent text-primary">Quantidade</h4>
                <h4 className="w-1/3 text-lg font-bold bg-transparent text-primary">Calorias</h4>
              </div>
              
            )}
            <div className="flex text-center justify-center items-center">
              <h4 className="w-1/3 text-lg">{alimento.nome}</h4>
              <h4 className="w-1/3 text-lg">{alimento.qntd}</h4>
              <h4 className="w-1/3 text-lg">{alimento.quantidadeCalorica}</h4>
              <IonIcon icon={closeCircle} className="self-center text-red-600 w-[20px] h-[20px]"/>
            </div>
            <hr className="my-2 border-gray-300" />
          </div>
        ))}
      </div>
        <div className="flex justify-between items-center gap-x-2 text-center">
            {alimentos.length > 1 && (
                <Button text={showAll ? "Mostrar Menos" : "Mostrar Mais"} isPrimary onClick={handleShowAll}/>
            )}
            
                <Button text="Adicionar" isPrimary ={false}/>
        </div>
    </div>
  );
};

export default MealCard;