{/* Nome do componente: CadastroLP*/ }
{/* Autor: Maria Luiza*/ }
{/* Data de criação: /alteração: 06-12-2023*/ }
{/* Descrição detalhada: Nesse componente, o código lida com a manipulação de dados do formulário, realiza validações no 
lado do cliente, e envia esses dados para um servidor, para ser processado e gravado em um documento txt. O componente é 
configurado para fornecer feedback visual aos usuários sobre o sucesso ou falha no processamento do formulário.*/}

import React, { useState } from 'react';
import './CadastroLP.css';
import { useNavigate } from 'react-router-dom'; //recuperar a rota 
import { useParams } from 'react-router-dom';

{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de email e senha) */ }
const CadastroLP = () => {
    const { plano } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmsenha: '',
    });

    console.log('Plano escolhido', plano);
    {/* O método handleChange é chamado sempre que um dos campos do formulário é alterado. 
Ele atualiza o estado formValues com os novos valores do campo.*/}
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const [mensagensErro, setMensagensErro] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('http://localhost:5000/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                // Exibe mensagens de erro no console.log ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(resultado.mensagens);
            } else {
                // Dados foram processados com sucesso
                console.log('Dados processados com sucesso!', resposta);
                //Navega para a tela do Cadastro concluído
                if (plano == 'free') {
                    navigate('/concluido')
                } else { 
                    navigate('/escpag') //ajustar a rota ao criar a pagina
                }
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const limpaForm = () => {
        setFormValues({
            nome: '',
            email: '',
            senha: '', 
            confirmsenha: '',
        });
    };

    return (

        <div className="form-container">

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

            <section className="form_cadastro">
                <form className="cadastro" id="cadastrar" action="" onSubmit={handleSubmit} /*O método handleSubmit é chamado quando o formulário é enviado.*/> {/*form do cadastro*/}
                    <h1 className="h1_cadastro">Cadastro Plano {plano}</h1>

                    <div className="form_grupo"> {/*div para parte do nome*/}
                        <label className="nome">Nome</label>
                        <input className="input_1" type="text" name="nome" id="nome" value={formValues.nome} onChange={handleChange} placeholder="Digite seu nome" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do e-mail*/}
                        <label className="email">Email</label>
                        <input className="input_2" type="email" name="email" id="email" value={formValues.email} onChange={handleChange} placeholder="Digite seu E-mail" data-email-validate data-min-length="10" data-max-length="40" />
                    </div>

                    <div className="form_grupo"> {/*div para parte da senha*/}
                        <label className="senha">Senha</label>
                        <input className="input_3" type="password" name="senha" id="senha" value={formValues.senha} onChange={handleChange} placeholder="Digite sua senha" data-password-validate data-min-length="8" data-max-length="15" />
                    </div>

                    <div className="form_grupo"> {/*div para a parte de confirmar senha*/}
                        <label className="confirmar">Confirmar senha </label>
                        <input className="input_4" type="password" name="confirmsenha" id="password" value={formValues.confirmsenha} onChange={handleChange} placeholder="Digite novamente sua senha" data-equal="senha" />
                    </div>

                    <div className="buttons">
                        <div className="cad"> {/*botão cadastrar do footer */}
                            <input type='submit' className="submit_btn" id="btn_cadastrar" value="Cadastrar" />
                        </div>
                        <div className="can"> {/*botão cancelar do footer */}
                            <input type='button' className="submit_btn" id="btn_cancelar" onClick={limpaForm} value="Cancelar" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CadastroLP;