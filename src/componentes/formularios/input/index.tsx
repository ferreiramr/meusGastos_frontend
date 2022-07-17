
import './style.css';

interface Props {
    nomeInput: string;
    tipo: string;
}

function tirarPrimeiraLetra(txt:string){

    const txtArray:string[] = [];
    for(let cont = 1; cont < txt.length; cont++){
        txtArray.push(txt[cont]);
    }

    return txtArray;
}

function montarTexto(letraMaiuscula:string, semPriemiraLetra:string[]){
    let varLetraMaiuscula = letraMaiuscula;
    for(let cont = 0; cont < semPriemiraLetra.length; cont++){
        varLetraMaiuscula += semPriemiraLetra[cont];
    }
    return varLetraMaiuscula;
}

function primeiraLetraMaiuscula(txt:string){

    const semPriemiraLetra = tirarPrimeiraLetra(txt);

    let letraMaiuscula = txt[0].toUpperCase();

    const txtCompleto = montarTexto(letraMaiuscula, semPriemiraLetra);

    return txtCompleto;
}

export default function input(props: Props){

    const letraMaiuscula = primeiraLetraMaiuscula(props.nomeInput);

    return (
        <input type={props.tipo} id="input-padrao" placeholder={letraMaiuscula} required/>
    )
}