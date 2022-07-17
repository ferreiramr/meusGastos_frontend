import "./cabecarios.css";

export default function cabecarioPadrao(){
    return(
        <header className="cabecarioPadrao">
            <img className="logo" src="./logo192.png" alt="Logo" />
            <div className="logout">
                <a href="./login"><img src="./logout.png" alt="logout" /></a>
            </div>
        </header>
    )    
}