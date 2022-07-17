import "./cabecarios.css";

export default function cabecarioVoltar(){
    return(
        <header className="cabecarioPadrao">
            <div className="voltar">
                <a href="./home"><img src="./SetaVoltar.png" alt="Voltar" /></a>
            </div>
            <img className="logo" src="./logo192.png" alt="Logo" />
        </header>
    )
}