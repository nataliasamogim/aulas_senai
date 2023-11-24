import MenuLateral from "./MenuLateral";
import Perfil from "./Perfil";

function Calendario() {
    return (
        <section className="barra-data">{/*Início do cabeçalho da página*/}
            <MenuLateral />{/*componente do menu lateral que esta dentro do componente calendario*/}

            {/*Início da div que contém a seta para esquerda e direita, o mês e o ano*/}
            <div className="seta-mes">
                {/*Inicio da div que contem a seta para esquerda*/}
                <div>
                    <button className="btn-seta1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16" color="white">
                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                        </svg>
                    </button>
                </div>
                {/*Fim da div que contem a seta*/}

                {/*Inicio da div que contem o mes e o ano*/}
                <div className="mes-ano">
                    <h2 className="mes">Setembro</h2>
                    <h4 className="ano">2023</h4>
                </div>
                {/*Fim da div*/}

                {/*Inicio da div que contem a seta para a direita e a imagem de perfil*/}
                <div className="seta-perfil">
                    <div>
                        <button className="btn-seta2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16" color="white">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </button>
                    </div>
                    <div className="perfil">
                        <Perfil />
                    </div>
                </div>
                {/*Fim da div*/}
            </div>
            {/*Fim da div que contém a seta para esquerda e direita, o mês e o ano*/}
        </section>
    )
}

export default Calendario;