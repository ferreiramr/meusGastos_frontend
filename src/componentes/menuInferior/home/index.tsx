import BotaoMenuInferior from '../botoes/botao'; 
import './style.css';

export default function menuInferior(){
    return(
        <section id="botoes-menu-inferior">
            <BotaoMenuInferior cor="#00c5df" url="./ganhos" texto="+Ganhos"/>
            <BotaoMenuInferior cor="#df0000" url="./gastos" texto="+Gastos"/>
        </section>
    )
}