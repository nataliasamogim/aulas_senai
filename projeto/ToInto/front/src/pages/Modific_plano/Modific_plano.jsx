{/* Nome do Componente: ModificPlano
Autor(a): Laura
Data Criação: /Alterações: 05/12/2024
Descrição Detalhada: Esse componente é responsável por exibir as opções de planos (Free, Mensal, Anual) para o usuário. 
O usuário pode selecionar um plano, e o estado `selectedBox` é usado para determinar qual plano foi selecionado. 
Dependendo do plano escolhido, o usuário será redirecionado para a página de pagamento ou será levado para o login. 
A seleção do plano e a interação com o backend para atualizar o plano selecionado são realizadas através de funções assíncronas.*/}

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Modific_plano.css';
 
{/*Nome da Função: ModificPlano
Autor: Laura
Data Criação: /Alterações: 05/12/2024
Retorno: Nenhum
Descrição/Observação: Exibe três planos (Free, Mensal, Anual) que o usuário pode selecionar para modificar.
O plano selecionado é armazenado no estado `selectedBox` e enviado para o backend quando alterado.*/}
function ModificPlano() {
    const [selectedBox, setSelectedBox] = useState(null);  // Armazena o plano selecionado
    const navigate = useNavigate();  // Hook de navegação do React Router

    // Função para verificar o plano e enviar para o backend assim que `selectedBox` for atualizado
    useEffect(() => {
        if (selectedBox !== null) {
            handleVerifiqPlano(selectedBox);  // Chama a função para enviar o plano selecionado ao backend
        }
    }, [selectedBox]);  // Dependência: será chamado sempre que `selectedBox` for alterado

    {/* Descrição/Observação: Envia a escolha do plano ao backend para ser verificado e alterado no banco de dados. Redireciona o usuário dependendo do plano selecionado ou se há erro.*/}
    const handleVerifiqPlano = async (selectedBox) => {
        try {
            // Envia os dados para o backend para atualizar o plano
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ acao: 'atualizar_plano_mean', id_cad: localStorage.getItem("ID"), plano_esc: selectedBox }),
            });
            const resultado = await resposta.json();
            
            // Verifica a resposta e decide o redirecionamento
            if (resultado.erro === false || selectedBox === 1) {
                handleModifPlano(selectedBox, resultado.mensagem[0]);  // Chama a função para inserir o plano no banco
                navigate('/Login');  // Redireciona para a página de login
            } else {
                if (selectedBox === '') {
                    throw new Error('Precisa selecionar o plano que deseja');
                } else {
                    localStorage.setItem('plano_esc', JSON.stringify(selectedBox));  // Armazena o plano no localStorage
                    if (selectedBox === 2 || selectedBox === 3) {
                        navigate('/pagamento');  // Redireciona para a página de pagamento se for plano mensal ou anual
                    } else {
                        navigate('/modificplano');  // Redireciona de volta para a página de modificação de plano
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    {/*Descrição/Observação: Envia os dados do plano selecionado para serem armazenados no banco de dados.*/}
    const handleModifPlano = async (selectedBox, dadospag) => {
        try {
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ acao: 'atualizar_plano_insert', id_cad: localStorage.getItem("ID"), plano_esc: selectedBox, id_dados_pag: dadospag[0] }),
            });
            const resultado = await resposta.json();
            console.log('Retorno do insert na tabela compras pelo modificar plano:', resultado);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    {/*Descrição:Função para atualizar o estado do plano selecionado quando o usuário clica em uma das opções de plano*/}
    const handleBoxPress = (boxNumber) => {
        setSelectedBox(boxNumber);  // Atualiza o estado com o número do plano selecionado
    };

    return (
        <section className="planos" id="plano">
            {/* Plano Free */}
            <div className="plano_free" onClick={() => handleBoxPress(1)}>
                <img className="free" src="image/free.png" alt="" />
                <h1 className="h1_1">Free</h1>
                <p className="p1">Use o TOINTO de forma gratuita com funcionalidades básicas</p>
                <h1 className="preco_1">R$00,00</h1>
                <button className="btn_1">Modificar Agora</button>
            </div>
            {/* Plano Mensal */}
            <div className="plano_mensal" onClick={() => handleBoxPress(2)}>
                <img className="oi" src="image/oi.png" alt="" />
                <h1 className="h1_2">Plano Mensal</h1>
                <p className="p2">Tenha a maioria das funcionalidades pagando um pequeno valor mensal</p>
                <h1 className="preco_2">R$7,90/mês</h1>
                <button className="btn_2">Modificar Agora</button>
            </div>
            {/* Plano Anual */}
            <div className="plano_anual" onClick={() => handleBoxPress(3)}>
                <img className="anual" src="image/anual.png" alt="" />
                <h1 className="h1_3">Plano Anual</h1>
                <p className="p3">Use todas as funcionalidades pagando um plano anual</p>
                <h1 className="preco_3">R$109,90/ano</h1>
                <button className="btn_3">Modificar Agora</button>
            </div>
        </section>
    );
}

export { ModificPlano };
