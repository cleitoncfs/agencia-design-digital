import estilos from "./Rodape.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import instagramIcon from "../../assets/img/instagram.png";
import linkedinIcon from "../../assets/img/linkedin.png";
import behanceIcon from "../../assets/img/behance.png";
import dribbbleIcon from "../../assets/img/dribbble.png";
import facebookIcon from "../../assets/img/facebook.png";
import googleIcon from "../../assets/img/google.png";
import logoIcon from "../../assets/img/logo.png";

function Rodape({ ehTemaEscuro }) {
    return (
        <footer
            className={`${estilos.rodape} ${
                ehTemaEscuro ? estilos.escuro : ""
            }`}
        >
            <img src={logoIcon} alt="Logo Agência" className={estilos.logo} />

            <p className={estilos.textoPrincipal}>
                Ajudamos a criar uma personalidade digital construindo sua marca
                no ambiente online utilizando estratégias, ferramentas e
                tecnologias personalizadas.
            </p>

            <div className={estilos.links}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        className={estilos.icon}
                    />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className={estilos.icon}
                    />
                </a>
                <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={dribbbleIcon}
                        alt="Dribbble"
                        className={estilos.icon}
                    />
                </a>
                <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={behanceIcon}
                        alt="Behance"
                        className={estilos.icon}
                    />
                </a>
                <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={googleIcon}
                        alt="Google"
                        className={estilos.icon}
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className={estilos.icon}
                    />
                </a>
            </div>

            <p className={estilos.copyright}>
                © {new Date().getFullYear()} Agência de Design Digital – Todos
                os direitos reservados
            </p>

            <p className={estilos.credits}>
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={estilos.footerLink}
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    <span>Cleiton Santos</span>
                    <FaExternalLinkAlt className={estilos.linkIcon} />
                </a>
            </p>
        </footer>
    );
}

export default Rodape;
