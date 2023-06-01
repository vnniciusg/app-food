import React, { useState } from 'react';
import TextButton from '../TextButton';
import Label from '../Label';
import Button from '../Button';
import { IForm } from '../../shared/types/IForm';
import DropDown from '../Dropdown';
import { useHistory } from 'react-router-dom'

const RegisterForm = ({title , subtitle} : IForm) =>{

    const [ nome , setNome ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ altura , setAltura ] = useState('')
    const [ peso , setPeso ] = useState('')
    const [ objetivo , setObjetivo ] = useState('')

    const history = useHistory();
    const handleClick = () =>{
        history.push('/')
    }


    return(
        <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-3 border-gray-100 ">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <p className="font-medium text-lg text-gra-500 mt-4 text-center">{subtitle}</p>
        <div className="mt-8 flex flex-col gap-2">

            <Label
                type='text'
                placeholder="Nome"
                required
            />
            <Label
                type='text'
                placeholder="E-mail"
                required
            />

            <Label
                type='password'
                placeholder="Senha"
                required
            />
            <Label
                type='password'
                placeholder="Confirme sua Senha"
                required
            />

            <div className='flex text-center gap-1 mt-2'>
                <Label
                    type='text'
                    placeholder="Altura"
                    required
                />
                <Label
                    type='text'
                    placeholder="Peso"
                    required
                />
            </div>
                <DropDown
                    required
                    // label='Qual seu objetivo'
                    itens={['Maçã', 'Banana', 'Laranja', 'Morango']}
                    value={objetivo}
                    onChange={value => setObjetivo(value)}
                />
            
    
              
            

        </div>

        <div className='mt-8 flex flex-col gap-y-4'>

            <Button 
                isPrimary
                text="Cadastrar"
            />

        </div>
        <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base"> Já tem uma conta?</p>
            <TextButton  
                text="Fazer Login"
                onClick={handleClick}
            />
        </div>


    </div>

        
    )

} 


export default RegisterForm;