import "./style.css";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// function AdicionarGastos(){
//     const navigate = useNavigate()
//     const ganhoSoma = 500;

//     useEffect(() => {
//         axios.post(`http://localhost:8000/add_ganhos/0?ganhos=${ganhoSoma}`)
//         .then(() => {
//             navigate("../home");
//         })
//         .catch( (erro) => {
//             console.log(erro);
//         })
//     }, []);
//     alert("Foi")
// }

interface Props{
    texto: string;
    onClick: () => void;
}

export default function BotaoButton(props:Props){
    return(
        <button id="botao-buttun" onClick={props.onClick}>{props.texto}</button>
    )
}