import React, { useState } from "react";

import { arrowBackOutline , arrowForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import MealCard from "../components/MealCard";
import Header from "../components/Header";

const MealHistory = () => {


  const [currentDate , setCurrentDate] = useState(new Date());

  const updateDate = (days:number) =>{
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  }

  const data = [
    {
      title: "Café da Manhã",
      alimentos: [
        { nome: "Pão", qntd: "2 fatias", quantidadeCalorica: "200 cal" },
        { nome: "Ovos", qntd: "2 unidades", quantidadeCalorica: "150 cal" },
        { nome: "Frutas", qntd: "1 porção", quantidadeCalorica: "80 cal" },
      ],
    },
    {
      title: "Almoço",
      alimentos: [
        { nome: "Arroz", qntd: "1 xícara", quantidadeCalorica: "200 cal" },
        { nome: "Feijão", qntd: "1 concha", quantidadeCalorica: "150 cal" },
        { nome: "Carne", qntd: "100g", quantidadeCalorica: "250 cal" },
        { nome: "Salada", qntd: "1 porção", quantidadeCalorica: "50 cal" },
      ],
    },
    {
      title: "Almoço",
      alimentos: [
        { nome: "Arroz", qntd: "1 xícara", quantidadeCalorica: "200 cal" },
        { nome: "Feijão", qntd: "1 concha", quantidadeCalorica: "150 cal" },
        { nome: "Carne", qntd: "100g", quantidadeCalorica: "250 cal" },
        { nome: "Salada", qntd: "1 porção", quantidadeCalorica: "50 cal" },
      ],
    },
    {
      title: "Almoço",
      alimentos: [
        { nome: "Arroz", qntd: "1 xícara", quantidadeCalorica: "200 cal" },
        { nome: "Feijão", qntd: "1 concha", quantidadeCalorica: "150 cal" },
        { nome: "Carne", qntd: "100g", quantidadeCalorica: "250 cal" },
        { nome: "Salada", qntd: "1 porção", quantidadeCalorica: "50 cal" },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-screen bg-white gap-2">
      <div className="flex justify-center flex-col text-center my-2 mx-4 p-2">
        <div className="flex justify-center flex-col self-center text-center ">
          <h2 className="font-bold text-2xl uppercase  text-primary">
            Refeições
          </h2>
          <div className="bg-transparent flex flex-row gap-x-2  mt-1 text-center items-center">
            <button className="text-sm uppercase text-secondary">
              <IonIcon icon={ arrowBackOutline } onClick={() => updateDate(-1)}/>
            </button>
            <h2 className="font-bold text-sm">{currentDate.toLocaleDateString('pt-Br')}</h2>
            <button className="text-sm uppercase text-secondary">
              <IonIcon icon={ arrowForwardOutline } onClick={() => updateDate(1)}/>
            </button>
          </div>
        </div>
      </div>
      <div className=" p-1.5 overflow-auto ">
        {data.map((refeicao, index) => (
          <MealCard
            key={index}
            title={refeicao.title}
            alimentos={refeicao.alimentos}
          />
        ))}
      </div>
      <div className="p-1.5 mt-8 text-left">
        <h3 className="font-bold text-secondary">Calorias: </h3>
      </div>

      <Header />
    </div>
  );
};

export default MealHistory;
