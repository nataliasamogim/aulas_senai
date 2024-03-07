import { Link } from "react-router-dom"
import './Cad_concluido.css'

function Cad_concluido() {
    return (
        <>
            <div id="container_cad">
                <div className="cad_concluido">
                    <div className="conteudo">
                        <h2 className="title_cad">Cadastro concluído!</h2>
                        <h5 className="subtitulo">Seu cadastro foi concluído, deseja fazer Login</h5>
                        <p className="entr_log">Faça seu login</p>
                        <Link to="/login" className="link_log">Entrar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cad_concluido;