// src/components/Card/index.jsx

import estilos from "./Card.module.css";

export default function Card({
    ehTemaEscuro,
    data,
    titulo,
    empresa,
    paragrafo,
}) {
    return (
        <div
            className={`${
                ehTemaEscuro ? estilos.card_escuro : estilos.card_claro
            } ${estilos[titulo.replaceAll(" ", "_").toLowerCase()]}`}
            data-aos="fade-up"
        >
            <span className={estilos.data}>{data}</span>
            <h3 className={estilos.titulo}>{titulo}</h3>
            <p className={estilos.empresa}>{empresa}</p>
            <p className={estilos.descricao}>{paragrafo}</p>
        </div>
    );
}
