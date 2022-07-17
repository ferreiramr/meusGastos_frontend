import './style.css';

export default function sectionDireitaHome(){
    return(
        <section className="resultados">
            <select className="selecaoPeriodo">
                <option value="esseMês">Esse Mês</option>
                <option value="Mês3">Últimos 3 Mêses</option>
                <option value="Mês6">Últimos 6 Mêses</option>
                <option value="Mês12">Últimos 12 Mêses</option>
            </select>
            <p id="resultadoNegativo">-300</p>
            <div id="grafico"></div>
            <p id="resultadoPositivo">+700</p>
            <p id="resultadoTotal">Total 1.000</p>
        </section>
    )
}