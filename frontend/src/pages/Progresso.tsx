import React from "react";


import Header from "../components/Header"
import Label from "../components/Label";


const Progresso = () =>{
    return(
        <>
            <div className="h-screen w-full">
                <div className="flex flex-col justify-center items m-10 p-2">
                    <h3 className="font-bold text-xl text-primary uppercase ">Cadastro de Alimentos</h3>
                    <div className="flex justify-between items-center mt-10">
                        <label className="font-semibold">Nome do alimento: </label>
                        <input className="h-10 text-sm  uppercase text-left border-2 border-gray-200 rounded-xl"></input>
                    </div>
                </div>
                <div className="flex flex-col gap-2 m-4  p-2">
                    <Label type="text" placeholder="" required/>
                    <Label type="text" placeholder="" required/>
                    <Label type="text" placeholder="" required/>
                    <Label type="text" placeholder="" required/>
                    <Label type="text" placeholder="" required/>
                </div>
                <div className="fixed bottom-0">
                    <Header/>
                </div>
            </div>
            
        </>
    )
}


export default Progresso;