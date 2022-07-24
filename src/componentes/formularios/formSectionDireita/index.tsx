import Input from '../input/index';
import BotaoButton from '../botao/botaoButton';

interface Props{
    onClick: () => void;
    texto: string;
}

export default function formSectionsDireita(props: Props){
    return(
        <form method="post">
            <Input tipo="number" nomeInput={props.texto} />
            <BotaoButton texto="Salvar" onClick={props.onClick}/>
        </form>
    )
}