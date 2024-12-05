{/* Nome do componente: CadastroLP */ }
{/* Autor(a): Laura */ }
{/* Data de criação: /Alterações: 01-10-2024 */ }
{/* Descrição detalhada: Esse componente lida com a manipulação de dados do formulário, realiza validações no 
lado do cliente e envia esses dados para um servidor, para serem processados e gravados em um documento txt. 
O componente é configurado para fornecer feedback visual aos usuários sobre o sucesso ou falha no processamento do formulário. */ }

import React, { useState } from 'react';
import './CadastroLP.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const CadastroLP = () => {
    const navigate = useNavigate();
    const [planoSelecionado, setPlanoSelecionado] = useState(null);
    const [formValues, setFormValues] = useState({
        acao: 'salvar_cad',
        nome: '',
        email: '',
        senha: '',
        confirmsenha: '',
        planos: planoSelecionado
    });

    const [mensagensErro, setMensagensErro] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    // Atualiza os valores do formulário conforme o usuário preenche os campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Define o plano selecionado
    const handlePlanoSelecionado = (plano) => {
        setPlanoSelecionado(plano);
    };

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

    // Lida com o envio do formulário
    const handleSubmit = async () => {
        if (!planoSelecionado) {
            setMensagensErro([{ mensagem: 'Por favor, selecione um plano antes de continuar.' }]);
            return;
        }

        formValues.planos = planoSelecionado;
        console.log('submit', formValues);

        try {
            const resposta = await fetch('http://10.135.60.47:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                const novoResponse = transformarMensagens(resultado);
                setMensagensErro(novoResponse.mensagens);
                setIsOpen(true);
            } else {
                localStorage.setItem("ID", resultado.mensagens.mensagem[0])
                localStorage.setItem("nome_usuario", formValues.nome)
                localStorage.setItem("email", formValues.email)
                localStorage.setItem("plano_esc", formValues.planos)
                console.log("plano_esc", formValues.planos)
                // Dados foram processados com sucesso
                console.log('Dados processados com sucesso!', resposta);
                // É direcionado para a página de acordo com o plano escolhido

                if (planoSelecionado === 1) {
                    navigate('/concluido');
                } else {
                    navigate('/escpag');
                }
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    // Fecha o modal de erro
    const closeModal = () => {
        setIsOpen(false);
        setMensagensErro([]);
    };

    // Limpa os campos do formulário
    const limpaForm = () => {
        setFormValues({
            nome: '',
            email: '',
            senha: '',
            confirmsenha: '',
        });
        setPlanoSelecionado('');
    };

    return (
        <>
            <div className="form-container">
                <div className='modalerroscad'>
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
                                    <p>Erro ao processar os dados:</p>
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
                <section className="form_cadastro">
                    <form className="cadastro" id="cadastrar" action="" onSubmit={(e) => e.preventDefault()}>
                        <h1 className="h1_cadastro">Cadastro</h1>

                        <div className="form_grupo">
                            <label className="nome">Nome</label> {/*div para parte do nome*/}
                            <input className="input_1" type="text" name="nome" id="nome" value={formValues.nome} onChange={handleChange} placeholder="Digite seu nome" data-min-length="3" data-max-length="100" data-only-letters />
                        </div>

                        <div className="form_grupo">
                            <label className="email">Email</label> {/*div para parte do e-mail*/}
                            <input className="input_2" type="email" name="email" id="email" value={formValues.email} onChange={handleChange} placeholder="Digite seu E-mail" data-email-validate data-min-length="10" data-max-length="40" />
                        </div>

                        <div className="form_grupo">
                            <label className="senha">Senha</label> {/*div para parte da senha*/}
                            <input className="input_3" type="password" name="senha" id="senha" value={formValues.senha} onChange={handleChange} placeholder="Digite sua senha" data-password-validate data-min-length="8" data-max-length="15" />
                        </div>

                        <div className="form_grupo">
                            <label className="confirmar">Confirmar senha </label>
                            <input className="input_4" type="password" name="confirmsenha" id="password" value={formValues.confirmsenha} onChange={handleChange} placeholder="Digite novamente sua senha" data-equal="senha" />
                        </div>

                        <div className="buttons">
                            {/*button para o plano free*/}
                            <button type="button" className={`submit_btn ${planoSelecionado === 1 ? 'selected' : ''}`} id="btn_cad_free" onClick={() => handlePlanoSelecionado(1)}>
                                <img className="free_img" src="image/free.png" alt="Free Icon" />
                                Free
                            </button>
                            {/*button para o plano mensal*/}
                            <button type="button" className={`submit_btn ${planoSelecionado === 2 ? 'selected' : ''}`} id="btn_cad_mensal" onClick={() => handlePlanoSelecionado(2)}>
                                <img className="mensal_img" src="image/oi.png" alt="Mensal Icon" />
                                Mensal
                            </button>
                            {/*button para o plano anual*/}
                            <button type="button" className={`submit_btn ${planoSelecionado === 3 ? 'selected' : ''}`} id="btn_cad_anual" onClick={() => handlePlanoSelecionado(3)}>
                                <img className="anual_img" src="image/anual.png" alt="Anual Icon" />
                                Anual
                            </button>
                        </div>

                        <div className="btn_can_cad">
                            <div className='can'> {/*botão cancelar do footer */}
                                <input type='button' className="submit_can" id="btn_cancelar" onClick={limpaForm} value="Cancelar" />
                            </div>
                            <div className='cad'> {/*botão cadastrar do footer */}
                                <input type='button' className="submit_cad" id="btn_cadastrar" onClick={handleSubmit} value="Cadastrar" />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
};

export default CadastroLP;
