import './style.css'

interface Props{
    titulo: string;
    cor: string;
    paragrafo?: string;
}

export default function index(props:Props){
    return(
        <section id="box-textos5654" style={{backgroundColor: props.cor}}>
            <p>{props.paragrafo}</p>
            <h1>{props.titulo}</h1>
        </section>
    )
}