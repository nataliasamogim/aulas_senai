{/*Nome componente: Perfil*/ }
{/*Autor(a):Natália Aparecida Samogim*/ }
{/*Data de criação: e data de alteração: 01/12/2023*/ }
{/*Descrição: representa a página de perfil do usuário, contendo:
- foto de perfil;
- nome de perfil;
- email do usuário;
- botão de sair;
*/}
{/*Observações pertinentes:
- O código importa o componente `Dropdown` do pacote 'react-bootstrap para a criação de um menu suspenso, representando um perfil de usuário*/}

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css'

{/*Nome função: Perfil*/ }
{/*Autor(a): Natália Aparecida Samogim*/ }
{/*Data de criação: e data de alteração: 01/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o perfil de usuário*/ }
function Perfil(props) {
    const username = props.parametro;
    return (

        <Dropdown> {/*Engloba todo o conteúdo que será exibido quando o usuário interagir com o componente*/}
            <Dropdown.Toggle className='perfil' variant='outline' id="dropdown-basic"> {/*Este é o botão de acionamento do menu suspenso que quando clicado, mostra ou esconde o menu */}
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" color="white">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>{/*Imagem de perfil de usuário */}
            </Dropdown.Toggle>

            <Dropdown.Menu className='page-perfil'>
                <Dropdown.ItemText className='nome-perfil'>{username || 'teste'}</Dropdown.ItemText> {/*Nome de usuário*/}
                <Dropdown.ItemText className='email-perfil'>tointo@listatarefas.com</Dropdown.ItemText> {/*Email de usuário */}
                <Link to="/modificar" className='btn-sair'>Modificar cadastro</Link>
                <DropdownButton
                    as={ButtonGroup}
                    title="Modificar pagamento"
                    id="bg-vertical-dropdown-1"
                >
                    <Dropdown.Item eventKey="1">Modificar forma de pagamento</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Modificar dados do cartão</Dropdown.Item>
                </DropdownButton>
                {/*<Link to="/modificarpag" className='btn-sair'>Modificar pagamento</Link>*/}
                <Link to="/" className='btn-sair'>Sair</Link> {/*Botão de sair do menu suspenso*/}
            </Dropdown.Menu>
        </Dropdown>


    );
}

export default Perfil;