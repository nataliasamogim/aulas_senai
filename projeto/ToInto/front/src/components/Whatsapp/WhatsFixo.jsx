{/*     Whatsapp.jsx
        Autora: Marília
        Data de Criação: 22/03 - Alteração: 01/12
        Descrições: Esse componente cria um ícone fixo do WhatsApp na tela. Esse ícone é um link que redireciona para
        o WhatsApp quando clicado. O elemento inclui  essa funcionalidade, permitindo seu uso em outros lugares do projeto
        React.
        Observações: Oferece um ícone fixo na tela representando o ícone do WhatsApp
 */}

import './WhatsFixo.css'

{/* Função Whatsapp
     Autora: Marília
     Criação: 22/03 - Alteração 01/12
     Parâmetros de entrada: NULO
     Retorno
     Retorna a imagem fixa do WhatsApp
     Descrição/Observação: Essa função em React cria um ícone fixo do WhatsApp na tela. Quando clicado, o ícone redireciona
     para o site do WhatsApp, essa estrutura cria um atalho visual para os usuários acessarem o WhatsApp enquanto navegam pelo site.
*/}

function WhatsFixo() {

    return (
        <>
            <div className="fixed"> {/*div da imagem do whatsapp que fica fixed na tela*/}
                <a href="https://www.whatsapp.com/?lang=pt_br">
                    <img className="whatsapp_fixed" src="image/whatsapp.png" alt="whatsapp" />
                </a>
            </div>
        </>
    )
}

export { WhatsFixo };