import './style.css';

interface Props{
    texto: string;
    url: string;
    cor: string;
}

export default function botao(props:Props){
    return(
        <div id="box-botao-inferior">
            <a id="botoes-inferiores5428" style={{color: props.cor}} href={props.url}>{props.texto}</a>
        </div>
    )
}