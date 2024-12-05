{/* Nome do componente: Esc_Pag_Modific 
Autor(a): Laura
Data de criação: 22/03/2023 /Alterações: 05/12/2024
Descrição detalhada:
    Este componente representa uma seção de um formulário de pagamento para um plano mensal, oferecendo escolhas de forma de pagamento (Pix ou cartão de crédito),
    com botões para voltar e continuar. O componente permite que o usuário escolha sua forma de pagamento e navegue para a próxima seção do pagamento. */}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagamento.css';

{/* Função Esc_Pag_Modific
    Autor(a): Laura
    Data de criação: 22/03/2023 /Alterações: 05/12/2024 
    Parâmetros de entrada: Nenhum 
    Retorno: Nenhum 
    Descrição/Observação: 
        Este componente representa uma seção de pagamento mensal, exibindo opções de escolha de forma de pagamento (Pix e cartão de crédito),
        e com navegação entre as páginas, incluindo os botões "Continuar" e "Voltar". O estado controla a forma de pagamento selecionada pelo usuário. */}

function Esc_Pag_Modific() {

    return (
        <>
            <section className="form_pagamento">
                <form className="pagamento">
                    <h1 className="h1_mensal">Pagamento</h1>

                    <div className="content">
                        <h3 className="escolha">Escolha sua forma de pagamento</h3>

                        <div className="pix">
                            <input
                                className="pagamento"
                                type="radio"
                                name="pix"
                                id="pix"
                                checked={formaPagamento === 'pix'}
                                onChange={() => setFormaPagamento('pix')}
                            />
                            <span className="span_frase">Pix</span>
                        </div>

                        <div className="cartao">
                            <input
                                className="pagamento"
                                type="radio"
                                name="cartao"
                                id="cartao"
                                checked={formaPagamento === 'cartao'}
                                onChange={() => setFormaPagamento('cartao')}
                            />
                            <span className="span_frase">Cartão de crédito</span>
                        </div>
                        <div className="btn_pag">
                            <Link to={formaPagamento === 'cartao' ? "/dadoscart" : formaPagamento === 'pix' ? "/dadospix" : "/escpag"} className="button_btn" id='cont_esc'>Continuar</Link>
                            <Link to="/calendario" className="button_btn_voltar" id='voltar_esc'>Voltar</Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export { Esc_Pag_Modific };
