import BotaoMenuInferior from '../botoes/botao'; 
import './style.css';

export default function menuInferior(){
    return(
        <section className="botoesAdicionar">
            <p></p>
            <BotaoMenuInferior cor="#00c5df" url="./home" texto="Home"/>
        </section>
    )
}