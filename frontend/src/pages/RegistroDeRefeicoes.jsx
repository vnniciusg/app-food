import React, { useState } from 'react';
import MealCard from '../components/CardRefeicao';

const RegistroDeRefeicoes = () => {

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

   return(
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-between text-center my-2 mx-4 p-2">
            <button className="font-semibold text-sm uppercase  text-violet-500">Ontem</button>
            <div className='flex flex-col gap-1'>
                <h2 className="font-bold text-2xl uppercase  text-violet-900">Refeições</h2>
                <h2 className='font-semibold text-sm'>31/05/2023</h2>
            </div>
            <button className="font-semibold text-sm uppercase  text-violet-500">Amanhã</button>
        </div>
        <div className=" p-1.5 overflow-auto ">
            {data.map((refeicao, index) => (
            <MealCard key={index} title={refeicao.title} alimentos={refeicao.alimentos} />
            ))}
        </div>
        <div className='mx-6 my-2 p-2 text-left'>
            <h3 className='font-bold bg-white text-violet-500'>Calorias: </h3>
        </div>
    </div>
   )
  };

export default RegistroDeRefeicoes;
