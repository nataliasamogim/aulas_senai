{/* Componente PlanoAnual */}
{/* Autor: Júlia Dias Lara*/}
{/* 22/03/2023-06/12/2023 */}
{/* Descrição detalhada: este componente representa uma seção de um formulário de pagamento para um plano anual, */}
{/* oferecendo escolhas de forma de pagamento por Pix ou cartão de crédito, com botões para voltar e continuar */}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagamento.css';

{/* Função Planoanual*/}
{/* Autor: Júlia Dias Lara */}
{/* 22/03/2023-01/12/2023*/}
{/* Parâmetros entrada: nulo*/}
{/* Retorno:nulo */}
{/* Descrição/Observação: Representa uma seção de pagamaento anual, apresenta opções de pagamento (Pix e cartão de crédito) */}
{/* e botões para navegação, como voltar e continuar. */}
function PlanoAnual() {
    // Estado para controlar a opção de pagamento selecionada
    const [formaPagamento, setFormaPagamento] = useState('');

    return (
        <>
            <section className="form_pagamento">
                <form className="pagamento">
                    <h1 className="h1_mensal">Plano Anual</h1>

                    <div className="content">
                        <h3 className="escolha">Escolha sua forma de pagamento</h3>

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

                        <div className="btn">
                            <Link to={formaPagamento === 'cartao' ? "/dadoscart" : formaPagamento === 'pix' ? "/dadospix" : "/mensal"} className="button_btn">Continuar</Link>
                            <Link to="/" className="button_btn">Voltar</Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export { PlanoAnual };
