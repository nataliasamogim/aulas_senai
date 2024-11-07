{/* Componente PlanoMensal */}
{/* Autor: Júlia Dias Lara*/}
{/* 22/03/2023-06/12/2023 */}
{/* Descrição detalhada: este componente representa uma seção de um formulário de pagamento para um plano mensal, */}
{/* oferecendo escolhas de forma de pagamento por Pix ou cartão de crédito, com botões para voltar e continuar */}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pagamento.css';


{/* Função Planomensal*/}
{/* Autor: Júlia Dias Lara */}
{/* 22/03/2023-01/12/2023*/}
{/* Parâmetros entrada: nulo*/}
{/* Retorno:nulo */}
{/* Descrição/Observação: Representa uma seção de pagamaento mensal, apresenta opções de pagamento (Pix e cartão de crédito) */}
{/* e botões para navegação, como voltar e continuar. */}

function Esc_Pag_Modific() {
    // Estado para controlar a opção de pagamento selecionada
    const [formaPagamento, setFormaPagamento] = useState('');

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




