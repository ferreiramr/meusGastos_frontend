import Cabecario from "./componentes/cabecarios/cabecarioPadrao";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import MenuInferior from "./componentes/menuInferior/home";
import SectionDireitaHome from "./componentes/sectionDireita/home";
import "./home.css";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home(){

    const [patrimonio, setPatrimonio] = useState(0);
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/usuario/0")
        .then((response) => {
            setPatrimonio(response.data.patrimonio);
            setGanhos(response.data.ganhos);
            setGastos(response.data.gastos);
        })
        .catch( () => {
            console.log("Não deu certo!");
        })
    }, []);

    return(
        <div id="container-home">   
            <Cabecario />

            <div id="meioHome">
                <SectionEsquerda paragrafo="Patrimonio" titulo={`R$ ${patrimonio}`} cor="#00c5df"/>
                <SectionDireitaHome ganhos={ganhos} gastos={gastos}/>
            </div>

            <MenuInferior />
        </div>
    )
}