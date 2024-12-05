{/*Nome do componente: Cad_concluido
Autor(a): Laura
// Data de criação: /Atelarações: 05/12/2024
Descrição detalhada: Este componente é responsável por exibir uma mensagem de sucesso após a conclusão do cadastro do usuário.
Ele inclui um botão/link que redireciona para a página de login.*/}

import { Link } from "react-router-dom";
import './Cad_concluido.css';

{/* Nome da função: Cad_concluido
Autor(a): Laura
Data de criação: /Alteração: 05/12/2024
Retorno
Nome: JSX para exibição de confirmação de cadastro; Tipo: JSX.
Finalidade: Mostrar mensagem de cadastro concluído e link para login.
Descrição/Observações: Usa a tag `<Link>` do React Router para navegação. */}

function Cad_concluido() {
    return (
        <>
            <div id="container_cad">
                <div className="cad_concluido"> 
                    <div className="conteudo">
                        <h2 className="title_cad">Cadastro concluído!</h2>
                        <h5 className="subtitulo">Seu cadastro foi realizado com sucesso!!!</h5>
                        <p className="entr_log">Faça seu login</p>
                        <Link to="/login" className="link_log">Entrar</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cad_concluido;
