import Cabecario from "./componentes/cabecarios/cabecarioVolta";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import SectionDireita from "./componentes/sectionDireita/gastos-ganhos/index";
import MenuInferior from "./componentes/menuInferior/ganhos-gastos/index";
import './gastos.css';

export default function Gastos(){
    return(
        <div id="container-gastos">
            <Cabecario />

            <div id="meio-gastos">
                <SectionEsquerda titulo="+Gastos" cor="#FF5656"/>
                <SectionDireita sinal="-" cor="#FF5656"/>       
            </div>

            <MenuInferior />
        </div>
    )
}