{/* Nome do componente: Modifc_cart*/ }
{/* Autor: Júlia Dias Lara e Natália Ap. Samogim*/ }
{/* Data de criação: 14/03/2024*/ }
{/* Descrição detalhada: Nesse componente, o código lida com a manipulação de dados do formulário, realiza validações no 
lado do cliente, e envia esses dados para um servidor, para ser processado e gravado em um documento txt. O componente é 
configurado para fornecer feedback visual aos usuários sobre o sucesso ou falha no processamento do formulário.*/}

import React, { useState, useEffect } from 'react';
import './Modific_cart.css';
import { useNavigate } from 'react-router-dom'; //recuperar a rota 

{/*Utiliza o useState para a criação de um estado local chamado formValues(vai armazenar as informações do campo de nome_titular
cpf, num_cartao, datavenc, cod_segurança) */ }
const Modific_cart = () => {
    const navigate = useNavigate();
    const [nomeTitular, setNomeTitular] = useState('')
    const [cpf, setCpf] = useState('')
    const [numCartao, setNumCartao] = useState('')
    const [dataVenc, setDataVenc] = useState('')
    const [codSeguranca, setCodSeguranca] = useState('')

    useEffect(() => {
        // Função assíncrona para buscar dados do usuário
        const showDados = async () => {
            const id_cad = localStorage.getItem('ID')
            try {
                // Faz uma requisição para receber os dados do usuário do servidor
                const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
                    method: 'POST', // Método da requisição
                    headers: {
                        'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                    },
                    body: JSON.stringify({ acao: 'selecionar_cart', id_cadastro: id_cad }), // Corpo da requisição contendo os dados do formulário
                });

                // Verifica se a requisição foi bem-sucedida
                if (!resposta.ok) {
                    throw new Error('Erro ao obter dados do cartão'); // Lança um erro se a requisição falhar
                }
                // Extrai os dados da resposta e os converte para JSON
                const dadosCart = await resposta.json();
                console.log(dadosCart)
                //console.log('Dados do usuário:', userData);
                console.log("Dados recebidos do select do cartão", dadosCart.mensagem);
                // Atualiza o estado do formulário com os dados do usuário recebidos
                setNomeTitular(dadosCart.mensagem[7]); // Define o novo valor para 'nome'
                setCpf(dadosCart.mensagem[2]);
                setNumCartao(dadosCart.mensagem[4]);
                setDataVenc(dadosCart.mensagem[6]);
                setCodSeguranca(dadosCart.mensagem[5].toString());
            } catch (error) {
                console.error('Erro ao buscar dados do cartão 2:', error); // Captura e exibe qualquer erro ocorrido durante a busca dos dados do usuário
            }
        };

        showDados(); // Chama a função para buscar os dados do usuário quando o componente é montado
    }, []); // Array de dependências vazio, indica que este efeito deve ser executado apenas uma vez

    const [mensagensErro, setMensagensErro] = useState([]);
    const handleAtualizarCart = async (e) => {
        e.preventDefault(); // Prevenir o envio padrão do formulário
        const id_cad = localStorage.getItem('ID');
        try {
            // Faz uma requisição para enviar os dados do formulário para o servidor
            const resposta = await fetch('http://10.135.60.29:8085/receber-dados', {
                method: 'POST', // Método da requisição
                headers: {
                    'Content-Type': 'application/json', // Tipo de conteúdo da requisição
                },
                body: JSON.stringify({
                    acao: 'atualizar_cart',
                    id: id_cad,
                    novo_Cpf: cpf,
                    novo_numCartao: numCartao,
                    novo_cvv: codSeguranca,
                    nova_dataVenc: dataVenc,
                    novo_nomeTitular: nomeTitular,
                }), // Corpo da requisição contendo os dados do formulário em formato JSON
            });
            // Extrai o resultado da resposta e o converte para JSON
            const resultado = await resposta.json();
            console.log('teste retorno do cartão', resultado);
            // Verifica se ocorreu algum erro no servidor
            if (resultado.erro) {
                // Exibe mensagens de erro no console ou em algum local visível
                console.error('Erro no servidor:', resultado.mensagens);
                // Atualiza o estado com as mensagens de erro para exibição no formulário
                setMensagensErro(resultado.mensagens);
            } else {
                console.log('Dados de cartão atualizados com sucesso!', resultado);
                setNomeTitular('');
                setCpf('');
                setNumCartao('');
                setDataVenc('');
                setCodSeguranca('');
                navigate('/calendario')
            }
        } catch (error) {
            console.error('Erro ao enviar dados do cartão:', error); // Captura e exibe qualquer erro ocorrido durante o envio dos dados do formulário
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

            <section className="form_modifcartao">
                <form className="modificar_cartao" id="modificarcart" action="" onSubmit={handleAtualizarCart}/*O método handleSubmit é chamado quando o formulário é enviado.*/> {/*form do cartão*/}
                    <h1 className="h1_modific_cartao">Modificar dados do cartão</h1>

                    <div className="form_grupo"> {/*div para parte do nome do titular*/}
                        <label className="nome_titular">Nome completo do titular</label>
                        <input className="input_1" type="text" name="nome_titular" id="nome_titular" value={nomeTitular} onChange={(e) => setNomeTitular(e.target.value)} placeholder="Digite o nome do titular" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do cpf*/}
                        <label className="cpf">CPF</label>
                        <input className="input_2" type="text" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite o CPF" data-min-length="3" data-max-length="100" data-only-letters />
                    </div>

                    <div className="form_grupo"> {/*div para parte do numero do cartao*/}
                        <label className="num_cartao">Número do cartão</label>
                        <input className="input_3" type="number" name="num_cartao" id="num_cartao" value={numCartao} onChange={(e) => setNumCartao(e.target.value)} placeholder="Digite o número do cartão" data-min-length="16" data-max-length="40" />
                    </div>

                    <div className="form_grupo"> {/*div para parte da data de vencimento*/}
                        <label className="datavenc">Data de vencimento</label>
                        <input className="input_4" type="date" name="datavenc" id="datavenc" value={dataVenc} onChange={(e) => setDataVenc(e.target.value)} placeholder="Digite a data de vencimento" data-min-length="8" data-max-length="15" />
                    </div>

                    <div className="form_grupo"> {/*div para a parte de codigo de segurança*/}
                        <label className="codigo_seg">Código de segurança </label>
                        <input className="input_5" type="number" name="cod_seguranca" id="cod_seguranca" value={codSeguranca} onChange={(e) => setCodSeguranca(e.target.value)} placeholder="Digite o código de segurança" data-min-length="3" />
                    </div>

                    <div className="btn_modific_cart">
                        <div className="salvar_modif_cart"> {/*botão salvar do footer */}
                            <input type='submit' className="btn_cartao" id="btn_sal_cart" value="Salvar" />
                        </div>
                        <div className="can_modif_cart"> {/*botão cancelar do footer */}
                            <input type="button" className="btn_cartao" id="btn_can_cart" value="Cancelar" />
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