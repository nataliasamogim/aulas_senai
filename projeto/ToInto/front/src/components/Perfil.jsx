{/*Nome componente: Perfil*/ }
{/*Autor(a):Maria Luzia Goulart Poli*/ }
{/*Data de criação: e data de alteração: 21/03/2024 }
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
import React, { useState, useEffect } from 'react';
import '../App.css'

{/*Nome função: Perfil*/ }
{/*Autor(a): Maria Luzia*/ }
{/*Data de criação: e data de alteração: 01/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o perfil de usuário*/ }
function Perfil(props) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [Email, setEmail] = useState('');
    const username = localStorage.getItem('username');

    useEffect(() => {
        const storedNome = localStorage.getItem('nome_usuario');
        if (storedNome) {
            setNomeUsuario(storedNome);
        }
    }, []); //Adicione o array de dependências vazio aqui

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []); //Adicione o array de dependências vazio aqui
    return (
        <Dropdown>
            <Dropdown.Toggle className='perfil' variant='outline' id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" color="white">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className='page-perfil'>
                <Dropdown.ItemText className='nome-perfil'>{nomeUsuario}</Dropdown.ItemText>
                <Dropdown.ItemText className='email-perfil'>{Email}</Dropdown.ItemText>
                <Link to="/modificar" className='btn-sair'>Modificar cadastro</Link>
                <DropdownButton
                    as={ButtonGroup}
                    title="Modificar pagamento"
                    id="bg-vertical-dropdown-1"
                >
                    <Dropdown.Item eventKey="1">Modificar forma de pagamento</Dropdown.Item>
                    <Link to="/modificarpag" className='btn-dadoscart'>Modificar dados do cartão</Link>
                </DropdownButton>
                <Link to="/" className='btn-sair'>Sair</Link>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Perfil;