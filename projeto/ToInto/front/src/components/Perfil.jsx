{/*Nome componente: Perfil*/}
{/*Autora: Júlia*/}
{/*Data de alteração: 05/12/2024*/}
{/*Descrição: O componente Perfil exibe informações do usuário autenticado, como nome, e-mail e foto de perfil, 
além de fornecer acesso a ações relacionadas à conta e ao pagamento.*/}

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css';

const defaultPhoto = 'images_perfil/foto_perfil.jpg'; // Caminho da imagem padrão

{/*Nome função: Perfil*/ }
{/*Autora: Júlia*/ }
{/*Data de alteração: 05/12/2024*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna o perfil*/ }
function Perfil(props) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        nomeUsuario: '',
        email: '',
        foto: '' // A foto será carregada dinamicamente
    });
    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal.

    // Função para converter uma imagem para Base64
    const convertToBase64 = (url, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result.split(',')[1]); // Apenas a parte Base64
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };

    useEffect(() => {
        // Converte a imagem padrão para Base64
        convertToBase64(defaultPhoto, (base64Image) => {
            // Função para buscar dados do usuário
            const showDados = async () => {
                try {
                    const resposta = await fetch('http://10.135.60.43:8085/receber-dados', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ acao: 'selecionar_perfil', id: localStorage.getItem("ID") }),
                    });

                    if (!resposta.ok) throw new Error('Erro ao obter dados do usuário');

                    const response = await resposta.json();
                    setUserData({
                        nomeUsuario: response.mensagem.nome, // Atualiza o estado com o nome do usuário.
                        email: response.mensagem.email, // Atualiza o estado com o e-mail do usuário.
                        foto: response.mensagem.foto_perfil || base64Image // Usa a foto padrão caso nenhuma esteja definida
                    });
                } catch (error) {
                    console.error('Erro ao buscar dados do usuário:', error);
                    // Define a foto padrão em caso de erro
                    setUserData((prev) => ({ ...prev, foto: base64Image }));
                }
            };

            showDados(); // Chama a função para buscar dados.
        });
    }, []);

    // Função para excluir a conta do usuário.
    const excluirConta = () => {
        const id_cad = localStorage.getItem('ID');

        fetch('http://10.135.60.43:8085/receber-dados', {
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
            })
            .catch(error => {
                console.error('Erro ao excluir conta:', error);
            });

        // Limpa os dados do usuário no localStorage e redireciona para a página inicial.
        localStorage.setItem('ID', '');
        localStorage.setItem('nome_usuario', '');
        localStorage.setItem('email', '');
        navigate('/');
    };

    return (
        <>
            <Dropdown> {/* Menu dropdown para o perfil do usuário. */}
                <Dropdown.Toggle className='perfil' variant='outline' id="dropdown-basic">
                    {/* Exibe a foto do perfil como um botão de dropdown. */}
                    <img 
                        src={`data:image/png;base64,${userData.foto}`} 
                        alt="Foto de perfil" 
                        width="60" 
                        height="60" 
                        className="profile-picture" 
                        style={{ borderRadius: '50%' }}
                    />
                </Dropdown.Toggle>

                {/* Menu contendo as opções do perfil. */}
                <Dropdown.Menu className='page-perfil'> 
                    <Dropdown.ItemText className='nome-perfil' id="nome-perfil">{userData.nomeUsuario}</Dropdown.ItemText>
                    <Dropdown.ItemText className='email-perfil' id="email-perfil">{userData.email}</Dropdown.ItemText>
                    <Link to="/modificar" className='btn-sair' id="btn-Modfc-cad">Modificar cadastro</Link>
                    <DropdownButton
                        as={ButtonGroup}
                        title="Modificar pagamento"
                        id="bg-vertical-dropdown-1"
                    >
                        <Link to="/modific_pag" className='btn-pagamento' id="btn-mdfc-tipopag">Modificar forma de pagamento</Link>
                        <Link to="/modificart" className='btn-pagamento' id="btn-mdfc-cartao">Modificar dados do cartão</Link>
                    </DropdownButton>
                    <Link to="/modificplano" className='btn-sair' id="btn-mdfc-plano">Modificar Plano</Link>
                    <a href='https://youtu.be/6goiTI0iw8Y' className='btn-sair' id="btn-ajuda">Ajuda</a>
                    <button onClick={() => setShowModal(true)} className='btn-excluir' id="btn-excluir-conta" >Excluir conta</button>
                    <Link to="/" className='btn-sair' id="btn-sair-conta">Sair</Link>
                </Dropdown.Menu>
            </Dropdown>

            {/* Modal de confirmação para excluir conta. */}
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
