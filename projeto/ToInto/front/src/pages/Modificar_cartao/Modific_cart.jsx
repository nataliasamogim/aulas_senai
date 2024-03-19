{/* Nome do componente: Modifc_cart*/ }
{/* Autor: Júlia Dias Lara e Natália Ap. Samogim*/ }
{/* Data de criação: 14/03/2024*/ }
{/* Descrição detalhada: Nesse componente, o código lida com a manipulação de dados do formulário, realiza validações no 
lado do cliente, e envia esses dados para um servidor, para ser processado e gravado em um documento txt. O componente é 
configurado para fornecer feedback visual aos usuários sobre o sucesso ou falha no processamento do formulário.*/}

import React, { useState } from 'react';
import './Modific_cart.css';
import { useNavigate } from 'react-router-dom'; //recuperar a rota 

{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de nome_titular
cpf, num_cartao, datavenc, cod_segurança) */ }
const Modific_cart = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        nome_titular: '',
        cpf: '',
        num_cartao: '',
        datavenc: '',
        cod_seguranca: '',
    });


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

                //Navega para a tela do  concluído
                navigate('/modificarpag')
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

            <section className="form_modifcartao">
                <form className="modificar_cartao" id="modificarcart" action="" onSubmit={handleSubmit} /*O método handleSubmit é chamado quando o formulário é enviado.*/> {/*form do cartão*/}
                    <h1 className="h1_modific_cartao">Modificar dados do cartão</h1>

                    <div className="form_grupo"> {/*div para parte do nome do titular*/}
                        <label className="nome_titular">Nome completo do titular</label>
                        <input className="input_1" type="text" name="nome_titular" id="nome_titular" value={formValues.nome_titular} onChange={handleChange} placeholder="Digite o nome do titular" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do cpf*/}
                        <label className="cpf">CPF</label>
                        <input className="input_2" type="text" name="cpf" id="cpf" value={formValues.cpf} onChange={handleChange} placeholder="Digite o CPF" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do numero do cartao*/}
                        <label className="num_cartao">Número do cartão</label>
                        <input className="input_3" type="number" name="num_cartao" id="num_cartao" value={formValues.num_cartao} onChange={handleChange} placeholder="Digite o número do cartão" data-min-length="16" data-max-length="40" />
                    </div>

                    <div className="form_grupo"> {/*div para parte da data de vencimento*/}
                        <label className="datavenc">Data de vencimento</label>
                        <input className="input_4" type="date" name="datavenc" id="datavenc" value={formValues.datavenc} onChange={handleChange} placeholder="Digite a data de vencimento" data-min-length="8" data-max-length="15" />
                    </div>

                    <div className="form_grupo"> {/*div para a parte de codigo de segurança*/}
                        <label className="codigo_seg">Código de segurança </label>
                        <input className="input_5" type="number" name="cod_seguranca" id="cod_seguranca" value={formValues.cod_seguranca} onChange={handleChange} placeholder="Digite o código de segurança" data-min-length="3" />
                    </div>

                    <div className="btn_modific_cart">
                        <div className="salvar_modif_cart"> {/*botão salvar do footer */}
                            <input type='submit' className="btn_cartao" id="btn_sal_cart" value="Salvar" />
                        </div>
                        <div className="can_modif_cart"> {/*botão cancelar do footer */}
                            <input type='submit' className="btn_cartao" id="btn_can_cart" onClick={limpaForm} value="Cancelar" />
                        </div>
                    </div>
                </form>

                <p className="error-validation template"></p> {/*implementação do java script */}
                <script src="JavaScript/validar.js"></script>
            </section>
        </div>
    );
};

export default Modific_cart;