import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DadosCartao.css';

// Função para formatar a data como MM/AA 
const formatarData = (valor) => { 
    // Remove todos os caracteres não numéricos 
    const apenasNumeros = valor.replace(/\D/g, ''); 
    // Adiciona a barra após dois dígitos 
    if (apenasNumeros.length > 2) { 
        return `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2, 4)}`; 
    } 
    return apenasNumeros; 
};

const DadosCartao = () => {
    const navigate = useNavigate();
    const [formCartao, setFormCartao] = useState({
        acao: 'salvar_cart',
        id: localStorage.getItem("ID"),
        cpf: '',
        num_cartao: '',
        cod_seguranca: '',
        datavenc: '',
        nome_titular: '',
        escolha_pag: '2',
        plano_esc: localStorage.getItem('plano_esc')
    });

    // Função para formatar o CPF
    const formatarCpf = (valor) => {
        const apenasNumeros = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (apenasNumeros.length <= 11) {
            return apenasNumeros.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
                .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço
        }
        return valor; // Retorna o valor original se exceder 11 caracteres
    };

    // Função para formatar o número do cartão
    const formatarNumeroCartao = (valor) => {
        const apenasNumeros = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
        return apenasNumeros.replace(/(.{4})/g, '$1 ').trim(); // Adiciona um espaço a cada quatro dígitos
    };

    // Função para lidar com a mudança no campo CPF
    const handleChangeCpf = (e) => {
        const valor = e.target.value;
        setFormCartao((prevValues) => ({
            ...prevValues,
            cpf: formatarCpf(valor) // Atualiza o estado com o CPF formatado
        }));
    };

    // Função para lidar com a mudança no campo Número do Cartão
    const handleChangeNumCartao = (e) => {
        const valor = e.target.value;
        const valorFormatado = formatarNumeroCartao(valor);
        setFormCartao((prevValues) => ({
            ...prevValues,
            num_cartao: valorFormatado // Atualiza o estado com o número do cartão formatado
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Formata a data de vencimento         
        if (name === 'datavenc') {
            // Formata a data e limita a 5 caracteres             
            setFormCartao((prevValues) => ({
                ...prevValues,
                [name]: formatarData(value).slice(0, 5),
            }));
        } else {
            setFormCartao((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    const [mensagensErro, setMensagensErro] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resposta = await fetch('http://10.135.60.14:8085/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formCartao),
            });

            const resultado = await resposta.json();

            if (resultado.erro) {
                console.error('Erro no servidor:', resultado.mensagens);
                setMensagensErro(resultado.mensagens);
            } else {
                console.log('Dados processados do cartão com sucesso!', resposta);
                setFormCartao({
                    id: localStorage.getItem("ID"),
                    cpf: '',
                    num_cartao: '',
                    cod_seguranca: '',
                    datavenc: '',
                    nome_titular: '',
                    escolha_pag: '2'
                }); // Resetando o formulário
                navigate('/concluido');
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
                <form className="adic_cartao" id="adicionarcart" onSubmit={handleSubmit}>
                    <h1 className="h1_cartao">Adicionar dados do cartão</h1>

                    <div className="form_grupo">
                        <label className="nome_titular">Nome completo do titular</label>
                        <input className="input_1" type="text" name="nome_titular" id="nome_titular" value={formCartao.nome_titular} onChange={handleChange} placeholder="Digite o nome do titular" data-min-length="3" data-max-length="100" />
                    </div>

                    <div className="form_grupo">
                        <label className="cpf">CPF</label>
                        <input className="input_2" type="text" name="cpf" id="cpf" value={formCartao.cpf} onChange={handleChangeCpf} placeholder="___.___.___-__" data-min-length="3" data-max-length="100" maxLength={14} />
                    </div>

                    <div className="form_grupo">
                        <label className="num_cartao">Número do cartão</label>
                        <input className="input_3" type="text" name="num_cartao" id="num_cartao" value={formCartao.num_cartao} onChange={handleChangeNumCartao} placeholder="Digite o número do cartão" maxLength={19} />
                    </div>

                    <div className="form_grupo">
                        <label className="datavenc">Data de vencimento</label>
                        <input className="input_4" type="text" name="datavenc" id="datavenc" value={formCartao.datavenc} onChange={handleChange} placeholder="MM/AA" data-min-length="4" data-max-length="5" />
                    </div>

                    <div className="form_grupo">
                        <label className="codigo_seg">Código de segurança </label>
                        <input className="input_5" type="text" name="cod_seguranca" id="cod_seguranca" value={formCartao.cod_seguranca} onChange={handleChange} placeholder="Digite o código de segurança" maxLength={4} />
                    </div>

                    <div className="buttons_cartao">
                        <div className="salvar_cartao">
                            <input type='submit' className="btn_cartao" id="btn_salvarcart" value="Salvar" />
                        </div>
                        <div className="can_cartao">
                            <input type='button' className="btn_cartao" id="btn_can_cart" value="Cancelar" onClick={() => navigate('/caminho-do-cancelamento')} />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default DadosCartao;
