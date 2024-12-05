{/* Nome componente: FooterLP
    Autora: Júlia
    Data de criação: 22/03/2023 e data de alteração:05/12/2024
    Descrição detalhada: O Footer possui a seção Sobre Nós com informações sobre equipe/empresa e missão do "Tointo", 
    as Redes Sociais com links para Instagram, Facebook, Whatsapp qe possuem estilização usando React JSX e CSS,
    além de link para suporte*/}
import './FooterLP.css'

{/* Nome função: FooterLP
    Autora: Júlia
    Data de criação: 22/03/2023 e data de alteração:05/12/2024
    Parametros de entrada: Nulo
    Retorno: Uma descrição do JSX que compõe o componente do rodapé
    Descrição/observação: O FooterLP é um componente React que representa o rodapé de uma página,
    possui estrutura que inclui informações sobre a empresa e links para redes sociais e o vídeo de suporte.
*/}

function FooterLP() {
    return (
        <>
            {/*Início Footer*/}

            <footer className="foot">

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

                                <nav className="redes"> {/*nav que contém as redes sociais do Instagram, Facebook e Whatsapp da empresa*/}
                                    <h2 className="titulo">Redes Sociais</h2>
                                    <ul className="sociais">
                                        {/*Link para a página do TOINTO no Instagram*/}
                                        <li><a href="https://www.instagram.com/tointoapp/?next=%2F" id='btn_instagram'><img className="instagram" src="image/instagram.png"
                                            alt="instagram" /></a></li>
                                        {/*Link para a página do facebook*/}
                                        <li><a href="https://pt-br.facebook.com/" id='btn_facebook'><img className="facebook" src="image/facebook.png"
                                            alt="facebook" /></a></li>
                                        {/*Link para o Whatsapp*/}
                                        <li><a href="https://www.whatsapp.com/?lang=pt_br" id='btn_whatsapp'><img className="whatsapp" src="image/whatsapp.png"
                                            alt="whatsapp" /></a></li>
                                    </ul>
                                </nav>

                                {/* Link adicional para o vídeo de suporte */}
                                <div className='ajuda'>
                        <a href="https://youtu.be/A7NvR5JrT8Y" id='btn_ajuda'><img className="ajuda" src="image/interrogacao.png"
                            alt="ajuda" /></a>
                    </div>
                </div>

            </footer>


        {/*Fim Footer*/}
        </>
    );
}

export {FooterLP};