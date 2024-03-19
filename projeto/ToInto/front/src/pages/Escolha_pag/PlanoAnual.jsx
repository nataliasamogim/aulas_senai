{/* Componente PlanoAnual */}
{/* Autor: Júlia Dias Lara*/}
{/* 22/03/2023-06/12/2023 */}
{/* Descrição detalhada: este componente representa uma seção de um formulário de pagamento para um plano anual, */}
{/* oferecendo escolhas de forma de pagamento por Pix ou cartão de crédito, com botões para voltar e continuar */}

import './Pagamento.css'

{/* Função Planoanual*/}
{/* Autor: Júlia Dias Lara */}
{/* 22/03/2023-01/12/2023*/}
{/* Parâmetros entrada: nulo*/}
{/* Retorno:nulo */}
{/* Descrição/Observação: Representa uma seção de pagamaento anual, apresenta opções de pagamento (Pix e cartão de crédito) */}
{/* e botões para navegação, como voltar e continuar. */}
function PlanoAnual() {
    return (
        <>
            <section className="form_pagamento"> {/*Section que contém o formulário*/}
                <form className="pagamento"> {/*Contém o h1 e as divs*/}
                    <h1 className="h1_mensal">Plano Anual</h1>

                    <div className="content">
                        <h3 className="escolha">Escolha sua forma de pagamento</h3>

                        <div className="pix"> {/*Div do input do cartão de crédito*/}
                            <input className="input_pagamento" type="radio" name="pagamento" id="pagamento" />
                            <span className="span_frase">Pix</span>
                        </div>

                        <div className="cartao"> {/*Div do input do boleto bancário*/}
                            <input className="input_pagamento" type="radio" name="pagamento" id="pagamento" />
                            <span className="span_frase">Cartão de crédito</span>
                        </div>

                        <div className="btn"> {/*Botão de voltar e continuar*/}
                            <button className="button_btn"><a href="index.html">Voltar</a></button>
                            <a href=""><button className="button_btn" type="submit">Continuar</button></a>
                        </div>
                    </div>
                </form>




            </section>

        </>
    );
}

export { PlanoAnual };