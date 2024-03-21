import { Link } from "react-router-dom"
import './Concluido_cadatualizado.css'

function Concluido_cadatualizado() {
    return (
        <>
            <div id="container_cad_atuali">
                <div className="cad_concluido_atuali">
                    <div className="conteudo">
                        <h2 className="title_cad_atuali">Cadastro atualizado com sucesso!</h2>
                        <h5 className="subtitulo">Seu cadastro foi atualizado</h5>
                        <p className="entr_log_atuali">Entrar no TOINTO</p>
                        <Link to="/calendario" className="link_calendario_atuali">Entrar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Concluido_cadatualizado;