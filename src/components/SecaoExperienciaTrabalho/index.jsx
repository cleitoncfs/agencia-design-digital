import estilos from "./SecaoExperienciaTrabalho.module.css";
import Card from "../Card";

export default function SecaoExperienciaTrabalho({ ehTemaEscuro }) {
    return (
        <section
            className={`${ehTemaEscuro ? estilos.escuro : estilos.banner}`}
        >
            <div className={estilos.conteiner_texto}>
                <h2 className={estilos.titulo}>Experiências de Trabalho</h2>
                <p className={estilos.texto}>
                    Há mais de 10 anos no mercado de Branding, Design Gráfico,
                    Criação de Sites e Marketing Digital, nos empenhamos
                    diariamente para entregar resultados que tragam impacto aos
                    nossos clientes.
                </p>
            </div>

            <div className={estilos.conteiner_cards}>
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    );
}
