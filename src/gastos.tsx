import Cabecario from "./componentes/cabecarios/cabecarioVolta";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import SectionDireita from "./componentes/sectionDireita/gastos-ganhos/index";
import MenuInferior from "./componentes/menuInferior/ganhos-gastos/index";
import './gastos.css';
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdicionarGastos(){
    const navigate = useNavigate()

    useEffect(() => {
        axios.post("http://localhost:8000/add_gastos/0?gastos=500")
        .then(() => {
            navigate("../home");
        })
        .catch( (erro) => {
            console.log(erro);
        })
    }, []);

    alert("Foi");
}

export default function Gastos(){
    return(
        <div id="container-gastos">
            <Cabecario />

            <div id="meio-gastos">
                <SectionEsquerda titulo="+Gastos" cor="#FF5656"/>
                <SectionDireita onClick={AdicionarGastos} sinal="-" cor="#FF5656" texto="Quanto gastou?"/>     
            </div>

            <MenuInferior />
        </div>
    )
}