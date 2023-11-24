import './FooterLP.css';

function FooterLP() {
    return (
        <>
            <footer className="foot">

                <div className="opiniao"> {/*Area para a opinião do ususario*/}
                    <textarea className="textarea" placeholder="O que você achou?" name="opinião" id="opinião" cols="50"
                        rows="1"></textarea>
                    <button className="enviar_btn" type="submit">Enviar</button>
                </div>

                <div className="footer_element"> {/*Area do sobre nos e das redes */}
                    <aside className="sobre"> {/*sobre nos*/}
                        <h2 className="titulo_sobre">Sobre Nós</h2>
                        <p className="nos">Nós do ProDS somos uma equipe que pensamos e desenvolvemos softwares <br/> para ajudar no seu
                            cotidiano, de uma
                            forma fácil e rápida, sempre prezando pelo melhor de nossos usuários. <br/> Somos uma startup jovem, mas
                                com muita experiência e vanguarda. <br/> Tentamos facilitar ao máximo o manuseamento do site e estamos
                                    sempre dispostos a melhorá-lo, priorizando as suas críticas! <br/> Por isso, nosso produto recebeu o nome
                                        Tointo, que em português significa "Juntos na Organização".</p>
                    </aside>

                    <nav className="redes"> {/*redes sociais */}
                        <h2 className="titulo">Redes Sociais</h2>
                            <ul className="sociais">
                                <li><a href="https://www.instagram.com/"><img className="instagram" src="image/instagram.png"
                                    alt="instagram"/></a></li>
                                <li><a href="https://pt-br.facebook.com/"><img className="facebook" src="image/facebook.png"
                                    alt="facebook"/></a></li>
                                <li><a href="https://www.whatsapp.com/?lang=pt_br"><img className="whatsapp" src="image/whatsapp.png"
                                     alt="whatsapp"/></a></li>
                            </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export {FooterLP};