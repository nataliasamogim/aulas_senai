import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Modific_plano.css';

function ModificPlano() {
    const [selectedBox, setSelectedBox] = useState(null);
    const navigate = useNavigate();

    // Função para verificar o plano ao atualizar selectedBox
    useEffect(() => {
        if (selectedBox !== null) {
            handleVerifiqPlano(selectedBox);
        }
    }, [selectedBox]);

    // Função para enviar os dados do plano selecionado ao backend
    const handleVerifiqPlano = async (selectedBox) => {
        try {
            const resposta = await fetch('http://10.135.60.34:8085/receber-dados', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ acao: 'atualizar_plano_mean', id_cad: localStorage.getItem("ID"), plano_esc: selectedBox }),
            });
            const resultado = await resposta.json();
            
            if (resultado.erro === false || selectedBox === 1) {
                handleModifPlano(selectedBox, resultado.mensagem[0]);
                navigate('/Login');
            } else {
                if (selectedBox === '') {
                    throw new Error('Precisa selecionar o plano que deseja');
                } else {
                    localStorage.setItem('plano_esc', JSON.stringify(selectedBox));
                    if (selectedBox === 2 || selectedBox === 3) {
                        navigate('/pagamento');
                    } else {
                        navigate('/modificplano');
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    // Função para inserir o plano no banco de dados
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

    // Função para definir o plano selecionado
    const handleBoxPress = (boxNumber) => {
        setSelectedBox(boxNumber);
    };

    return (
        <section className="planos" id="plano">
            <div className="plano_free" onClick={() => handleBoxPress(1)}>
                <img className="free" src="image/free.png" alt="" />
                <h1 className="h1_1">Free</h1>
                <p className="p1">Use o TOINTO de forma gratuita com funcionalidades básicas</p>
                <h1 className="preco_1">R$00,00</h1>
                <button className="btn_1">Modificar Agora</button>
            </div>
            <div className="plano_mensal" onClick={() => handleBoxPress(2)}>
                <img className="oi" src="image/oi.png" alt="" />
                <h1 className="h1_2">Plano Mensal</h1>
                <p className="p2">Tenha a maioria das funcionalidades pagando um pequeno valor mensal</p>
                <h1 className="preco_2">R$7,90/mês</h1>
                <button className="btn_2">Modificar Agora</button>
            </div>
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
