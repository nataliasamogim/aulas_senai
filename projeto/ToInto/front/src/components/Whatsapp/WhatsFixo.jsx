{/*     Nome componente: WhatsFixo.jsx
        Autora: Júlia
        Data de Criação: 22/03/2023 - Alteração: 05/12/2024
        Descrições: Esse componente cria um ícone fixo do WhatsApp na tela. Esse ícone é um link que redireciona para
        o WhatsApp quando clicado. O elemento inclui  essa funcionalidade, permitindo seu uso em outros lugares do projeto
        React.
        Observações: Oferece um ícone fixo na tela representando o ícone do WhatsApp
 */}

import './WhatsFixo.css'

{/*  Nome da função: WhatsFixo
     Autora: Júlia
     Criação: 22/03/2023 - Alteração 05/12/2024
     Parâmetros de entrada: NULO
     Retorno: Retorna a imagem fixa do WhatsApp
     Descrição/Observação: Essa função em React cria um ícone fixo do WhatsApp na tela. Quando clicado, o ícone redireciona
     para o site do WhatsApp, essa estrutura cria um atalho visual para os usuários acessarem o WhatsApp enquanto navegam pelo site.
*/}

function WhatsFixo() {

    return (
        <>
            <div className="fixed"> {/*div da imagem do whatsapp que fica fixo na tela*/}
                <a href="https://www.whatsapp.com/?lang=pt_br" id="btn_whats_fixo">
                    <img className="whatsapp_fixed" src="image/whatsapp.png" alt="whatsapp" /> {/*Imagem do whatsapp que fica fixo na tela*/}
                </a>
            </div>
        </>
    )
}

export { WhatsFixo };