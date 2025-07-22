import estilos from "./Topo.module.css";
import logo from "../../assets/img/logo.png";
import sun from "../../assets/img/sun.png";
import moon from "../../assets/img/moon.png";

function Topo({ alterarTema, ehTemaEscuro }) {
    return (
        <header
            className={`${estilos.topo} ${ehTemaEscuro ? estilos.escuro : ""}`}
        >
            <div className={estilos.conteiner}>
                <div className={estilos.logoTitulo}>
                    <img
                        src={logo}
                        alt="Logo da agência"
                        className={estilos.logo}
                    />
                </div>
                <button
                    className={estilos.botao}
                    onClick={alterarTema}
                    aria-label="Alternar tema"
                >
                    <img
                        src={ehTemaEscuro ? sun : moon}
                        alt={ehTemaEscuro ? "Ícone sol" : "Ícone lua"}
                        className={estilos.icone}
                    />
                </button>
            </div>
        </header>
    );
}

export default Topo;
