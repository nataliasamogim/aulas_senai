{/* Nome do componente: Recuperacao
    Autor(a): Laura
    Data criação: /Alterações: 05/12/2024
    Descrição Detalhada: Componente responsável por gerenciar o processo de recuperação de senha. Ele utiliza um formulário onde o usuário deve inserir seu e-mail para receber um código de recuperação. Quando o formulário é enviado, uma requisição `POST` é feita para o backend para processar a recuperação, com mensagens de erro sendo exibidas caso haja falhas no processo.
    Observações Pertinentes: Este componente inclui o uso do hook `useState` para gerenciar o estado do formulário e das mensagens de erro, e utiliza a função `useNavigate` do `react-router-dom` para navegação, caso seja necessário redirecionar o usuário após a recuperação de senha. */}

import React, { useState } from 'react';
import './Recuperacao.css';

{/*Nome da função: Recuperacao
      Autor(a): Laura
      Data de criação: /Alterações: 05/12/2024
      Descrição Detalhada: 
        Esta função implementa um formulário para recuperação de senha. O formulário solicita que o usuário insira seu e-mail para enviar um código de recuperação. 
        O estado `formValues` armazena o e-mail inserido, e o estado `mensagensErro` armazena as mensagens de erro em caso de falha no envio do e-mail.
        Ao submeter o formulário, os dados são enviados via `fetch` para um backend específico, que processa a solicitação.
        Se houver erros, as mensagens de erro são exibidas ao usuário.
        O formulário possui uma funcionalidade de "limpeza", permitindo que o usuário cancele e reinicie o processo de recuperação.
     Retorno:
   Finalidade: Exibe o formulário de recuperação de senha na interface e gerencia a lógica de envio e controle de estado do formulário.*/}

function Recuperacao() {
    // Estado para armazenar os valores do formulário
    const [formValues, setFormValues] = useState({
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const [mensagensErro, setMensagensErro] = useState([])

    // Função para lidar com a mudança dos valores no formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                console.error('Erro ao enviar e-mail de recuperação:', resultado.mensagens);
                setMensagensErro(resultado.mensagens);
            } else {
                console.log('E-mail de recuperação enviado', resposta);

            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const limpaForm = () => {
        setFormValues({
            email: '' // Reseta o valor do campo de e-mail
        });
    };

    return (
        <div className="esqueceu-container">
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

            <section className="form_recuperarsenha">
                <form className="recuperar_senha" onSubmit={handleSubmit}>
                    <h1 className="h1_rec_senha">Recuperação de senha:</h1>
                    <div className="form_grupo">
                        <p>Digite o e-mail para enviarmos o código:</p>
                        <input className="input_email" id="rec_senha_email" type="email" name="email" placeholder="E-mail" value={formValues.rec_email} onChange={handleChange} data-email-validate data-required/>
                    </div>
            

                    <div className="btn_rec_senha">
                        <div className="salvar_rec_senha">
                            <input type='submit' className="btn_recsenha" id="salvar_rec_senha" value="Salvar" />
                        </div>
                        <div className="can_rec_senha">
                            <input type='button' className="btn_recsenha" id="cancel_rec_senha" onClick={limpaForm} value="Cancelar" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Recuperacao;
