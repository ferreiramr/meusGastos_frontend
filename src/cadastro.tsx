import React from 'react';
import "./login.css";
import FormCadastro from './componentes/formularios/cadastro/index';

export default function cadastro(){
    return(
        <main className='mainForm'>
            <img src="./logo512.png" alt="Logo"/>
            <FormCadastro />
        </main>
    )
}