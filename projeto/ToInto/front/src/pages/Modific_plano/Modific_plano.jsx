import React from 'react';
import { Link } from 'react-router-dom';
import './Modific_plano.css';

function ModificPlano() {
    return (
        <section className="planos" id="plano">
            <div className="plano_free">
                <img className="free" src="image/free.png" alt="" />
                <h1 className="h1_1">Free</h1>
                <p className="p1">Use o TOINTO de forma gratuita <br /> com funcionalidades básicas</p>
                <h1 className="preco_1">R$00,00</h1>
                <Link to="/cadastro/free" className="btn_1">Modificar Agora</Link>
            </div>
            <div className="plano_mensal">
                <img className="oi" src="image/oi.png" alt="" />
                <h1 className="h1_2">Plano Mensal</h1>
                <p className="p2">Tenha a maioria das funcionalidades pagando um pequeno valor mensal</p>
                <h1 className="preco_2">R$7,90/mês</h1>
                <Link to="/cadastro/mensal" className="btn_2">Modificar Agora</Link>
            </div>
            <div className="plano_anual">
                <img className="anual" src="image/anual.png" alt="" />
                <h1 className="h1_3">Plano Anual</h1>
                <p className="p3">Use todas as funcionalidades <br /> pagando um plano anual</p>
                <h1 className="preco_3">R$109,90/ano</h1>
                <Link to="/cadastro/anual" className="btn_3">Modificar Agora</Link>
            </div>
        </section>
    );
}

export { ModificPlano };
