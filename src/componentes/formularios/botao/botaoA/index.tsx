import "./style.css";

interface Props{
    texto: string;
    url: string;
}

export default function botaoA(props:Props){
    return(
        <a href={props.url} id="botao-a">{props.texto}</a>
    )
}