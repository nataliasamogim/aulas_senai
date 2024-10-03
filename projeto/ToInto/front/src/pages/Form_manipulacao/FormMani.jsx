import React, { useState, useEffect } from 'react'; // Importa React, useState e useEffect do pacote 'react'
import { useNavigate } from 'react-router-dom'; // Importa useNavigate do pacote 'react-router-dom'
import './FormMani.css'; // Importa o arquivo CSS de estilos para este componente
import { Modal, Button } from 'react-bootstrap';

const defaultPhoto = 'image/foto_perfil.jpg'; // Substitua 'url_da_imagem_padrao.jpg' pela URL da sua imagem padrão

const FormMani = () => { // Declaração do componente FormMani como uma função
    // Definição do estado inicial do formulário usando o hook useState
    const [formAlter, setFormAlter] = useState({
        id: localStorage.getItem("ID"), // Valor obtido do localStorage para a chave 'ID'
        foto: '', // Valor padrão para a chave 'foto'
        nome_novo: '', // Valor padrão para a chave 'nome_novo'
        email_novo: '', // Valor padrão para a chave 'email_novo'
        senha_nova: '', // Valor padrão para a chave 'senha_nova'
    });

    // Efeito que é executado quando o componente é montado
    useEffect(() => {
        // Função assíncrona para buscar dados do usuário
        const showDados = async () => {
            try {
                // Faz uma requisição para receber os dados do usuário do servidor
                const resposta = await fetch('http://10.135.60.57:8085/receber-dados', {
                    method: 'POST', // Método da requisição
                    headers: {
                        'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                    },
                    body: JSON.stringify({ acao: 'selecionar_cad', id: localStorage.getItem("ID") }), // Corpo da requisição contendo os dados do formulário
                });

                // Verifica se a requisição foi bem-sucedida
                if (!resposta.ok) {
                    throw new Error('Erro ao obter dados do usuário'); // Lança um erro se a requisição falhar
                }

                // Extrai os dados da resposta e os converte para JSON
                const userData = await resposta.json();
                //console.log('Dados do usuário:', userData);

                // Atualiza o estado do formulário com os dados do usuário recebidos
                setFormAlter({
                    nome_novo: userData.mensagem[1], // Define o novo valor para 'nome_novo'
                    email_novo: userData.mensagem[2], // Define o novo valor para 'email_novo'
                    id: localStorage.getItem("ID") // Mantém o valor atual para 'id'
                });
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error); // Captura e exibe qualquer erro ocorrido durante a busca dos dados do usuário
            }

        };

        showDados(); // Chama a função para buscar os dados do usuário quando o componente é montado
    }, []); // Array de dependências vazio, indica que este efeito deve ser executado apenas uma vez

    // Função para lidar com a mudança nos inputs do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAlter(prevAlter => ({
            ...prevAlter,
            [name]: value,
        }));
    };

    // Função para lidar com a mudança na imagem do perfil
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormAlter(prevAlter => ({
            ...prevAlter,
            foto: URL.createObjectURL(file),
        }));
    };

    // Estado para armazenar mensagens de erro
    const [mensagensErro, setMensagensErro] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

    // Hook useNavigate para navegação entre rotas
    const navigate = useNavigate();

    //transforma a mensagem das validações de senha em tópicos
    function transformarMensagens(response) {
        const novasMensagens = [];

        // Itera sobre as mensagens do JSON original
        response.mensagens.forEach((item) => {
            if (Array.isArray(item.mensagem)) {
                // Se 'mensagem' for um array, adiciona cada mensagem como um novo objeto
                item.mensagem.forEach((msg) => {
                    novasMensagens.push({ erro: item.erro, mensagem: msg });
                });
            } else {
                // Caso contrário, mantém o objeto original
                novasMensagens.push(item);
            }
        });

        // Retorna um novo objeto com o array de mensagens atualizado
        return { erro: response.erro, mensagens: novasMensagens };
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        try {
            // Faz uma requisição para enviar os dados do formulário para o servidor
            const resposta = await fetch('http://10.135.60.57:8085/receber-dados', {
                method: 'POST', // Método da requisição
                headers: {
                    'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                },
                body: JSON.stringify({
                    acao: 'atualizar_cad',
                    id: formAlter.id,
                    nome_novo: formAlter.nome_novo,
                    email_novo: formAlter.email_novo,
                    senha_nova: formAlter.senha_nova,
                }), // Corpo da requisição contendo os dados do formulário em formato JSON
            });
            console.log('teste envio', formAlter)
            // Extrai o resultado da resposta e o converte para JSON
            const resultado = await resposta.json();
            console.log('teste retorno', resultado);

            // Verifica se ocorreu algum erro no servidor
            if (resultado.erro) {
                // Exibe mensagens de erro no console ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                const novoResponse = transformarMensagens(resultado);
                console.log(novoResponse);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(novoResponse.mensagens);
                setIsOpen(true);

            } else {
                localStorage.setItem('ID', formAlter.id);
                localStorage.setItem('nome_usuario', formAlter.nome_novo);
                localStorage.setItem('email', formAlter.email_novo);
                console.log('Dados atualizados com sucesso!', formAlter);
                navigate('/cadatualizado'); // Navega para outra rota
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error); // Captura e exibe qualquer erro ocorrido durante o envio dos dados do formulário
        }
    };

    const closeModal = () => {
        setIsOpen(false); // Alterado: Função para fechar o modal
        setMensagensErro([]); // Limpa as mensagens de erro
    };

    // Função para limpar o formulário
    const limpaForm = () => {
        setFormAlter({
            foto: '', // Limpa o valor da foto
            nome_novo: '', // Limpa o valor do nome
            email_novo: '', // Limpa o valor do email
            senha_nova: '', // Limpa o valor da senha
        });
    };

    // Renderiza o componente
    return (
        <div className="form-container">

            {/* Exibe mensagens de erro, se houver */}
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
                        {mensagensErro.length > 0 && (
                            <div style={{ color: 'white' }}>
                                <ul>
                                    {mensagensErro.map((mensagem, index) => (
                                        <li key={index}>{mensagem.mensagem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer className='footererromodal'>
                        <Button style={{ backgroundColor: '#570D70', border: 'none' }} className='errofechar' onClick={closeModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/* Formulário */}
            <form className="cadastro" onSubmit={handleSubmit}>
                <h1 className="h1_cadastro">Atualizar Cadastro</h1>
                <div className="form_grupo_foto">
                    {/* Exibe a foto selecionada ou a imagem padrão */}
                    <img src={formAlter.foto || defaultPhoto} alt="Profile" className="profile-photo" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
                    {/* Input para escolher a foto */}
                    <label htmlFor="upload-input">
                        <span>Escolher Foto</span>
                        <input type="text" id="upload-input" onChange={handleImageChange} style={{ display: 'none' }} accept="image/*" />
                    </label>
                </div>
                <input className="id" type="hidden" name="id" id='id' value={formAlter.id} />
                <div className="form_grupo">
                    <label className="nome">Nome</label>
                    <input className="input_2" type="text" name="nome_novo" id='nome_novo' value={formAlter.nome_novo} onChange={handleChange} placeholder="Digite seu nome" />
                </div>
                <div className="form_grupo">
                    <label className="email">Email</label>
                    <input className="input_3" type="email" name="email_novo" id='email_novo' value={formAlter.email_novo} onChange={handleChange} placeholder="Digite seu E-mail" />
                </div>
                <div className="form_grupo">
                    <label className="senha">Senha</label>
                    <input className="input_4" type="password" name="senha_nova" id='senha_nova' value={formAlter.senha_nova} onChange={handleChange} placeholder="Digite sua senha" />
                </div>
                <div className="buttons">
                    <div className="salvar">
                        <input type="submit" className="submit_btn" value="Salvar" />
                    </div>
                    <div className="can">
                        <input type="button" className="submit_btn" value="Cancelar" onClick={limpaForm} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormMani; // Exporta o componente FormMani como padrão


