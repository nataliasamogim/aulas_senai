{/*Nome do componente: ConfPix
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Descrição detalhada: Este componente exibe uma mensagem de confirmação após o pagamento via PIX.
Inclui um botão/link que redireciona o usuário para a página do calendário.*/}

import { Link } from "react-router-dom";
import './ConfPixStyle.css';

{/* Nome da função: ConfPix
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Retorno:
Nome: JSX de exibição de mensagem de confirmação de pagamento via PIX; Tipo: JSX.
Finalidade: Informar sucesso no pagamento e redirecionar o usuário para o calendário.
Descrição/Observações: Usa a tag `<Link>` para navegação no React Router. */}

function ConfPix() {
    return (
        <>
            <div id="container_conf">
                <div className="conf_Pix">
                    <div className="conteudo">
                        <h2 className="title_conf">Pagamento realizado com sucesso!!!</h2>
                        <h5 className="subtitulo_conf">Aproveite sua experiência no TOINTO</h5>
                        <Link to="/Login" className="link_conf">Continuar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfPix;