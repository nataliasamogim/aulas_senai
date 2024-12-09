{/* Nome do componente: FormMani
Autor(a): Marília
Data de criação/Alterações: 09/12/2024
Descrição detalhada: Este componente representa uma seção de um formulário de pagamento para um plano mensal, oferecendo escolhas de forma de pagamento (Pix ou cartão de crédito),
com botões para voltar e continuar. O componente permite que o usuário escolha sua forma de pagamento e navegue para a próxima seção do pagamento. */}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormMani.css';
import { Modal, Button } from 'react-bootstrap';

const defaultPhoto = 'images_perfil/foto_perfil.jpg'; // Imagem padrão

// Adicionando um array de fotos fixas
const fixedPhotos = [
    'images_perfil/foto_perfil.jpg',
    'images_perfil/perfil_2.jpg',
    'images_perfil/perfil_3.jpg',
    'images_perfil/perfil_4.jpg',
    'images_perfil/toy_story.jpg',
    'images_perfil/gru.png',
    'images_perfil/minions.jpg',
    'images_perfil/jabuti.webp',
    'images_perfil/papagaio.jpg',
    'images_perfil/rato.webp',
    'images_perfil/dog1.jpg',
    'images_perfil/dog2.jpg',
    'images_perfil/girassol.avif',
    'images_perfil/lirios.webp',
    'images_perfil/tigre_foto.png',
    'images_perfil/calopsita.jpg',
    'images_perfil/pintinho.jpg'
];

const FormMani = () => {
    const navigate = useNavigate();
    const [formAlter, setFormAlter] = useState({
        id: localStorage.getItem("ID"),
        foto: '',
        nome_novo: '',
        email_novo: '',
        senha_nova: '',
    });

    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [base64Photos, setBase64Photos] = useState([]); // Estado para armazenar as fotos em Base64

    const togglePhotoModal = () => setShowPhotoModal(!showPhotoModal);

    // Função para converter uma imagem para Base64
    const convertPadraoBase64 = (url, callback) => {
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

    // Função para converter imagens em Base64
    const convertToBase64 = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) throw new Error('Erro ao carregar a imagem');
                    return response.blob();
                })
                .then((blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result.split(',')[1]); // Pega apenas a parte Base64
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                })
                .catch(reject);
        });
    };

    // Converte todas as fotos fixas em Base64 ao carregar o componente
    useEffect(() => {
        const convertAllPhotos = async () => {
            try {
                const promises = fixedPhotos.map((photo) => convertToBase64(photo));
                const base64Results = await Promise.all(promises);
                setBase64Photos(base64Results);
            } catch (error) {
                console.error('Erro ao converter imagens em Base64:', error);
            }
        };
        convertAllPhotos();
    }, []);

    const handleFixedPhotoSelect = (base64Photo) => {
        setFormAlter((prevAlter) => ({
            ...prevAlter,
            foto: base64Photo, // Define a foto selecionada como Base64
        }));
        togglePhotoModal();
    };

    useEffect(() => {
        // Converte a imagem padrão para Base64
        convertPadraoBase64(defaultPhoto, (base64Image) => {
            const showDados = async () => {
                try {
                    const resposta = await fetch('http://10.135.60.42:8085/receber-dados', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ acao: 'selecionar_cad', id: localStorage.getItem("ID") }),
                    });

                    if (!resposta.ok) throw new Error('Erro ao obter dados do usuário');

                    const userData = await resposta.json();
                    console.log("dados_back", userData)
                    setFormAlter({
                        nome_novo: userData.mensagem.nome,
                        email_novo: userData.mensagem.email,
                        id: userData.mensagem.id,
                        foto: userData.mensagem.foto_perfil || base64Image// Foto recuperada do banco
                    });
                    console.log('dados back:', userData.mensagem.foto_perfil)
                } catch (error) {
                    console.error('Erro ao buscar dados do usuário:', error);
                }
            };
            showDados();
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAlter(prevAlter => ({
            ...prevAlter,
            [name]: value,
        }));
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    const [mensagensErro, setMensagensErro] = useState([]);

 
{/*Autor: Marília M bellini
Alterações: 09/12/2024
Tipo: A função é uma função pura de JavaScript que processa um objeto de entrada e transforma parte de sua estrutura para retornar um novo objeto.
Parâmetros: O parâmetro response é um objeto com duas propriedades: erro, indicando o estado de erro, e mensagens, um array de objetos que possuem
erro (tipo do erro) e mensagem, que pode ser uma string ou um array de strings.
Retorno: A função retorna um objeto com erro igual ao do objeto de entrada e um array mensagens transformado, onde cada mensagem é um objeto com 
erro e uma string como mensagem. Se a mensagem original for um array, cada elemento é separado no novo array.
Descrição/Observações: A função transformarMensagens processa um objeto de mensagens, "achata" arrays internos de mensagens e padroniza a 
estrutura para um formato consistente, preservando o estado de erro (erro) do objeto de entrada. */}

    // Transforma as mensagens do servidor para melhor exibição
    function transformarMensagens(response) {
        const novasMensagens = [];

        response.mensagens.forEach((item) => {
            if (Array.isArray(item.mensagem)) {
                item.mensagem.forEach((msg) => {
                    novasMensagens.push({ erro: item.erro, mensagem: msg });
                });
            } else {
                novasMensagens.push(item);
            }
        });

        return { erro: response.erro, mensagens: novasMensagens };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('imagem', formAlter.foto)
        try {
            const resposta = await fetch('http://10.135.60.42:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    acao: 'atualizar_cad',
                    id: formAlter.id,
                    nome_novo: formAlter.nome_novo,
                    email_novo: formAlter.email_novo,
                    senha_nova: formAlter.senha_nova,
                    foto: formAlter.foto, // Envia o caminho da foto selecionada
                }),
            });
            const resultado = await resposta.json();

            if (resultado.erro) {
                const mensagensFormatadas = transformarMensagens(resultado);
                console.error('Erro no servidor:', mensagensFormatadas.mensagens);
                setMensagensErro(mensagensFormatadas.mensagens);
                setIsOpen(true);
            } else {
                localStorage.setItem('ID', formAlter.id);
                localStorage.setItem('nome_usuario', formAlter.nome_novo);
                localStorage.setItem('email', formAlter.email_novo);
                localStorage.setItem('foto', formAlter.foto); // Salva o caminho da foto no localStorage
                navigate('/cadatualizado');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setMensagensErro([]);
    }

    return (
        <div className="form-container">
            <div className='modalformani-erro'>
                <Modal show={modalIsOpen} onHide={closeModal} centered className="modcad">
                    <Modal.Header>
                        <button
                            onClick={closeModal} // Chama a função para fechar o modal
                            className="modal-close-button"
                            aria-label="Fechar"
                        >
                            &times;
                        </button>
                        <Modal.Title>Erro ao processar os dados</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {mensagensErro && mensagensErro.length > 0 ? (
                            <div style={{ color: 'white' }}>
                                <ul>
                                    {mensagensErro.map((mensagem, index) => (
                                        <li key={index}>{mensagem.mensagem}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div style={{ color: 'white' }}>Não há erros a exibir.</div> // Opcional: exibe uma mensagem de fallback
                        )}
                    </Modal.Body>
                    <Modal.Footer className='footererromodal'>
                        <Button style={{ backgroundColor: '#570D70', border: 'none' }} className='errofechar' onClick={closeModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <form className="cadastro" onSubmit={handleSubmit}>
                <h1 className="h1_cadastro">Atualizar Cadastro</h1>
                <div className="form_grupo_foto">
                    <img
                        src={`data:image/png;base64,${formAlter.foto}`}
                        alt="Profile"
                        className="profile-photo"
                        style={{ width: '85px', height: '85px', borderRadius: '50%' }}
                    />
                    <button type="button" onClick={togglePhotoModal} className="choose-photo-button">
                        Escolha uma foto
                    </button>
                </div>

                <Modal show={showPhotoModal} onHide={togglePhotoModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Escolha uma Foto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="fixed-photo-options">
                            {base64Photos.map((base64Photo, index) => (
                                <img
                                    key={index}
                                    src={`data:image/jpeg;base64,${base64Photo}`}
                                    alt={`Profile option ${index + 1}`}
                                    className="fixed-photo-option"
                                    onClick={() => handleFixedPhotoSelect(base64Photo)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        margin: '5px',
                                    }}
                                />
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>

                <div className="form_grupo">
                    <label className="nome">Nome</label>
                    <input
                        className="input_2"
                        type="text"
                        name="nome_novo"
                        value={formAlter.nome_novo}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="form_grupo">
                    <label className="email">Email</label>
                    <input
                        className="input_3"
                        type="email"
                        name="email_novo"
                        value={formAlter.email_novo}
                        onChange={handleChange}
                        placeholder="Digite seu E-mail"
                    />
                </div>
                <div className="form_grupo">
                    <label className="senha">Senha</label>
                    <input
                        className="input_4"
                        type="password"
                        name="senha_nova"
                        value={formAlter.senha_nova}
                        onChange={handleChange}
                        placeholder="Digite sua senha"
                    />
                </div>
                <div className="buttons">
                    <div className="salvar">
                        <input type="submit" className="submit_btn" value="Salvar" />
                    </div>
                    <div className="can">
                        <input
                            type="button"
                            className="submit_btn"
                            value="Cancelar"
                            onClick={() => setFormAlter({ ...formAlter, foto: '', nome_novo: '', email_novo: '', senha_nova: '' })}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormMani;
