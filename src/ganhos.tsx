import Cabecario from "./componentes/cabecarios/cabecarioVolta";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import SectionDireita from "./componentes/sectionDireita/gastos-ganhos/index";
import MenuInferior from "./componentes/menuInferior/ganhos-gastos/index";
import './ganhos.css';

export default function Ganhos(){
    return(
        <div id="container-ganhos">
            <Cabecario />

            <main id="meio-ganhos">
                <SectionEsquerda titulo="+Ganhos" cor="#00c5df"/>
                <SectionDireita sinal="+" cor="#00c5df"/>
            </main>

            <MenuInferior />
        </div>
    )
}