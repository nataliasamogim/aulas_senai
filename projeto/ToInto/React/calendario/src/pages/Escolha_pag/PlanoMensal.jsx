import './Pagamento.css'

function PlanoMensal() {
    return (
        <>
            <section class="form_pagamento"> {/*section que possui, o titulo e as escolhas para pagamento */}
                <form class="pagamento">
                    <h1 class="h1_mensal">Plano Mensal</h1>

                    <div class="content">
                        <h3 class="escolha">Escolha sua forma de pagamento</h3>

                        <div class="pix">
                            <input class="pagamento" type="radio" name="pagamento" id="pagamento"/>
                                <span class="span_frase">Pix</span>
                        </div>

                        <div class="cartao">
                            <input class="pagamento" type="radio" name="pagamento" id="pagamento"/>
                                <span class="span_frase">Cartão de crédito</span>
                        </div>

                        <div class="btn"> {/*botões de voltar e continuar */}
                            <button class="button_btn" type="submit"><a href="index.html">Voltar</a></button>
                            <a href=""><button class="button_btn" type="submit">Continuar</button></a>
                        </div>
                    </div>
                </form>

            </section>
        </>
    );
}

export { PlanoMensal };


