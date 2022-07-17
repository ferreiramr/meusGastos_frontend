import "./style.css";

interface Props{
    texto: string;
}

export default function BotaoButton(props:Props){
    return(
        <button id="botao-buttun">{props.texto}</button>
    )
}