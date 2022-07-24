import React from 'react';
import "./login.css";
import FormCadastro from './componentes/formularios/cadastro/index';

//essa função deve ser substituida por um requisição a API de Login.
function arrumarDepois(){
    console.log("Função Tampa Buraco")
}

export default function cadastro(){
    return(
        <main className='mainForm'>
            <img src="./logo512.png" alt="Logo"/>
            <FormCadastro onClick={arrumarDepois}/>
        </main>
    )
}