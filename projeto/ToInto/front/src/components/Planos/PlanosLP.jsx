{/*Nome componente: PlanosLP*/ }
{/*Autora: Júlia*/ }
{/*Data de criação:22/03/2023 e data de alteração: 05/12/2024*/ }
{/*Descrição: Representa uma seção de planos de serviço do aplicativo Tointo, apresentando os seus preços na Landing Page*/ }
{/*Observações pertinentes:
- O código importa o componente `Link` do pacote 'react-router-dom' que direciona a página de cadastro*/}

import './PlanosLP.css'


{/*Nome função: PlanosLP*/ }
{/*Autora: Júlia*/ }
{/*Data de criação:22/03/2023 e data de alteração: 05/12/2024*/ }
{/*Parâmetros de entrada: Nulo*/ }
{/*Retorno: retorna os planos*/ }
function PlanosLP() {

    return (
        <>
            {/*Seção para os planos do TOINTO*/}
            <section className="planos" id="plano">

                {/*Essa div chamada "plano_free" apresenta na LP o preço, a descrição e imagem do Plano Free*/}
                <div className="plano_free">
                    <img className="free" src="image/free.png" alt="" />
                    <h1 className="h1_1">Free</h1>
                    <p className="p1">Use o TOINTO de forma gratuita <br /> com funcionalidades básicas</p>
                    <h1 className="preco_1">R$00,00</h1>
                </div>

                {/*Essa div chamada "plano_mensal" apresenta na LP o preço, a descrição e imagem do Plano Mensal*/}
                <div className="plano_mensal">
                    <img className="oi" src="image/oi.png" alt="" />
                    <h1 className="h1_2">Plano Mensal</h1>
                    <p className="p2">Tenha a maioria das funcionalidades <br /> pagando um pequeno valor mensal</p>
                    <h1 className="preco_2">R$7,90/mês</h1>
                </div>

                {/*Essa div chamada "plano_anual" apresenta na LP o preço, a descrição e imagem do Plano Anual*/}
                <div className="plano_anual">
                    <img className="anual" src="image/anual.png" alt="" />
                    <h1 className="h1_3">Plano Anual</h1>
                    <p className="p3">Use todas as funcionalidades <br /> pagando um plano anual</p>
                    <h1 className="preco_3">R$109,90/ano</h1>
                </div>
            </section>

        </>
    )
}

export { PlanosLP };