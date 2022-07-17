import Cabecario from "./componentes/cabecarios/cabecarioPadrao";
import SectionEsquerda from "./componentes/sectionEsquerda/index";
import MenuInferior from "./componentes/menuInferior/home";
import SectionDireitaHome from "./componentes/sectionDireita/home";
import "./home.css";

export default function Home(){
    return(
        <div id="container-home">   
            <Cabecario />

            <div id="meioHome">
                <SectionEsquerda paragrafo="Patrimonio" titulo="R$ 1.500,00" cor="#00c5df"/>
                <SectionDireitaHome />
            </div>

            <MenuInferior />
        </div>
    )
}