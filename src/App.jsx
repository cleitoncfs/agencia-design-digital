import { useState } from "react";
import Topo from "./components/Topo";
import SecaoBanner from "./components/SecaoBanner";
import SecaoExperienciaTrabalho from "./components/SecaoExperienciaTrabalho";
import Rodape from "./components/Rodape";
import estilos from "./App.module.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

function App() {
    const [ehTemaEscuro, setTemaEscuro] = useState(false);

    function alterarTema() {
        setTemaEscuro(!ehTemaEscuro);
    }

    return (
        <div className={estilos.container}>
            <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
            <main>
                <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
                <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
            </main>
            <Rodape ehTemaEscuro={ehTemaEscuro} />
        </div>
    );
}

export default App;
