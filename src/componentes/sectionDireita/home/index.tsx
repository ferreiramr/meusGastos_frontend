import './style.css';

interface Props{
    ganhos: number;
    gastos: number;
}

export default function sectionDireitaHome(props: Props){
    return(
        <section className="resultados">
            <select className="selecaoPeriodo">
                <option value="esseMês">Esse Mês</option>
                <option value="Mês3">Últimos 3 Mêses</option>
                <option value="Mês6">Últimos 6 Mêses</option>
                <option value="Mês12">Últimos 12 Mêses</option>
            </select>
            <p id="resultadoNegativo">{props.gastos}</p>
            <div id="grafico"></div>
            <p id="resultadoPositivo">{props.ganhos - props.gastos}</p>
            <p id="resultadoTotal">Total {props.ganhos} </p>
        </section>
    )
}