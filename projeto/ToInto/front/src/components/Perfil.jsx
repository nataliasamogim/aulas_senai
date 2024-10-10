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
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css'

{/*Nome função: Perfil*/ }
{/*Autor(a): Maria Luzia*/ }
{/*Data de criação: e data de alteração: 01/12/2023*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o perfil de usuário*/ }
function Perfil(props) {
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [Email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

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

    const excluirConta = () => {
        const id_cad = localStorage.getItem('ID');

        fetch('http://10.135.60.29:8085/receber-dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'acao': 'deletar_cad', 'id_cad': id_cad })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao excluir conta');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Aqui você pode fazer algo após excluir as informações do usuário, como redirecionar para a página de login

            })
            .catch(error => {
                console.error('Erro ao excluir conta:', error);
            });

        // Dados foram processados com sucesso
        localStorage.setItem('ID', '');
        localStorage.setItem('nome_usuario', '');
        localStorage.setItem('email', '');
        //onLogin(resultado.username); // Chama a função onLogin com o nome de usuário retornado
        //Navega para a tela de calendario
        navigate('/')
    };

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className='perfil' variant='outline' id="dropdown-basic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" color="white">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu className='page-perfil'>
                    <Dropdown.ItemText className='nome-perfil' id="nome-perfil">{nomeUsuario}</Dropdown.ItemText>
                    <Dropdown.ItemText className='email-perfil' id="email-perfil">{Email}</Dropdown.ItemText>
                    <Link to="/modificar" className='btn-sair' id="btn-Modfc-cad">Modificar cadastro</Link>
                    <DropdownButton
                        as={ButtonGroup}
                        title="Modificar pagamento"
                        id="bg-vertical-dropdown-1"
                    >
                        <Link to="/modificarpag" className='btn-pagamento' id="btn-mdfc-tipopag">Modificar forma de pagamento</Link>
                        <Link to="/modificart" className='btn-pagamento' id="btn-mdfc-cartao">Modificar dados do cartão</Link>
                    </DropdownButton>
                    <Link to="/modificplano" className='btn-sair' id="btn-mdfc-plano">Modificar Plano</Link>
                    <button onClick={() => setShowModal(true)} className='btn-excluir' id="btn-excluir-conta" >Excluir conta</button>
                    <Link to="/" className='btn-sair' id="btn-sair-conta">Sair</Link>
                </Dropdown.Menu>
            </Dropdown>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Excluir conta</Modal.Title>
                </Modal.Header>
            <Modal.Body>Você realmente deseja excluir a conta?</Modal.Body>
                <Modal.Footer className='botaoexcluir'>
                    <Button className='botaocancelarModal' id="canc_excluirconta" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button className='botaoexcluirModal' id="excluir_conta" onClick={excluirConta}>
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
);

}

export default Perfil;