import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //recuperar a rota 
import './DadosCartao.css'

{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de email e senha) */ }
const DadosCartao = () => {
    const navigate = useNavigate();
    const [formCartao, setFormCartao] = useState({
        id: localStorage.getItem("ID"),
        cpf: '',
        num_cartao: '',
        cod_seguranca: '',
        datavenc: '',
        nome_titular: '',
        escolha_pag: '2'
    });


    {/* O método handleChange é chamado sempre que um dos campos do formulário é alterado. 
Ele atualiza o estado formValues com os novos valores do campo.*/}
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormCartao((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const [mensagensErro, setMensagensErro] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resposta = await fetch('http://10.135.60.20:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formCartao),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                // Exibe mensagens de erro no console.log ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);

                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(resultado.mensagens);
            } else {
                // Dados foram processados com sucesso
                console.log('Dados processados do cartão com sucesso!', resposta);
                setFormCartao('')
                //Navega para a tela do Cadastro concluído
                navigate('/concluido')
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
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

            <section className="form_adiccartao">
                <form className="adic_cartao" id="adicionarcart" action="" onSubmit={handleSubmit} /*O método handleSubmit é chamado quando o formulário é enviado.*/> {/*form do cadastro*/}
                    <h1 className="h1_cartao">Adicionar dados do cartão</h1>

                    <div className="form_grupo"> {/*div para parte do nome*/}
                        <label className="nome_titular">Nome completo do titular</label>
                        <input className="input_1" type="text" name="nome_titular" id="nome_titular" value={formCartao.nome_titular} onChange={handleChange} placeholder="Digite o nome do titular" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do nome*/}
                        <label className="cpf">CPF</label>
                        <input className="input_2" type="text" name="cpf" id="cpf" value={formCartao.cpf} onChange={handleChange} placeholder="___.___.___-__" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do e-mail*/}
                        <label className="num_cartao">Número do cartão</label>
                        <input className="input_3" type="number" name="num_cartao" id="num_cartao" value={formCartao.num_cartao} onChange={handleChange} placeholder="Digite o número do cartão" data-min-length="16" data-max-length="40" />
                    </div>

                    <div className="form_grupo"> {/*div para parte da senha*/}
                        <label className="datavenc">Data de vencimento</label>
                        <input className="input_4" type="date" name="datavenc" id="datavenc" value={formCartao.datavenc} onChange={handleChange} placeholder="Digite a data de vencimento" data-min-length="8" data-max-length="15" />
                    </div>

                    <div className="form_grupo"> {/*div para a parte de confirmar senha*/}
                        <label className="codigo_seg">Código de segurança </label>
                        <input className="input_5" type="number" name="cod_seguranca" id="cod_seguranca" value={formCartao.cod_seguranca} onChange={handleChange} placeholder="Digite o código de segurança" data-min-length="3" />
                    </div>

                    <div className="buttons_cartao">
                        <div className="salvar_cartao"> {/*botão cadastrar do footer */}
                            <input type='submit' className="btn_cartao" id="btn_salvarcart" value="Salvar" />
                        </div>
                        <div className="can_cartao"> {/*botão cancelar do footer */}
                            <input type='submit' className="btn_cartao" id="btn_can_cart" value="Cancelar" />
                        </div>
                    </div>
                </form>

                <p className="error-validation template"></p> {/*implementação do java script */}
                <script src="JavaScript/validar.js"></script>
            </section>
        </div>
    );
};

export default DadosCartao;