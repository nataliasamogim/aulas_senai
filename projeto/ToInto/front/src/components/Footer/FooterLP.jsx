{/* Nome componente: FooterLP
    Autor(a): Luis Otávio
    Data de criação: 22/03/2023 e data de alteração:01/12/2023
    Descrição detalhada:
    -Opinião: Campo de texto e botão "Enviar" para opiniões de usuários.
    -Sobre Nós: Informações sobre equipe/empresa, missão, e produto "Tointo".
-Redes Sociais: Links para Instagram, Facebook, Whatsapp com estilização usando React JSX e CSS.*/}

import './FooterLP.css'

{/* Nome função: FooterLP
    Autor(a): Luis Otávio
    Data de criação: 22/03/2023 e data de alteração:01/12/2023
    Parametros de entrada: Nulo
    Retorno: Uma descrição do JSX que compõe o componente do rodapé
    Descrição/observação:
    -FooterLP é um componente React que representa o rodapé de uma página.
    -Estrutura inclui seções para opiniões, informações sobre a empresa e links para redes sociais.
    -Informações sobre a empresa destacam a missão e o produto "Tointo".
    -Recomendações incluem melhorar acessibilidade e verificar caminhos de imagens locais.  
*/}

function FooterLP() {
    return (
        <>
            {/*Início Footer*/}

            <footer className="foot">

                <div className="opiniao">
                    {/*div que contem o textarea para a pessoa escrever o que achou do site e o botão deenviar a resposta*/}
                    <textarea className="textarea" placeholder="O que você achou?" name="opinião" id="opinião" cols="50"
                        rows="1"></textarea>
                    <button className="enviar_btn" type="submit">Enviar</button>
                </div>

                <div className="footer_element"> {/*div dentro do footer, para colocar a descrição SOBRE NÓs*/}
                    <aside className="sobre">
                        <h2 className="titulo_sobre">Sobre Nós</h2>{/* Começo da descrição sobre nós*/}
                        <p className="nos">Nós do ProDS somos uma equipe que pensamos e desenvolvemos softwares <br/> para ajudar no seu
                            cotidiano, de uma
                            forma fácil e rápida, sempre prezando pelo melhor de nossos usuários. <br/> Somos uma startup jovem, mas
                                com muita experiência e vanguarda. <br/> Tentamos facilitar ao máximo o manuseamento do site e estamos
                                    sempre dispostos a melhorá-lo, priorizando as suas críticas! <br/> Por isso, nosso produto recebeu o nome
                                        Tointo, que em português significa "Juntos na Organização".</p>
                                </aside>

                                <nav className="redes"> {/*nav que contem as redes sociais do Instagram, Facebook e Whatsapp da empresa*/}
                                    <h2 className="titulo">Redes Sociais</h2>
                                    <ul className="sociais">
                                        <li><a href="https://www.instagram.com/tointoapp/?next=%2F"><img className="instagram" src="image/instagram.png"
                                            alt="instagram" /></a></li>
                                        <li><a href="https://pt-br.facebook.com/"><img className="facebook" src="image/facebook.png"
                                            alt="facebook" /></a></li>
                                        <li><a href="https://www.whatsapp.com/?lang=pt_br"><img className="whatsapp" src="image/whatsapp.png"
                                            alt="whatsapp" /></a></li>
                                    </ul>
                                </nav>
                </div>

            </footer>


        {/*Fim Footer*/}
        </>
    );
}

export {FooterLP};