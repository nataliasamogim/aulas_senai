import { Link } from "react-router-dom"
import './Cad_concluido.css'

function Pag_cartao_realizado() {
    return (
        <>
            <div id="container_cad">
                <div className="cad_concluido"> 
                    <div className="conteudo">
                        <h2 className="title_cad">Pagamento concluído</h2>
                        <h5 className="subtitulo">Seu pagamento foi realizado com sucesso!!!</h5>
                        <p className="entr_log">Faça seu login</p>
                        <Link to="/login" className="link_log">Entrar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pag_cartao_realizado;