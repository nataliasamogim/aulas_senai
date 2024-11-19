import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormMani.css';
import { Modal, Button } from 'react-bootstrap';

const defaultPhoto = 'images_perfil/foto_perfil.jpg'; // Imagem padrão

// Adicionando um array de fotos fixas
const fixedPhotos = [
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
    'images_perfil/peonia.avif',
    'images_perfil/tigre_foto.png',
    'images_perfil/calopsita.jpg',
    'images_perfil/pintinho.jpg'

];

const FormMani = () => {
    const navigate = useNavigate();
    const [formAlter, setFormAlter] = useState({
        id: localStorage.getItem("ID"),
        foto: localStorage.getItem('foto') || defaultPhoto, // Carrega a foto do localStorage ou usa a padrão
        nome_novo: '',
        email_novo: '',
        senha_nova: '',
    });

    const [showPhotoModal, setShowPhotoModal] = useState(false);

    const togglePhotoModal = () => setShowPhotoModal(!showPhotoModal);

    const handleFixedPhotoSelect = (photo) => {
        setFormAlter(prevAlter => ({
            ...prevAlter,
            foto: photo,
        }));
        localStorage.setItem('foto', photo); // Salva a foto no localStorage
        togglePhotoModal();
    };

    useEffect(() => {
        const showDados = async () => {
            try {
                const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ acao: 'selecionar_cad', id: localStorage.getItem("ID") }),
                });

                if (!resposta.ok) throw new Error('Erro ao obter dados do usuário');

                const userData = await resposta.json();
                setFormAlter({
                    nome_novo: userData.mensagem[1],
                    email_novo: userData.mensagem[2],
                    id: localStorage.getItem("ID"),
                    foto: localStorage.getItem('foto') || userData.mensagem[3] || defaultPhoto
                });
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        };
        showDados();
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

    //transforma a mensagem das validações de senha em tópicos
    function transformarMensagens(response) {
        if (response.erro && response.mensagens) {
            return { erro: response.erro, mensagens: response.mensagens };
        }
        return { erro: false, mensagens: [] };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
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
                    foto: formAlter.foto, // Inclui a foto ao enviar os dados
                }),
            });
            const resultado = await resposta.json();

            if (resultado.erro) {
                // Converte e exibe mensagens de erro no modal
                const mensagensFormatadas = transformarMensagens(resultado);
                console.error('Erro no servidor:', mensagensFormatadas.mensagens);
                setMensagensErro(mensagensFormatadas.mensagens);  // Atualizando o estado com as mensagens de erro
                setIsOpen(true);  // Abre o modal se houver mensagens
            } else {
                localStorage.setItem('ID', formAlter.id);
                localStorage.setItem('nome_usuario', formAlter.nome_novo);
                localStorage.setItem('email', formAlter.email_novo);
                localStorage.setItem('foto', formAlter.foto); // Salva a foto no localStorage
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
                    <img src={formAlter.foto || defaultPhoto} alt="Profile" className="profile-photo" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
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
                            {fixedPhotos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Profile option ${index + 1}`}
                                    className="fixed-photo-option"
                                    onClick={() => {
                                        handleFixedPhotoSelect(photo);
                                        togglePhotoModal(); // Fecha o modal ao selecionar uma foto
                                    }}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        cursor: 'pointer',
                                        borderRadius: '50%',
                                        margin: '5px'
                                    }}
                                />
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>


                <div className="form_grupo">
                    <label className="nome">Nome</label>
                    <input className="input_2" type="text" name="nome_novo" value={formAlter.nome_novo} onChange={handleChange} placeholder="Digite seu nome" />
                </div>
                <div className="form_grupo">
                    <label className="email">Email</label>
                    <input className="input_3" type="email" name="email_novo" value={formAlter.email_novo} onChange={handleChange} placeholder="Digite seu E-mail" />
                </div>
                <div className="form_grupo">
                    <label className="senha">Senha</label>
                    <input className="input_4" type="password" name="senha_nova" value={formAlter.senha_nova} onChange={handleChange} placeholder="Digite sua senha" />
                </div>
                <div className="buttons">
                    <div className="salvar">
                        <input type="submit" className="submit_btn" value="Salvar" />
                    </div>
                    <div className="can">
                        <input type="button" className="submit_btn" value="Cancelar" onClick={() => setFormAlter({ ...formAlter, foto: '', nome_novo: '', email_novo: '', senha_nova: '' })} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormMani;
