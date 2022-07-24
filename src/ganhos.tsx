import Cabecario from "./componentes/cabecarios/cabecarioVolta";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import SectionDireita from "./componentes/sectionDireita/gastos-ganhos/index";
import MenuInferior from "./componentes/menuInferior/ganhos-gastos/index";
import './ganhos.css';
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdicionarGanhos(){

    const navigate = useNavigate()

    useEffect(() => {
        axios.post("http://localhost:8000/add_ganhos/0?ganhos=500")
        .then(() => {
            navigate("../home");
        })
        .catch( (erro) => {
            console.log(erro);
        })
    }, []);
    alert("Foi");
}

export default function Ganhos(){

    

    return(
        <div id="container-ganhos">
            <Cabecario />

            <main id="meio-ganhos">
                <SectionEsquerda titulo="+Ganhos" cor="#00c5df"/>
                <SectionDireita onClick={AdicionarGanhos} sinal="+" cor="#00c5df" texto="Quanto ganhou?"/>
            </main>

            <MenuInferior />
        </div>
    )
}