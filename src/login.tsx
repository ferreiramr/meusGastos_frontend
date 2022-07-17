import { useEffect, useState } from 'react';
import "./login.css";
import FormLogin from './componentes/formularios/login/index';
import axios from 'axios';

export default function Login(){

    const [respostaApi, setRespostaApi ] = useState([]);

    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice")
        .then((response) => {
            setRespostaApi(response.data.slip.advice);
        })
        .catch( () => {
            console.log("Não deu certo!");
        })
    }, []);
    
        return(
            <main className='mainForm'>
                <img src="./logo512.png" alt="Logo"/>
                <h1>{respostaApi}</h1>
                <FormLogin/>
            </main>
        )
}