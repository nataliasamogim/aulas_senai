import { Link } from "react-router-dom"
import './ConfPixStyle.css'

function ConfPix() {
    return (
        <>
            <div id="container_conf">
                <div className="conf_Pix"> 
                    <div className="conteudo">
                        <h2 className="title_conf">Pagamento realizado com sucesso!!!</h2>
                        <h5 className="subtitulo_conf">Aproveite sua experiencia no TOINTO</h5>
                        <Link to="/calendario" className="link_conf">Confirmar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfPix;