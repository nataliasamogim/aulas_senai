{/*Nome do componente: Pag_cartao_realizado
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Descrição detalhada: Este componente exibe uma mensagem de confirmação após a realização de um pagamento.
Inclui um botão/link que redireciona o usuário para a página de login.*/}

import { Link } from "react-router-dom";
import './Cad_concluido.css';

{/* Nome da função: Pag_cartao_realizado
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Retorno:
Nome: JSX de exibição de mensagem de confirmação de pagamento realizado; Tipo: JSX.
Finalidade: Informar sucesso no pagamento e redirecionar o usuário para login.
Descrição/Observações: Usa a tag `<Link>` para navegação no React Router. */}

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
    );
}


export default Pag_cartao_realizado;
