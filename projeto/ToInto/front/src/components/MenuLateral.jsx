{/* MenuLateral.jsx
    Autora: Marília
    Data de Criação: 13/09 - Alteração: 01/12
    Descrição: Esse componente cria um menu lateral responsivo acionado por um botão de ícone. Ao ser clicado, o menu
    desliza para exibir botões usando a biblioteca React Bootstrap e React Router. Ele apresenta opções como 'Hoje',
    'Semana' e 'Importantes', todos redirecionando para o Todolist. Esse menu oferece uma interface simplificada para
    navegar entre diferentes seções e funcionalidades dentro da aplicação, de modo mais acessível e organizado.
    Observações: É utilizado rotas, e possui uma função.
*/}

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

{/* Função MenuLateral
    Autora: Marília
    Criação: 13/09 - Alteração 01/12
    Parâmetros de entrada: NULO
    Retorno
    Retorna o visual do Menu Lateral
    Descrição/Observação: Esse componente cria um menu lateral com links ('Hoje', 'Semana', 'Importantes') que
    redirecionam para a página '/todolist'. A interatividade do menu é controlada pelo estado interno do componente,
   proporcionando uma navegação fluida entre as seções da aplicação
*/}
function MenuLateral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*Início do Menu lateral*/}

      <div className="cabecalho_menu">{/*div que contém um icon que tem a função de um botão*/}
        <Button className="lateral_menu" onClick={handleShow} variant='outiline'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16"  >
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Button>
      </div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>{/*o closeButton é o botão de fechar*/}
          <Link to='/calendario'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16" className='home_calen'>
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </Link>
        </Offcanvas.Header>
        {/*início dos botões do menu*/}
        <Offcanvas.Body>
          {/*Início da div que contém todos os botões*/}
          <div className="d-grid gap-2">
            <Link to="/Todolist" className='hoje'>
              Hoje
            </Link>

            <Link to="/Todolist" className="semana">
              Semana
            </Link>

            <Link to="/Todolist" className="importante" >
              Importantes
            </Link>
          </div>
          {/*Fim da div*/}

        </Offcanvas.Body>
        {/*Fim do corpo do menu*/}
      </Offcanvas>
      
    </>
  );
}

export default MenuLateral;