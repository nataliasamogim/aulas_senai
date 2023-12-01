import { Link } from 'react-router-dom';
import './PlanosLP.css'

function PlanosLP() {
    return (
        <>
            <section className="planos" id="plano"> {/*Section com os planos*/}
                <div className="plano_free">{/*plano gratis*/}
                    <img className="free" src="image/free.png" alt=""/>
                        <h1 className="h1_1">Free</h1>
                        <p className="p1">Use o TOINTO de forma gratuita <br/> com funcionalidades básicas</p>
                        <h1 className="preco_1">R$00,00</h1>
                        <Link to="/cadastro" className="btn_1">Assine Agora</Link> {/*Rota do gratis para o cadastro */}
                </div>

                <div className="plano_mensal"> {/*plano mensal*/}
                    <img className="oi" src="image/oi.png" alt=""/>
                        <h1 className="h1_2">Plano Mensal</h1>
                        <p className="p2">Tenha a maioria das funcionalidades <br/> pagando um pequeno valor mensal</p>
                        <h1 className="preco_2">R$7,90/mês</h1>
                        <Link to="/cadastro" className="btn_2">Assine Agora</Link> {/*Rota do mensal para o cadastro*/}
                </div>

                <div className="plano_anual"> {/*plano anual */}
                    <img className="anual" src="image/anual.png" alt=""/>
                        <h1 className="h1_3">Plano Anual</h1>
                        <p className="p3">Use todas as funcionalidades <br/> pagando um plano anual</p>
                        <h1 className="preco_3">R$109,90/ano</h1>
                        <Link to="/cadastro" className="btn_3">Assine Agora</Link> {/*Rota do anual para o cadastro */}
                </div>
            </section>
        </>
    );
}

export { PlanosLP };