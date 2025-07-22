import estilos from "./SecaoBanner.module.css";
import banner from "../../assets/img/banner.jpg";
import whatsappIcon from "../../assets/img/whatsapp.png";

function SecaoBanner({ ehTemaEscuro }) {
    return (
        <section
            className={`${estilos.banner} ${
                ehTemaEscuro ? estilos.escuro : ""
            }`}
        >
            <div className={estilos.container}>
                <img
                    src={banner}
                    alt="Banner da agência"
                    className={estilos.imagem}
                />
                <div className={estilos.textoArea}>
                    <h2 className={estilos.titulo}>
                        Transformamos ideias em experiências digitais
                    </h2>
                    <p className={estilos.texto}>
                        Somos uma agência especializada em design, tecnologia e
                        inovação. Seja visto, lembrado e desejado.
                    </p>
                    <a
                        className={estilos.botao}
                        href="https://wa.me/351912155966"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={whatsappIcon}
                            alt="WhatsApp"
                            className={estilos.icone}
                        />
                        Fale conosco
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SecaoBanner;
