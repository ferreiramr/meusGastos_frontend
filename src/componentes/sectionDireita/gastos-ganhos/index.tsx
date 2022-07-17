import FormSectionDireita from "../../formularios/formSectionDireita/index";
import './style.css';

interface Props{
    sinal: string;
    cor: string;
}

export default function sectionDireita(props:Props){
    return(
        <section className="addValor">
            <h1 style={{color:props.cor}}>{props.sinal}</h1>
            <FormSectionDireita />
        </section>
    )
}