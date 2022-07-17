import Input from '../input/index';
import BotaoButton from '../botao/botaoButton';

export default function formSectionsDireita(){
    return(
        <form method="post">
            <Input tipo="number" nomeInput="Quanto ganhou?"/>
            <BotaoButton texto="Salvar"/>
        </form>
    )
}