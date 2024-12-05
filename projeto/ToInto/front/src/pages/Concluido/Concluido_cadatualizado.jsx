{/*Nome do componente: Concluido_cadatualizado
Autor(a): Laura
Data de criação: /Alterações: 05/12/2024
Descrição detalhada: Este componente exibe uma mensagem de confirmação após a atualização do cadastro do usuário. 
Inclui um botão/link que redireciona o usuário para o calendário principal da aplicação.*/}

import { Link } from "react-router-dom";
import './Concluido_cadatualizado.css';

{/* Nome da função: Concluido_cadatualizado
Autor(a): Laura
Data de criação: /Alteração: 05/12/2024
Retorno:
Nome: JSX de exibição de mensagem de confirmação de atualização de cadastro; Tipo: JSX.
Finalidade: Mostrar mensagem de sucesso e fornecer acesso ao calendário principal.
Descrição/Observações: Usa a tag `<Link>` para navegação no React Router. */}

function Concluido_cadatualizado() {
    return (
        <>
            {/* Container principal do componente */}
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
    );
}


export default Concluido_cadatualizado;
